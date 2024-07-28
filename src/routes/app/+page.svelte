<script lang="ts">
	import { db } from '$lib/firebase';
	import { SignOut } from '$lib/utils';
	import { collection, orderBy, query, where } from 'firebase/firestore';
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

<main class="page">
	<div class="center">
		<SignedIn let:auth>
			<form class="input-bar" action="app/customize">
				<input type="text" placeholder="Some funny cats.." name="prompt" required />
				<button class="icon" type="submit">
					<img src="/icons/arrow-up-right.svg" alt="Send arrow" />
				</button>
			</form>

			<br />

			<button on:click={() => SignOut(auth)}>Sign out</button>
		</SignedIn>
	</div>
</main>

<article class="wrapper">
	<h2>Explore doodles</h2>

	<div class="doodles">
		{#each $publicDoodles as publicDoodle}
			<div class="doodle">
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
	.input-bar {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		width: 100%;

		input {
			flex: 1 auto;
			padding: 0.5rem;
		}
	}

	.pending {
		padding: 2rem;
		border: 1px solid var(--primary);
	}

	.page {
		display: flex;
		align-items: center;
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
		columns: 3;
		column-gap: 1rem;
		break-inside: avoid;

		.doodle {
			grid-row-end: span 10;
			margin-bottom: 10px;

			.label {
				text-align: center;
			}

			img {
				max-width: 100%;
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
