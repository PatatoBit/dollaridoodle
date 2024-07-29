<script lang="ts">
	import { ResolutionPrice } from '$lib';
	import { auth } from '$lib/firebase';
	import { userStore } from 'sveltefire';

	const urlParams = new URLSearchParams(window.location.search);
	let prompt: string = urlParams.get('prompt') || '';

	const user = userStore(auth);

	let resolution: 'small' | 'medium' | 'large' = 'small';
	let isExpress: boolean;
</script>

<div class="page">
	<form class="layout" method="post" action="?/checkout">
		<div class="custom">
			<div>
				<p class="label">Your prompt</p>
				<input type="text" name="prompt" bind:value={prompt} required />
			</div>

			<input name="ownerName" type="hidden" value={$user?.displayName} />
			<input name="ownerId" type="hidden" value={$user?.uid} />
			<input name="ownerEmail" type="hidden" value={$user?.email} />

			<div class="inputs">
				<div class="input">
					<div>
						<p>Resolution</p>
					</div>

					<select name="resolution" bind:value={resolution}>
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

					<input type="checkbox" name="express" bind:checked={isExpress} />
				</div>
			</div>
		</div>

		<div class="checkout">
			<div class="preview-container">
				<img src="/images/resolution/{resolution}.png" alt="" />
			</div>

			<div class="cost-line">
				<p class="label">{resolution} doodle</p>
				<p class="label">${ResolutionPrice[resolution]}</p>
			</div>

			{#if isExpress}
				<div class="cost-line">
					<p class="label">Express priority</p>
					<p class="label">$3</p>
				</div>
			{/if}

			<div class="cost-line">
				<p>Total</p>
				<p>${ResolutionPrice[resolution] + (isExpress ? 3 : 0)}</p>
			</div>

			<br />

			<button type="submit">Make it happen</button>
		</div>
	</form>
</div>

<style lang="scss">
	.page {
		display: flex;
		padding-top: 5rem;
	}

	.layout {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 2rem;

		flex-wrap: wrap;
		align-items: center;
	}

	.custom {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 35rem;
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
		gap: 1rem;
		padding: 1.2rem;

		width: 15rem;

		.cost-line {
			display: flex;
			justify-content: space-between;
		}
	}

	.preview-container {
		width: 100%;
		aspect-ratio: 1;
		img {
			max-width: 100%;
		}
	}
</style>
