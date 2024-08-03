import { freeRequest } from './auth';
import { stripeProd, stripeTest } from './stripeWebhook';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Stripe
export const handleStripeWebhook = stripeProd;
export const handleStripeTestWebhook = stripeTest;

// Free first request
export const freeFirstRequest = freeRequest;
