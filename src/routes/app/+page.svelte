<script lang="ts">
	import { SignInWithGoogle, SignOut } from '$lib/auth';
	import { SignedIn, SignedOut } from 'sveltefire';
</script>

<main class="page">
	<div class="wrapper">
		<SignedIn let:auth>
			<form class="input-bar" action="app/submit">
				<input type="text" placeholder="Prompt.." name="prompt" required />
				<button class="icon" type="submit">
					<img src="/icons/arrow-up-right.svg" alt="Send arrow" />
				</button>
			</form>

			<button on:click={() => SignOut(auth)}>Sign out</button>
		</SignedIn>
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
