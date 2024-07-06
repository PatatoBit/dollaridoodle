<script lang="ts">
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let scale = 1;
	let zoomSpeed = 0.05;
	let isDragging = false;
	let startX: number;
	let startY: number;
	let offsetX: number = 0;
	let offsetY: number = 0;

	onMount(() => {
		ctx = canvas.getContext('2d')!;
		canvas.width = 2000; // Set canvas dimensions
		canvas.height = 2000;

		// Draw an example grid or initial doodles
		drawTest();
	});

	function drawTest() {
		ctx.beginPath();

		// Bigger circle
		ctx.arc(1000, 1000, 500, 0, 2 * Math.PI);

		ctx.stroke();
	}

	function handleWheel(event: WheelEvent) {
		const zoom = event.deltaY > 0 ? 1 - zoomSpeed : 1 + zoomSpeed;
		scale *= zoom;
		canvas.setAttribute('style', `transform: scale(${scale})`);
		offsetX -= (event.clientX - offsetX) * (zoom - 1);
		offsetY -= (event.clientY - offsetY) * (zoom - 1);
	}

	function handleMouseDown(event: MouseEvent) {
		isDragging = true;
		startX = event.clientX - offsetX;
		startY = event.clientY - offsetY;
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		offsetX = event.clientX - startX;
		offsetY = event.clientY - startY;
	}

	function handleMouseUp() {
		isDragging = false;
	}
</script>

<div class="container">
	<div
		class="canvas-container"
		on:wheel={handleWheel}
		on:mousedown={handleMouseDown}
		on:mouseup={handleMouseUp}
		on:mousemove={handleMouseMove}
		role="button"
		tabindex={0}
	>
		<canvas bind:this={canvas}></canvas>
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.canvas-container {
		overflow: hidden;

		border: 1px dashed black;
	}

	canvas {
		aspect-ratio: 3/2;
		width: 40rem;
		height: auto;

		cursor: grab;
		&:active {
			cursor: grabbing;
		}
	}
</style>
