<script lang="ts">
	import MainCanvas from '$lib/components/MainCanvas.svelte';
</script>

<main>
	<img src="/images/audience.png" alt="Audience" class="audience" />
	<div class="main-container">
		<h1 class="main-title mono">DollariDoodle</h1>

		<div class="canvas-container">
			<MainCanvas />
			<!-- <img src="/images/frame.png" alt="Canvas Frame" class="frame" /> -->
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
		top: -0.15rem;
		left: -0.05rem;
	}

	.canvas-container {
		border: 1px solid blue;
		overflow: hidden;
		max-width: 100%;
	}

	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;

		max-width: 100%;
		margin: 2rem;
		gap: 2rem;
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
