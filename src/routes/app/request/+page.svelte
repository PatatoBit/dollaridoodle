<script lang="ts">
	import { page } from '$app/stores';

	const idString = $page.url.searchParams.get('id');
</script>

<div class="page">
	<div class="wrapper">
		<p>{idString}</p>
	</div>
</div>
