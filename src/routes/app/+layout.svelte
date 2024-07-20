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
			<h2>Get started for free</h2>
			<p>Sign up and get a free first request</p>

			<button on:click={() => SignInWithGoogle(auth)}>Sign in with Google</button>
		</div>
	</main>
</SignedOut>

<style lang="scss">
	.page {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
