<script lang="ts">
	const urlParams = new URLSearchParams(window.location.search);
	let prompt: string = urlParams.get('prompt') || '';
</script>

<div class="page">
	<div class="wrapper">
		<form class="layout" method="post" action="?/checkout">
			<div class="custom">
				<div>
					<p class="label">Your prompt</p>
					<input type="text" name="prompt" bind:value={prompt} required />
				</div>

				<div class="inputs">
					<div class="input">
						<div>
							<p>Resolution</p>
						</div>

						<select name="resolution">
							<option value="small">small</option>
							<option value="medium">Medium</option>
							<option value="large">LARGE</option>
						</select>
					</div>

					<div class="input">
						<div>
							<p>Private request</p>
							<p class="label">won't show up in the public gallery</p>
						</div>

						<input type="checkbox" name="private" />
					</div>

					<div class="input">
						<div>
							<p>Express priority</p>
							<p class="label">your request will be ahead in the queue</p>
						</div>

						<input type="checkbox" name="express" />
					</div>
				</div>
			</div>

			<div class="checkout">
				<div class="preview-container"></div>

				<div class="cost-line">
					<p class="label">Small doodle</p>
					<p class="label">1 Ticket</p>
				</div>

				<div class="cost-line">
					<p>Total</p>
					<p>1 Ticket</p>
				</div>

				<br />

				<button type="submit">Make it happen</button>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	.page {
		display: flex;
		align-items: center;
	}

	.wrapper {
		width: 55rem;
	}

	.layout {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 2rem;
	}

	.custom {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		flex: 3;
		gap: 4rem;
	}

	.inputs {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.input {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;

		div {
			flex: auto;
		}

		input[type='checkbox'] {
			aspect-ratio: 1;
			width: 1.2rem;
		}
	}

	.checkout {
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: 1rem;
		padding: 1.2rem;
		background: white;

		.cost-line {
			display: flex;
			justify-content: space-between;
		}
	}

	.preview-container {
		width: 100%;
		aspect-ratio: 1;
		border: 1px solid var(--text);
	}
</style>
