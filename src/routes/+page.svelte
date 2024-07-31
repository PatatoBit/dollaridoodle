<script lang="ts">
	let isDarkMode: boolean;
</script>

<svelte:head>
	<title>DollaryDoodle</title>
</svelte:head>

<main class="page">
	<div class="wrapper">
		<div class="center">
			<h1 class="hero">Generate your art ideas</h1>
			<h1 class="hero">
				but with a
				<img class="human invert" src="/images/human.png" alt="human" />
			</h1>

			<br />

			<p class="label">have the human touch in your art generation</p>

			<br />
			<br />

			<a href="/app"> <button>start generating</button></a>
			<div></div>
		</div>
	</div>
</main>

<div class="page">
	<div class="wrapper">
		<h2>Real art takes time</h2>
		<p>humans don't steal art from others to mush them into a new one in seconds.</p>

		<br />

		<div class="compares">
			<div class="compare">
				<img src="https://placeholder.co/500" alt="AI generated" />
				<p class="label">Stable Diffusion</p>
			</div>

			<div class="compare">
				<img src="https://placeholder.co/500" alt="AI generated" />
				<p class="label">DollaryDoodle</p>
			</div>
		</div>
	</div>
</div>

<article class="page">
	<div class="wrapper">
		<h2>How does this work?</h2>

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

<article class="page">
	<div class="wrapper">
		<h2>Pricing</h2>
		<p>humans have to eat</p>

		<br />

		<div class="prices">
			<div class="price">
				<img src="/images/resolution/basic.png" alt="Basic Doodle" />
				<div class="price-text">
					<h3>Basic</h3>
					<p>simple doodle</p>
					<p>minimal details</p>
				</div>

				<div class="price-label">
					<h4>$0.99</h4>
				</div>
			</div>

			<div class="price">
				<img src="images/resolution/detailed.png" alt="Detailed Doodle" />
				<div class="price-text">
					<h3>Detailed</h3>
					<p>doodle with more details</p>
					<p>and more details</p>
				</div>

				<div class="price-label">
					<h4>$3.99</h4>
				</div>
			</div>

			<div class="price">
				<img src="/images/resolution/coloured.png" alt="Coloured Doodle" />
				<div class="price-text">
					<h3>Coloured</h3>
					<p>a detailed doodle</p>
					<p>but with colours!</p>
				</div>

				<div class="price-label">
					<h4>$5.99</h4>
				</div>
			</div>
		</div>
	</div>
</article>

<style lang="scss">
	h2 {
		color: var(--primary);
	}

	article {
		padding-bottom: 2rem;
	}

	img {
		max-width: 100%;
	}

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

	.abouts {
		max-width: 100%;
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
			margin: 1rem 0;
			gap: 1rem;

			flex: 1;

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

	.prices {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;

		max-width: 100%;
		gap: 2rem;

		.price {
			display: flex;
			flex-direction: column;
			position: relative;
			flex: 1;

			img {
				max-width: 100%;
			}
		}

		.price-text {
			margin-top: 1rem;
			flex: 1;
		}

		.price-label {
			position: absolute;
			rotate: 7deg;
			bottom: 0;
			right: 0;

			border-radius: 2rem;

			padding: 0.5rem 1rem;
			background-color: var(--secondary);
			color: var(--background);
		}
	}

	.compares {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 2rem;

		.compare {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;
			flex: 1;

			img {
				max-width: 100%;
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

		.prices {
			flex-direction: column;
			align-items: center;
			gap: 2rem;

			.price {
				width: 20rem;
			}
		}
	}
</style>
