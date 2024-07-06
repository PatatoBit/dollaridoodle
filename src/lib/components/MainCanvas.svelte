<script lang="ts">
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let scale = 1;
	let originX = 0;
	let originY = 0;
	let isDragging = false;
	let startX: number;
	let startY: number;

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
		ctx.arc(1000, 1000, 60, 0, 2 * Math.PI);

		ctx.stroke();
	}

	function handleWheel(event: WheelEvent) {
		event.preventDefault();

		if (event.deltaY > 0) {
			if (scale <= 0.5) return;
			scale -= 0.1;
		} else {
			if (scale >= 10) return;
			scale += 0.1;
		}

		canvas.animate(
			[
				{
					transform: `scale(${scale})`
				}
			],
			{
				duration: 100,
				easing: 'ease-in-out',
				fill: 'forwards'
			}
		);
	}
</script>

<div class="container">
	<div class="canvas-container" on:wheel={handleWheel}>
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
