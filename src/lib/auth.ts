import { GoogleAuthProvider, signInWithPopup, signOut, type Auth } from 'firebase/auth';

export const SignInWithGoogle = async (auth: Auth) => {
	const provider = new GoogleAuthProvider();
	return await signInWithPopup(auth, provider);
};

export const SignOut = (auth: Auth) => {
	return signOut(auth);
};
