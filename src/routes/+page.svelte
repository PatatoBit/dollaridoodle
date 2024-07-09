<script lang="ts">
	import MainCanvas from '$lib/components/MainCanvas.svelte';
</script>

<main>
	<img src="/images/audience.png" alt="Audience" class="audience" />
	<div class="main-container">
		<h1 class="main-title mono">DollariDoodle</h1>

		<div class="canvas-container">
			<img src="/images/frame.png" alt="Canvas Frame" class="frame" />
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
		bottom: 0;
		z-index: 0;
	}

	.frame {
		position: absolute;
		height: 30em;
		top: -2.7rem;
		left: -2.4rem;
	}

	.canvas-container {
		position: relative;
		overflow: visible;
		width: 100%;
		margin: 2rem 0;
	}

	main {
		display: flex;
		position: relative;
		flex-direction: column;
		align-items: center;

		width: 100%;
		min-height: 100vh;
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
		margin-top: 3em;
	}

	.input-bar {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 1rem;

		input {
			flex: 1;
		}
	}
</style>
