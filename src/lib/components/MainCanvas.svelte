<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas, Rect } from 'fabric';

	let canvas: Canvas | null = null;

	onMount(() => {
		// Initialize Fabric.js canvas
		canvas = new Canvas('c', {
			isDrawingMode: true,
			width: 500,
			height: 500,
			backgroundColor: '#f0f0f0'
		});

		// Set up the drawing brush
		if (canvas.freeDrawingBrush) {
			let brush = canvas.freeDrawingBrush;
			brush.color = 'black';
			brush.width = 10;
		}

		// Create and add a rectangle object to test the canvas
		const rect = new Rect({
			left: 100,
			top: 100,
			fill: 'red',
			width: 20,
			height: 20
		});
		canvas?.add(rect);
	});

	function clearCanvas() {
		if (canvas) {
			canvas.clear();
		}
	}
</script>

<div class="canvas-container">
	<canvas id="c"></canvas>
	<button on:click={clearCanvas}>Clear Canvas</button>
</div>

<style lang="scss">
	.canvas-container {
		overflow: hidden;
		border: 1px dashed black;
		aspect-ratio: 3/2;
	}

	canvas {
		height: auto;

		cursor: grab;
		&:active {
			cursor: grabbing;
		}
	}
</style>
