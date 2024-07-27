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
				<h4>{$paidRequests.length}</h4>
				<p>waiting</p>
			</div>

			<div class="stat">
				<h4>{$completedRequests.length}</h4>
				<p>done</p>
			</div>

			<div class="stat">
				<h4>{$paidRequests.length + $completedRequests.length}</h4>
				<p>total</p>
			</div>
		</div>

		<div class="list">
			<p class="label">Paid</p>
			<div class="requests">
				{#each $paidRequests as paidRequest}
					<a class="request" href={`/admin/request/?id=${paidRequest.id}`}>
						<p>
							{paidRequest.prompt}
						</p>

						<p>{formatDistance(paidRequest.createdAt.toDate(), new Date(), { addSuffix: true })}</p>
					</a>
				{/each}
			</div>
		</div>

		<div class="list">
			<p class="label">Completed</p>
			<div class="requests">
				{#each $completedRequests as completedRequest}
					<a class="request" href={`/admin/request/?id=${completedRequest.id}`}>
						<p>
							{completedRequest.prompt}
						</p>

						<p>
							{formatDistance(completedRequest.createdAt.toDate(), new Date(), { addSuffix: true })}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		gap: 2rem;
		padding-top: 2rem;
		align-items: baseline;
	}

	.list {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
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
		width: 3rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		color: var(--primary);
		border: 1px solid var(--primary);
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
		border-radius: 0.2rem;
		transition: all 0.2s;

		&:hover {
			background-color: var(--primary);
			color: var(--background);
			padding: 0.5rem;
		}
	}
</style>
