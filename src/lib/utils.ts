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

export const UploadFile = async (file: File, path: string): Promise<string> => {
	const storageRef = ref(storage, path);
	let fullPath = '';
	await uploadBytes(storageRef, file).then((res) => {
		fullPath = res.metadata.fullPath;
	});

	return fullPath;
};

export const GetFile = async (path: string): Promise<string> => {
	const fileRef = ref(storage, path);
	return await getDownloadURL(fileRef);
};
