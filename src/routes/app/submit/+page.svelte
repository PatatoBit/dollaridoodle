<script lang="ts">
	const urlParams = new URLSearchParams(window.location.search);
	let prompt: string = urlParams.get('prompt') || '';
</script>

<div class="page">
	<div class="wrapper">
		<input type="text" bind:value={prompt} />
	</div>
</div>

<style lang="scss">
	.page {
		display: flex;
		align-items: center;
	}
</style>
