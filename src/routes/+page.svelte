<script lang="ts">
	let isDarkMode: boolean;
</script>

<main class="page">
	<div class="wrapper">
		<div class="landing">
			<h1 class="hero">Generate your art</h1>
			<h1 class="hero">
				with a
				<img class="human invert" src="/images/human.png" alt="human" />
			</h1>

			<p class="label">image generation with human touch</p>

			<br />

			<a href="/app"> <button>let's go</button></a>
			<div></div>
		</div>
	</div>
</main>

<article class="page">
	<div class="wrapper">
		<div class="abouts">
			<div class="about">
				<img class="about-image invert" src="/images/funnicat.png" alt="funni cat prompt" />

				<div class="about-text">
					<h4>Request a doodle</h4>
					<p class="label">anything you can think of</p>
				</div>
			</div>

			<div class="about">
				<img class="about-image invert" src="/images/draw.png" alt="human drawing" />

				<div class="about-text">
					<h4>A human draws your idea</h4>
					<p class="label">instead of an AI model</p>
				</div>
			</div>

			<div class="about">
				<img class="about-image invert" src="/images/yours.png" alt="funni cat drawing" />

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
		justify-content: center;
	}

	.invert {
		filter: invert(var(--invert));
	}

	.human {
		max-height: 3rem;
		margin-left: 0.7rem;
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
			width: 13rem;
			height: 20rem;

			.about-text {
				text-align: center;
				line-height: 25px;
				flex: 1;
			}

			.about-image {
				max-width: 10rem;
				max-height: 15rem;
				object-fit: contain;
				flex: 2;
			}
		}
	}

	@media (max-width: 850px) {
		.abouts {
			flex-direction: column;
			gap: 2rem;

			.about {
				width: 100%;
			}
		}
	}
</style>
