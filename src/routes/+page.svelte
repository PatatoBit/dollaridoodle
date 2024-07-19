<main class="center">
	<div class="wrapper">
		<h1 class="fancy hero">Generate your art ideas</h1>
		<h1 class="fancy hero">but with a <span class="mono">human</span></h1>

		<p>image generation but a human draws instead of AI</p>

		<a href="/app">show me</a>
	</div>
</main>

<article class="center">
	<div class="wrapper">
		<div class="abouts">
			<div class="about">
				<div class="about-image"></div>

				<h4>Request a doodle</h4>
				<p>anything your mind can think of</p>
			</div>

			<div class="about">
				<div class="about-image"></div>

				<h4>A human draws your idea</h4>
				<p>instead of an AI model</p>
			</div>

			<div class="about">
				<div class="about-image"></div>

				<h4>Use it in any way you want</h4>
				<p>it's completely yours</p>
			</div>
		</div>
	</div>
</article>

<style lang="scss">
	.hero {
		color: var(--primary);
	}

	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;
		min-height: 65vh;
	}

	.abouts {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 5rem;

		.about {
			display: flex;
			flex-direction: column;
			align-items: center;

			.about-image {
				width: 100px;
				height: 100px;
				background-color: var(--primary);
			}
		}
	}
</style>
