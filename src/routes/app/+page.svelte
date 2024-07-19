<main class="page">
	<div class="wrapper">
		<div class="input-bar">
			<input type="text" placeholder="Prompt.." />
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
		width: 100%;

		input {
			flex: 1 auto;
			padding: 0.5rem;
		}
	}

	.page {
		display: flex;
		align-items: center;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
</style>
