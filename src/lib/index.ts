// place files you want to import through the `$lib` alias in this folder.
export interface RequestData {
	prompt: string;
	resolution: 'small' | 'medium' | 'large';
	isPrivate: boolean;
	isExpress: boolean;
	ownerName: string;
	ownerId: string;
	ownerEmail: string;
}

export interface AdminData {
	id: string;
	prompt: string;
	resolution: 'small' | 'medium' | 'large';
	isPrivate: boolean;
	isExpress: boolean;
	ownerName: string;
	ownerId: string;
	ownerEmail: string;
	status: 'PAID' | 'DOING' | 'COMPLETED';
}
