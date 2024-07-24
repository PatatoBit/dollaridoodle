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
	<div class="wrapper">
		{#if idString}
			<div class="page">
				<div class="wrapper">
					{#if data}
						<p class="label">Prompt</p>
						<p>{data.prompt}</p>

						<p class="label">Express</p>
						<input type="checkbox" bind:checked={data.isExpress} disabled />

						<p class="label">Private</p>
						<input type="checkbox" bind:checked={data.isPrivate} disabled />
					{:else}
						<p>Loading...</p>
					{/if}
				</div>
			</div>
		{:else}
			no id
			<!-- else content here -->
		{/if}
	</div>
</div>
