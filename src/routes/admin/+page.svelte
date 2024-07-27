<script lang="ts">
	import { db } from '$lib/firebase';
	import { collection, orderBy, query, where } from 'firebase/firestore';
	import { collectionStore } from 'sveltefire';

	const requestsRef = collection(db, 'requests');

	const paidQuery = query(requestsRef, where('status', '==', 'PAID'), orderBy('createdAt', 'asc'));
	const completedQuery = query(
		requestsRef,
		where('status', '==', 'COMPLETED'),
		orderBy('createdAt', 'asc')
	);

	const paidRequests = collectionStore(db, paidQuery);
	const completedRequests = collectionStore(db, completedQuery);
</script>

<div class="page">
	<div class="wrapper">
		<div class="stats">
			<div class="stat">
				<h4>9</h4>
				<p>waiting</p>
			</div>

			<div class="stat">
				<h4>3</h4>
				<p>done</p>
			</div>

			<div class="stat">
				<h4>12</h4>
				<p>requests</p>
			</div>
		</div>

		<div>
			<h2>Paid</h2>
			{#each $paidRequests as paidRequest}
				<div class="request">
					<h4>
						{paidRequest.prompt}
					</h4>
				</div>
			{/each}
		</div>

		<div>
			<h2>Completed</h2>
			{#each $completedRequests as completedRequest}
				{completedRequest}
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		gap: 2rem;
		align-items: baseline;
	}

	.stats {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}

	.stat {
		padding: 1rem 1.5rem;
		border-radius: 0.2rem;
		width: 6rem;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 0.3rem;

		color: var(--background);
		background-color: var(--primary);
	}
</style>
