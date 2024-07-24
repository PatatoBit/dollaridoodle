// place files you want to import through the `$lib` alias in this folder.
export interface RequestData {
	prompt: string;
	resolution: 'small' | 'medium' | 'large';
	isPrivate: boolean;
	isExpress: boolean;
}
