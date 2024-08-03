<script lang="ts">
	let isDarkMode: boolean;
</script>

<div class="top">
	<button
		on:click={() => {
			document.body.classList.toggle('dark');
			isDarkMode = !isDarkMode;
		}}
	>
		{#if isDarkMode}
			<img src="/icons/moon.svg" alt="Moon" />
		{:else}
			<img src="/icons/sun.svg" alt="Sun" />
		{/if}
	</button>
</div>

<slot />

<style lang="scss">
	.top {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 1000;
	}

	button {
		all: unset;
		cursor: pointer;
	}
</style>
