<script lang="ts">
	import MainCanvas from '$lib/components/MainCanvas.svelte';
</script>

<main>
	<img src="/images/audience.png" alt="Audience" class="audience" />
	<div class="main-container">
		<h1 class="main-title mono">DollariDoodle</h1>

		<div class="canvas-container">
			<div class="frame">
				<img src="/images/frame.png" alt="Canvas Frame" />
			</div>
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
	.audience {
		width: 60rem;
		position: absolute;
		pointer-events: none;
		overflow: hidden;
		bottom: 0;
		z-index: 0;
	}

	.details {
		position: relative;
	}

	.frame {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
		top: -1.5rem;
		left: -1rem;

		pointer-events: none;
		img {
			width: 40rem;
			z-index: 1;
		}
	}

	.canvas-container {
		display: block;
		position: relative;

		aspect-ratio: 3/2;
		overflow: hidden;
		width: 100%;

		border-image: url('/images/frame.png') 30;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;

		max-width: 100%;
		margin: 2rem;
		gap: 2rem;
		padding: 1rem;
	}

	main {
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;

		width: 100%;
		min-height: 100vh;
	}

	.main-title {
		margin-top: 2em;
	}

	.input-bar {
		width: 100%;
		display: block;
		display: flex;
		flex-direction: row;
		gap: 1rem;

		input {
			flex: 1;
		}
	}
</style>
