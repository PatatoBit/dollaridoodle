<script lang="ts">
	import Login from '$lib/components/Login.svelte';
</script>

{#if true}
	<slot />
{:else}
	<Login />
{/if}
