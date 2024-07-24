<script lang="ts">
	import { page } from '$app/stores';
	import type { RequestData } from '$lib';
	import { db } from '$lib/firebase';
	import { doc, onSnapshot } from 'firebase/firestore';

	const idString = $page.url.searchParams.get('id');
	const docRef = idString ? doc(db, 'requests', idString) : null;

	let data: RequestData;

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
					<img class="doodle" src="/images/human.png" alt="Placeholder" />
				</div>
				<div class="side">
					<div class="details">
						<p class="label">Prompt</p>
						<h2>{data.prompt}</h2>
					</div>

					<!-- <p class="label">Express</p>
							<input type="checkbox" bind:checked={data.isExpress} disabled />
	
							<p class="label">Private</p>
							<input type="checkbox" bind:checked={data.isPrivate} disabled /> -->
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

		border: 1px solid var(--primary);
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
