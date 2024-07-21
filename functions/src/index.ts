/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import Stripe from 'stripe';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

admin.initializeApp();

export const helloWorld = onRequest((request, response) => {
	logger.info('Hello logs!', { structuredData: true });
	response.send('Hello from Firebase!');
});

export const handleStripeWebhook = onRequest(async (req, res) => {
	const stripe = new Stripe(functions.config().stripe.secret_key);
	const sig = req.headers['stripe-signature'] as string;

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(
			req.rawBody,
			sig,
			functions.config().stripe.payment_webhook_secret
		);
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
				await admin.firestore().collection('doodles').add(payloadData);
			} catch (error) {
				console.error('Error updating document:', error);
			}
		} else {
			console.error('No payload data recieved');
		}
	}

	res.status(200).json({ received: true });
});
