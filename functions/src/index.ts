/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import Stripe from 'stripe';
import { defineSecret } from 'firebase-functions/params';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp();

const stripeSecretKey = defineSecret('STRIPE_SECRET_KEY');
const stripeWebhookSecret = defineSecret('STRIPE_PAYMENT_WEBHOOK_SECRET');

export const handleStripeWebhook = onRequest(async (req, res) => {
	const stripeKey = stripeSecretKey.value();
	const stripeWebhook = stripeWebhookSecret.value();

	if (!stripeKey || !stripeWebhook) {
		console.error('Stripe secret key or webhook secret not found');
		res.status(500).send('Stripe secret key or webhook secret not found');
		return;
	}

	const stripe = new Stripe(stripeKey);

	const sig = req.headers['stripe-signature'] as string;

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(req.rawBody, sig, stripeWebhook);
	} catch (err) {
		console.error('⚠️ Webhook signature verification failed.', (err as Error).message);
		res.status(400).send(`Webhook Error: ${(err as Error).message}`);
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
					.add({
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
});
