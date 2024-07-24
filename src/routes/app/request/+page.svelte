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
			} else {
				console.error('No such document!');
			}
		});
	}
</script>

<div class="page">
	<div class="wrapper">
		{#if idString}
			<!-- content here -->
			<p>id: {idString}</p>
			<p>data: {JSON.stringify(data)}</p>
		{:else}
			no id
			<!-- else content here -->
		{/if}
	</div>
</div>
