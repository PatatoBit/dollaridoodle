<script lang="ts">
	import { page } from '$app/stores';
	import type { RequestData } from '$lib';
	import { db } from '$lib/firebase';
	import { doc, onSnapshot } from 'firebase/firestore';
	import { fade, fly, slide } from 'svelte/transition';

	const idString = $page.url.searchParams.get('id');
	const success = $page.url.searchParams.get('success');
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

<svelte:head>
	<title>DollaryDoodle Request</title>
</svelte:head>

<div class="center">
	<div class="back-button">
		<a href="/app"><button>Go back</button></a>
	</div>

	{#if success}
		<div class="success-badge">
			<h4>Thank you!</h4>

			<div>
				<p>your request has been successfully sent</p>
				<p>this page will be updated once your doodle is finished</p>
			</div>
		</div>
		<!-- content here -->
	{/if}

	<div class="wrapper">
		{#if idString}
			{#if data}
				<div class="side" transition:slide>
					{#if data.imageUrl}
						<img class="doodle" src={data.imageUrl} alt="Doodle" />
					{:else}
						<img class="doodle" src="/images/resolution/{data.resolution}.png" alt="Placeholder" />

						<br />

						<div class="details">
							<p class="label">Status</p>
							<p>{data.status}</p>
						</div>
					{/if}
				</div>

				<div class="side" transition:slide>
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
				<div class="center" in:fade>
					<h1>Loading...</h1>
				</div>
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

	.success-badge {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 1rem;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		gap: 0.2rem;

		border: 1px solid var(--primary);
		color: var(--primary);
		padding: 0.7rem;
		border-radius: 0.3rem;

		max-width: 22rem;

		p {
			font-size: small;
		}
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
