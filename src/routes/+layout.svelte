<script lang="ts">
	import '../styles/globals.scss';
	import '../styles/typography.scss';

	import Layout from '$lib/components/Layout.svelte';
	import { FirebaseApp } from 'sveltefire';
	import { db, auth, functions } from '../lib/firebase';
	import { connectFunctionsEmulator } from 'firebase/functions';
	import { page } from '$app/stores';

	if ($page.url.hostname === 'localhost') {
		console.log('Connecting to functions emulator');
		connectFunctionsEmulator(functions, '127.0.0.1', 5001);
		console.log('Connected to functions emulator');
	}
</script>

<FirebaseApp {auth} firestore={db}>
	<Layout>
		<slot />
	</Layout>
</FirebaseApp>

<style lang="scss">
	@import '../styles/variables.scss';
</style>
