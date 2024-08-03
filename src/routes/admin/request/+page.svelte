<script lang="ts">
	import { page } from '$app/stores';
	import { type AdminData, type RequestData } from '$lib';
	import { db } from '$lib/firebase';
	import { GetFile, UploadFile } from '$lib/utils';
	import { doc, onSnapshot, setDoc } from 'firebase/firestore';

	const idString = $page.url.searchParams.get('id');
	const docRef = idString ? doc(db, 'requests', idString) : null;

	let imageUrl: string;

	let data: AdminData;

	if (docRef) {
		onSnapshot(docRef, (doc) => {
			if (doc.exists()) {
				data = doc.data() as AdminData;
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

			if (docRef) {
				await setDoc(docRef, { imageUrl }, { merge: true });
			} else {
				console.error('No document reference');
			}
		}
	};

	// Status upadating
	let statusSelected: AdminData['status'];

	const handleStatusChange = async () => {
		if (docRef) {
			await setDoc(docRef, { status: statusSelected }, { merge: true });
		} else {
			console.error('No document reference');
		}
	};
</script>

<div class="center">
	<div class="back-button">
		<a href="/admin"><button>go back</button></a>
	</div>

	<div class="wrapper">
		{#if idString}
			{#if data}
				<div class="side">
					<div class="doodle">
						{#if data.imageUrl}
							<img class="doodle" src={data.imageUrl} alt="Doodle" />
							<input
								type="file"
								accept="image/png, image/jpeg"
								bind:files
								on:change={handleUpload}
							/>
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

						<select bind:value={statusSelected} on:change={handleStatusChange}>
							<option value="PAID" selected={data.status == 'PAID'}>PAID</option>
							<option value="DOING" selected={data.status == 'DOING'}>DOING</option>
							<option value="COMPLETED" selected={data.status == 'COMPLETED'}>COMPLETED</option>
						</select>
					</div>
				</div>

				<div class="side">
					<div class="info">
						<div class="details">
							<p class="label">Prompt</p>
							<h1>{data.prompt}</h1>
						</div>

						<div class="details">
							<p class="label">Resolution</p>
							<p class="capital">{data.resolution}</p>
						</div>

						<div class="details">
							<p class="label">Requested by</p>
							<h3>{data.ownerName}</h3>
							<p>{data.ownerEmail}</p>
						</div>
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
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 20rem;
		aspect-ratio: 1;
		object-fit: contain;

		border-radius: 0.3rem;
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
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: 1rem;

		.info {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
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
