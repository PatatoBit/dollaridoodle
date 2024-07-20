import { GoogleAuthProvider, signInWithPopup, signOut, type Auth } from 'firebase/auth';

export const SignInWithGoogle = (auth: Auth) => {
	const provider = new GoogleAuthProvider();
	return signInWithPopup(auth, provider);
};

export const SignOut = (auth: Auth) => {
	return signOut(auth);
};
