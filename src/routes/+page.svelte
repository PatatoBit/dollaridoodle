<script lang="ts">
	let isDarkMode: boolean;
</script>

<main class="page">
	<div class="wrapper">
		<div class="landing">
			<h1 class="hero">Generate your art</h1>
			<h1 class="hero">with a <span class="mono">human</span></h1>

			<p class="label">image generation but a human draws instead of AI</p>

			<a href="/app"> <button>Show me</button></a>
			<div></div>
		</div>
	</div>
</main>

<article class="page">
	<div class="wrapper">
		<div class="abouts">
			<div class="about">
				<div class="about-image"></div>

				<div class="about-text">
					<h4>Request a doodle</h4>
					<p class="label">anything you can think of</p>
				</div>
			</div>

			<div class="about">
				<div class="about-image"></div>

				<div class="about-text">
					<h4>A human draws your idea</h4>
					<p class="label">instead of an AI model</p>
				</div>
			</div>

			<div class="about">
				<div class="about-image"></div>

				<div class="about-text">
					<h4>Use it in any way you want</h4>
					<p class="label">it's completely yours</p>
				</div>
			</div>
		</div>
	</div>
</article>

<style lang="scss">
	.hero {
		color: var(--primary);
	}

	.landing {
		width: 100%;
		padding-top: 7rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.abouts {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-flow: row wrap;
		justify-content: space-between;
		gap: 5rem;

		.about {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			.about-text {
				text-align: center;
				line-height: 25px;
			}

			.about-image {
				width: 100px;
				height: 100px;
				background-color: var(--primary);
			}
		}
	}
</style>
