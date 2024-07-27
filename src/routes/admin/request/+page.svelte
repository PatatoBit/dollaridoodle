<script lang="ts">
	import { page } from '$app/stores';
	import type { RequestData } from '$lib';
	import { db } from '$lib/firebase';
	import { doc, onSnapshot } from 'firebase/firestore';

	const idString = $page.url.searchParams.get('id');
	const docRef = idString ? doc(db, 'requests', idString) : null;

	let data: RequestData;

	enum Resolution {
		small = 'small',
		medium = 'Medium',
		large = 'LARGE'
	}

	if (docRef) {
		onSnapshot(docRef, (doc) => {
			if (doc.exists()) {
				data = doc.data() as RequestData;
				console.table(data);
			} else {
				console.error('No such document!');
			}
		});
	}
</script>

<div class="page">
	<div class="back-button">
		<a href="/app"><button>Go back</button></a>
	</div>

	<div class="wrapper">
		{#if idString}
			{#if data}
				<div class="side">
					<img class="doodle" src="/images/resolution/{data.resolution}.png" alt="Placeholder" />
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
		width: 20rem;
		aspect-ratio: 1;
		object-fit: contain;
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
