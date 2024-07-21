<script lang="ts">
	import '../styles/globals.scss';
	import '../styles/typography.scss';

	import Layout from '$lib/components/Layout.svelte';
	import { FirebaseApp } from 'sveltefire';
	import { db, auth } from '../lib/firebase';
</script>

<FirebaseApp {auth} firestore={db}>
	<Layout>
		<slot />
	</Layout>
</FirebaseApp>

<style lang="scss">
	@import '../styles/variables.scss';
</style>
