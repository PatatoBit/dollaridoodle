<img class="logo" src="/images/logo.png" alt="DollariDoodle Logo" />

<main>
	<div class="wrapper">
		<div class="canvas"></div>

		<div class="input-bar">
			<input type="text" />
			<button class="icon">
				<img src="/icons/arrow-up-right.svg" alt="Send arrow" />
			</button>
		</div>
	</div>
</main>

<style lang="scss">
	.logo {
		width: 25rem;
	}

	.input-bar {
		display: flex;
		flex-direction: row;
		gap: 1rem;

		input {
			flex: 1 auto;
			padding: 0.5rem;
		}
	}

	.canvas {
		width: 100%;
		aspect-ratio: 5/3;
		border: 2px solid black;
	}
</style>
