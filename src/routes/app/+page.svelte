<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';

	let promptValue: string = '';

	const formSubmit = () => {};
</script>

<main class="page">
	<div class="wrapper">
		<SignedIn>
			<form class="input-bar" on:submit={formSubmit}>
				<input type="text" placeholder="Prompt.." bind:value={promptValue} />
				<button class="icon" type="submit">
					<img src="/icons/arrow-up-right.svg" alt="Send arrow" />
				</button>
			</form>
		</SignedIn>

		<SignedOut>
			<h2>Get started for free</h2>
			<p>Sign up and get a free first request</p>

			<button>Sign in with Google</button>
		</SignedOut>
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
