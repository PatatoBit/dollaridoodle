<script lang="ts">
	import { page } from '$app/stores';
	import type { AdminData, RequestData } from '$lib';
	import { db } from '$lib/firebase';
	import { GetFile, UploadFile } from '$lib/utils';
	import { doc, onSnapshot, setDoc } from 'firebase/firestore';

	const idString = $page.url.searchParams.get('id');
	const docRef = idString ? doc(db, 'requests', idString) : null;

	let imageUrl: string;

	let data: AdminData;

	enum Resolution {
		small = 'small',
		medium = 'Medium',
		large = 'LARGE'
	}
	if (docRef) {
		onSnapshot(docRef, (doc) => {
			if (doc.exists()) {
				data = doc.data() as AdminData;
				console.log(data);
			} else {
				console.error('No such document!');
			}
		});
	}

	// Image upload
	let files: FileList;

	const handleUpload = async (e: Event) => {
		e.preventDefault();
		const file = files[0];
		if (file && idString) {
			const uploadPath = `requests/${idString}.${file.type.split('/')[1]}`;
			const url = await UploadFile(file, uploadPath);
			imageUrl = await GetFile(url);

			const docRef = doc(db, 'requests', idString);
			await setDoc(docRef, { imageUrl }, { merge: true });
		}
	};
</script>

<div class="page">
	<div class="back-button">
		<a href="/admin"><button>Go back</button></a>
	</div>

	<div class="wrapper">
		{#if idString}
			{#if data}
				<div class="side">
					<div class="doodle">
						{#if data.imageUrl}
							<img class="doodle" src={data.imageUrl} alt="Doodle" />
						{:else}
							<input
								type="file"
								accept="image/png, image/jpeg"
								bind:files
								on:change={handleUpload}
							/>
						{/if}
					</div>

					<div class="details">
						<p class="label">Status</p>

						<select name="resolution">
							<option value="small" selected={data.status == 'PAID'}>PAID</option>
							<option value="small" selected={data.status == 'DOING'}>DOING</option>
							<option value="small" selected={data.status == 'COMPLETED'}>COMPLETED</option>
						</select>
					</div>
				</div>
				<div class="side">
					<div class="details">
						<p class="label">Prompt</p>
						<h1>{data.prompt}</h1>
					</div>

					<div class="detail-row">
						<div class="details">
							<p class="label">Resolution</p>
							<p>{Resolution[data.resolution]}</p>
						</div>

						<div class="details">
							<p class="label">Details</p>

							{#if data.isExpress}
								<p>Express</p>
							{/if}
						</div>
					</div>

					<div class="details">
						<p class="label">Requested by</p>
						<h3>{data.ownerName}</h3>
						<p>{data.ownerEmail}</p>
					</div>
				</div>
			{:else}
				<p>Loading...</p>
			{/if}
		{:else}
			no id
			<!-- else content here -->
		{/if}
	</div>
</div>

<style lang="scss">
	.doodle {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 20rem;
		aspect-ratio: 1;
		object-fit: contain;

		border: 2px solid var(--text);
		border-radius: 0.3rem;
	}

	.page {
		display: flex;
		align-items: center;
	}

	.back-button {
		position: absolute;
		top: 1rem;
		left: 1rem;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		width: 100%;

		gap: 2rem;
	}

	.side {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.detail-row {
		display: flex;
		flex-direction: row;
		gap: 2.5rem;
	}

	.details {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media (max-width: 768px) {
		.wrapper {
			flex-direction: column;
		}

		.side {
			align-items: center;
		}
	}
</style>
