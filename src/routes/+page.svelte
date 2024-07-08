<script lang="ts">
	import MainCanvas from '$lib/components/MainCanvas.svelte';
</script>

<main>
	<div class="main-container">
		<h1 class="main-title mono">DollariDoodle</h1>

		<div class="canvas-container">
			<MainCanvas />
		</div>

		<div class="details">
			<p><strong>412</strong> requests have been completed</p>
			<p><strong>1,012</strong> requests in queue</p>
		</div>

		<div class="input-bar">
			<input type="text" placeholder="Search or request a doodle" />
			<button class="icon">
				<img src="/icons/arrow-up-right.svg" alt="Send arrow" />
			</button>
		</div>
	</div>
</main>

<style lang="scss">
	.canvas-container {
		position: relative;
		overflow: hidden;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
		height: 100vh;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;

		max-width: 60rem;
		margin: 2rem;
		gap: 2rem;
	}

	.main-title {
		margin-top: 4rem;
	}

	.input-bar {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
