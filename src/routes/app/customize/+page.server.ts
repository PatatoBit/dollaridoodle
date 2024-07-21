import Stripe from 'stripe';
import { collection } from 'firebase/firestore';

import type { Actions } from './$types';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';

import { db } from '$lib/firebase';

const stripe = new Stripe(STRIPE_SECRET_KEY);

export const actions: Actions = {
	checkout: async ({ request }) => {
		let sessionUrl: string | null;

		const formData = await request.formData();

		const prompt: string = formData.get('prompt') as string;
		const isPrivate: boolean = formData.get('private') == 'on';
		const isExpress: boolean = formData.get('express') == 'on';
		const requestCollection = collection(db, 'requests');

		console.log(prompt, isPrivate, isExpress, requestCollection);

		try {
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
				cancel_url: `${request.headers.get('origin')}/app/?cancelled`
			});

			sessionUrl = session.url;
		} catch (err) {
			console.error(err);
			throw error(500, 'Stripe error');
		}

		if (sessionUrl) {
			throw redirect(303, sessionUrl);
		}
	}
};
