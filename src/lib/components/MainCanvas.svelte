<script lang="ts">
	import { onMount } from 'svelte';
	import { Canvas, PencilBrush, Rect } from 'fabric';

	let canvas: Canvas | null = null;

	onMount(() => {
		// Initialize Fabric.js canvas

		canvas = new Canvas('c', {
			isDrawingMode: true,
			width: 600,
			height: 400,
			backgroundColor: '#f0f0f0'
		});

		let rect = new Rect({
			left: 100,
			top: 100,
			fill: 'red',
			width: 20,
			height: 20
		});

		canvas.add(rect);
		canvas.remove(rect);

		let brush = new PencilBrush(canvas);
		brush.color = '#212121';
		brush.width = 4;
		canvas.freeDrawingBrush = brush;

		console.log(canvas);
	});

	function toggleDrawingMode() {
		canvas!.isDrawingMode = !canvas!.isDrawingMode;
	}
</script>

<div class="container">
	<canvas id="c"></canvas>
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100%;
		overflow: scroll;
	}
	canvas {
		position: absolute;
		object-fit: cover;
		max-width: 100%;
	}
</style>
