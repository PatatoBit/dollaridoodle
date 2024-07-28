<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';
	import { SignInWithGoogle } from '$lib/utils';
</script>

<SignedIn>
	<slot></slot>
</SignedIn>

<SignedOut let:auth>
	<div class="center">
		<h2>You need an admin account</h2>
		<br />
		<button on:click={() => SignInWithGoogle(auth)}>Login</button>
	</div>
</SignedOut>
