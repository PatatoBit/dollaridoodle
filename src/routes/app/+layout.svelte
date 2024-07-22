<script lang="ts">
	import { SignInWithGoogle } from '$lib/auth';
	import Login from '$lib/components/Login.svelte';
	import { SignedIn, SignedOut } from 'sveltefire';
</script>

<SignedIn>
	<slot></slot>
</SignedIn>

<SignedOut let:auth>
	<main class="page">
		<div class="wrapper">
			<div class="container">
				<div>
					<h2>Get started for free</h2>
					<p>Sign up and get a free first request</p>
				</div>

				<button on:click={async () => await SignInWithGoogle(auth)}>Sign in with Google</button>
			</div>
		</div>
	</main>
</SignedOut>

<style lang="scss">
	.page {
		display: flex;
		align-items: center;
		gap: 2.5rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;

		gap: 1rem;
		text-align: center;

		div {
			display: flex;
			flex-direction: column;
			gap: 0.3rem;
		}
	}
</style>
