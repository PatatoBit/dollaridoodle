<main class="page">
	<div class="wrapper">
		<div class="input-bar">
			<input type="text" />
			<button class="icon">
				<img src="/icons/arrow-up-right.svg" alt="Send arrow" />
			</button>
		</div>
	</div>
</main>

<style lang="scss">
	.input-bar {
		display: flex;
		flex-direction: row;
		gap: 1rem;

		input {
			flex: 1 auto;
			padding: 0.5rem;
		}
	}

	.page {
		align-items: baseline;
		justify-content: center;
	}

	.wrapper {
		justify-content: center;
	}
</style>
