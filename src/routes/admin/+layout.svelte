<script lang="ts">
	import { SignedIn, SignedOut } from 'sveltefire';
	import { SignInWithGoogle, SignOut } from '$lib/utils';
</script>

<SignedIn let:auth>
	{#if auth.currentUser?.email == 'pathonscript@gmail.com'}
		<slot />
	{:else}
		<div class="center">
			<h2>You're not an admin</h2>
			<p>{auth.currentUser?.displayName}</p>
			<br />
			<button on:click={() => SignOut(auth)}>Log out</button>
		</div>
	{/if}
</SignedIn>

<SignedOut let:auth>
	<div class="center">
		<h2>You need an admin account</h2>
		<br />
		<button on:click={() => SignInWithGoogle(auth)}>Login</button>
	</div>
</SignedOut>
