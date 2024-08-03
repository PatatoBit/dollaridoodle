import { auth } from 'firebase-functions';
import * as admin from 'firebase-admin';

export const freeRequest = auth.user().onCreate(async (user) => {
	await admin.firestore().collection('users').doc(user.uid).set({
		firstRequest: true
	});
});
