<script lang="ts">
	const urlParams = new URLSearchParams(window.location.search);
	let prompt: string = urlParams.get('prompt') || '';
</script>

<div class="page">
	<div class="wrapper">
		<div class="layout">
			<div class="custom">
				<form action="">
					<p class="label">Your prompt</p>
					<input type="text" bind:value={prompt} required />

					<div class="input">
						<div>
							<p>Resolution</p>
						</div>
					</div>

					<div class="input">
						<div>
							<p>Private request</p>
							<p class="label">won't show up in the public gallery</p>
						</div>

						<input type="checkbox" />
					</div>

					<div class="input">
						<div>
							<p>Express priority</p>
							<p class="label">your request will be ahead in the queue</p>
						</div>

						<input type="checkbox" />
					</div>
				</form>
			</div>

			<div class="checkout"></div>
		</div>
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
	}

	.custom {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		flex: 2;
	}

	.input {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}

	.checkout {
		flex: 1;
	}

	input {
		display: block;
		border: none;
		border-radius: 0;
		padding: 0.5rem 0;
		outline: none;
		border-bottom: 1px solid var(--text);
		width: 100%;
		align-self: stretch;
	}
</style>
