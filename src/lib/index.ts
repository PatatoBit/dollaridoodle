// place files you want to import through the `$lib` alias in this folder.
export interface RequestData {
	prompt: string;
	resolution: Resolution;
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
	resolution: Resolution;
	isPrivate: boolean;
	isExpress: boolean;
	ownerName: string;
	ownerId: string;
	ownerEmail: string;
	status: 'PAID' | 'DOING' | 'COMPLETED';
	imageUrl?: string;
}

export type Resolution = 'basic' | 'detailed' | 'coloured';

export const Prices = {
	basic: 0.99,
	detailed: 3.99,
	coloured: 5.99
};
