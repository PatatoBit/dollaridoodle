import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAsPIh2YXlKo3u3ajEFlZKZ5DxO1UiH6go',
	authDomain: 'dollarydoodle-17566.firebaseapp.com',
	projectId: 'dollarydoodle-17566',
	storageBucket: 'dollarydoodle-17566.appspot.com',
	messagingSenderId: '862779424947',
	appId: '1:862779424947:web:11bd9876b41a9b8285f0c6',
	measurementId: 'G-V8V0BVZY1G'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);
