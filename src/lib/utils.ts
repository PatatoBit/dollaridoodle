import { GoogleAuthProvider, signInWithPopup, signOut, type Auth } from 'firebase/auth';
import { storage } from './firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const SignInWithGoogle = async (auth: Auth) => {
	const provider = new GoogleAuthProvider();
	return await signInWithPopup(auth, provider);
};

export const SignOut = (auth: Auth) => {
	return signOut(auth);
};

export const UploadFile = async (file: File, path: string) => {
	const storageRef = ref(storage, path);
	await uploadBytes(storageRef, file).then((res) => {
		return res.metadata;
	});
};

export const GetFile = async (path: string) => {
	const fileRef = ref(storage, path);
	return await getDownloadURL(fileRef);
};
