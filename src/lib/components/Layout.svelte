<div class="top">
	<button
		on:click={() => {
			document.body.classList.toggle('dark');
		}}>Dark / Light</button
	>
</div>

<slot />

<style lang="scss">
	.top {
		position: fixed;
		top: 0;
		right: 0;
		padding: 1rem;
		z-index: 1000;
	}
</style>
