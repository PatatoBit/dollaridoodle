<script lang="ts">
	import '../styles/globals.scss';
	import '../styles/typography.scss';

	import Layout from '$lib/components/Layout.svelte';
	import { FirebaseApp } from 'sveltefire';
	import { db, auth } from '../lib/firebase';
</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>DollaryDoodle</title>
	<link rel="icon" type="image/x-icon" href="/icons/icon.jpg" />
	<meta
		name="description"
		content="Use a human to generate your image.
You request an image, a real human draws it."
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://dollarydoodle.vercel.app" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="DollaryDoodle" />
	<meta
		property="og:description"
		content="Use a human to generate your image.
You request an image, a real human draws it."
	/>
	<!--
  You can generate this image URL dynamically: https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/{site_text}/{title_text}/{image_url}/og.png
  Replace the variables in the brackets with your own values and use this URL in the image tag below this comment. Ensure values are URL encoded.
  For more information, read: https://www.opengraph.xyz/blog/how-to-implement-dynamic-open-graph-images
-->
	<meta property="og:image" content="/images/banner.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="dollarydoodle.vercel.app" />
	<meta property="twitter:url" content="https://dollarydoodle.vercel.app" />
	<meta name="twitter:title" content="DollaryDoodle" />
	<meta
		name="twitter:description"
		content="Use a human to generate your image.
You request an image, a real human draws it."
	/>
	<!--
  You can generate this image URL dynamically: https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/{site_text}/{title_text}/{image_url}/og.png
  Replace the variables in the brackets with your own values and use this URL in the image tag below this comment. Ensure values are URL encoded.
  For more information, read: https://www.opengraph.xyz/blog/how-to-implement-dynamic-open-graph-images
-->
	<meta name="twitter:image" content="images/banner.png" />

	<!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<FirebaseApp {auth} firestore={db}>
	<Layout>
		<slot />
	</Layout>
</FirebaseApp>

<style lang="scss">
	@import '../styles/variables.scss';
</style>
