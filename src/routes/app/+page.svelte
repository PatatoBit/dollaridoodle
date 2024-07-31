<script lang="ts">
	import { db } from '$lib/firebase';
	import { SignOut } from '$lib/utils';
	import { collection, orderBy, query, where } from 'firebase/firestore';
	import { fly, slide } from 'svelte/transition';
	import { collectionStore, SignedIn } from 'sveltefire';

	const requestsRef = collection(db, 'requests');
	const publicDoodlesQuery = query(
		requestsRef,
		where('isPrivate', '==', false),
		where('status', '==', 'COMPLETED'),
		orderBy('status', 'asc')
	);

	const publicDoodles = collectionStore(db, publicDoodlesQuery);
</script>

<svelte:head>
	<title>DollaryDoodle</title>
</svelte:head>

<main class="page">
	<div class="center">
		<SignedIn let:auth>
			<form class="input-bar" action="app/customize">
				<input type="text" placeholder="some funny cats.." name="prompt" required />
				<button class="icon" type="submit">
					<img src="/icons/arrow-up-right.svg" alt="Send arrow" />
				</button>
			</form>

			<br />

			<button on:click={() => SignOut(auth)}>sign out</button>
		</SignedIn>
	</div>
</main>

<article class="wrapper">
	<h2>Explore other doodles</h2>

	<br />

	<div class="doodles">
		{#each $publicDoodles as publicDoodle}
			<div class="doodle" transition:slide>
				{#if publicDoodle.status === 'COMPLETED'}
					<a href={`/app/request/?id=${publicDoodle.id}`}>
						<img src={publicDoodle.imageUrl} alt="Doodle" />
					</a>
				{:else}
					<div class="pending">
						<p>Pending</p>
					</div>
				{/if}
				<p class="label">{publicDoodle.prompt}</p>
			</div>
		{/each}
	</div>
</article>

<style lang="scss">
	.page {
		justify-content: center;
	}

	.input-bar {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		width: 100%;
		max-height: 100%;

		input {
			flex: 1 auto;
		}
	}

	.pending {
		padding: 2rem;
		border: 1px solid var(--primary);
	}

	.center {
		max-width: 55rem;
		min-height: 100%;
		margin-inline: auto;
		padding-inline: 1rem;

		display: flex;
		flex-direction: column;
	}

	.doodles {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
		grid-gap: 1rem;

		.doodle {
			margin-bottom: 10px;
			display: flex;
			flex-direction: column;
			flex: 1;

			.label {
				text-align: center;
			}

			img {
				width: 100%;
				aspect-ratio: 1;
				border-radius: 0.5rem;
			}
		}
	}

	@media (max-width: 800px) {
		.doodles {
			columns: 2;
		}
	}
</style>
