import functions from 'firebase-functions';
import admin from 'firebase-admin';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { log } from 'firebase-functions/logger';

const stripe = new Stripe(STRIPE_SECRET_KEY);

admin.initializeApp();

export const handleStripeWebhook = functions.https.onRequest(async (req, res) => {
	const sig = req.headers['stripe-signature'] as string;
	let event;

	try {
		event = stripe.webhooks.constructEvent(
			req.rawBody,
			sig,
			functions.config().stripe.endpointsecret
		);
	} catch {
		res.status(400).send(`Webhook Error`);
		return;
	}

	if (event.type === 'payment_intent.succeeded') {
		log('PaymentIntent was successful!');
	} else {
		res.status(400).send('Unhandled event type');
	}
});
