<script lang="ts">
	import { Canvas } from 'fabric';
	import { onMount } from 'svelte';

	let canvas: Canvas | null = null;
	onMount(() => {
		canvas = new Canvas('c', {
			width: 1000,
			height: 1000,
			backgroundColor: '#f0f0f0'
		});
	});
</script>

<div class="canvas-container">
	<canvas id="c"></canvas>
</div>

<style lang="scss">
	.canvas-container {
		overflow: hidden;
		border: 1px dashed black;
		aspect-ratio: 3/2;
		width: 40rem;
	}

	canvas {
		height: auto;

		cursor: grab;
		&:active {
			cursor: grabbing;
		}
	}
</style>
