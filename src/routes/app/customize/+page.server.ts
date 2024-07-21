import Stripe from 'stripe';
import { error, redirect } from '@sveltejs/kit';
import admin from 'firebase-admin';

import type { Actions } from './$types';
import { STRIPE_SECRET_KEY } from '$env/static/private';

import * as serviceAccount from '../../../../serviceAccountKey.json';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const actions: Actions = {
	checkout: async ({ request }) => {
		let sessionUrl: string | null;

		const formData = await request.formData();

		const prompt: string = formData.get('prompt') as string;
		const isPrivate: boolean = formData.get('private') == 'on';
		const isExpress: boolean = formData.get('express') == 'on';

		let docRef;

		try {
			try {
				console.log('Saving document');

				admin.initializeApp({
					credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
				});

				docRef = await admin.firestore().collection('orders').add({
					status: 'PENDING',
					prompt,
					isPrivate,
					isExpress,
					createdAt: admin.firestore.FieldValue.serverTimestamp()
				});
			} catch (error) {
				console.error(error);
			}

			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: 'price_1PedNuJIiOwtKCnppUppAMtk',
						quantity: 1
					}
				],
				mode: 'payment',
				payment_method_types: ['card'],
				success_url: `${request.headers.get('origin')}/app/?success`,
				cancel_url: `${request.headers.get('origin')}/app/?cancelled`,
				metadata: {
					docId: docRef!.id
				}
			});

			sessionUrl = session.url;

			// Saving document
		} catch (err) {
			console.error(err);
			throw error(500, 'Stripe error');
		}

		if (sessionUrl) {
			throw redirect(303, sessionUrl);
		}
	}
};
