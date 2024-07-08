<script lang="ts">
	import MainCanvas from '$lib/components/MainCanvas.svelte';
</script>

<main>
	<h1>DollariDoodle</h1>

	<div class="canvas-container">
		<MainCanvas />
	</div>
</main>

<style lang="scss">
	.canvas-container {
		position: relative;

		border: 1px solid red;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;

		height: 100vh;
	}
</style>
