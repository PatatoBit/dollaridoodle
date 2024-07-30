import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import Stripe from 'stripe';

admin.initializeApp();

export const handleStripeWebhook = onRequest(
	{ secrets: ['STRIPE_SECRET_KEY', 'STRIPE_PAYMENT_WEBHOOK_SECRET'] },
	async (req, res) => {
		const stripeKey = process.env.STRIPE_SECRET_KEY;
		const stripeWebhook = process.env.STRIPE_PAYMENT_WEBHOOK_SECRET;

		if (!stripeKey || !stripeWebhook) {
			console.error('Stripe secret key or webhook secret not found');
			res
				.status(500)
				.send(
					`Server: Stripe secret key or webhook secret not found\n ${stripeKey} \n${stripeWebhook}`
				);
			return;
		}

		const stripe = new Stripe(stripeKey);

		const sig = req.headers['stripe-signature'] as string;

		let event: Stripe.Event;

		try {
			event = stripe.webhooks.constructEvent(req.rawBody, sig, stripeWebhook);
		} catch (err) {
			console.error('⚠️ Webhook signature verification failed.', (err as Error).message);
			res
				.status(400)
				.send(
					`Webhook Error: ${(err as Error).message}, ${sig}\n secret: ${stripeKey}, ${stripeWebhook}`
				);
			return;
		}

		if (event.type === 'checkout.session.completed') {
			const session = event.data.object as Stripe.Checkout.Session;
			const payloadData = JSON.parse(session.metadata?.payloadData as string);

			if (payloadData) {
				try {
					await admin
						.firestore()
						.collection('requests')
						.doc(payloadData.id)
						.set({
							...payloadData,
							status: 'PAID',
							createdAt: admin.firestore.FieldValue.serverTimestamp()
						});
				} catch (error) {
					console.error('Error updating document:', error);
				}
			} else {
				console.error('No payload data recieved');
			}
		}

		res.status(200).json({ received: true });
	}
);
