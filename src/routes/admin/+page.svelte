<script lang="ts">
	import { db } from '$lib/firebase';
	import { formatDistance } from 'date-fns';
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

		<h2>Paid</h2>
		<div class="requests">
			{#each $paidRequests as paidRequest}
				<a class="request" href={`/app/request/?id=${paidRequest.id}`}>
					<h4>
						{paidRequest.prompt}
					</h4>

					<p>{formatDistance(paidRequest.createdAt.toDate(), new Date(), { addSuffix: true })}</p>
				</a>
			{/each}
		</div>

		<h2>Completed</h2>
		<div class="requests">
			{#each $completedRequests as completedRequest}
				<a class="request" href={`/app/request/?id=${completedRequest.id}`}>
					<h4>
						{completedRequest.prompt}
					</h4>

					<p>
						{formatDistance(completedRequest.createdAt.toDate(), new Date(), { addSuffix: true })}
					</p>
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		gap: 1.5rem;
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

		color: var(--background);
		background-color: var(--primary);
	}

	.requests {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.request {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 0.5rem 0;

		justify-content: space-between;
	}
</style>
