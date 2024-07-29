// place files you want to import through the `$lib` alias in this folder.
export interface RequestData {
	prompt: string;
	resolution: 'small' | 'medium' | 'large';
	isPrivate: boolean;
	isExpress: boolean;
	ownerName: string;
	ownerId: string;
	ownerEmail: string;

	imageUrl?: string;
	status?: 'PAID' | 'DOING' | 'COMPLETED';
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
	imageUrl?: string;
}

export enum Resolution {
	small = 'small',
	medium = 'Medium',
	large = 'LARGE'
}

export enum ResolutionPrice {
	small = 3,
	medium = 7,
	large = 9
}
