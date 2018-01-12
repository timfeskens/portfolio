<template>
	<div class="tim">
		<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<div class="bg--container">
			<div class="bg--color">
		</div>
		<span class="bg--title">Hi, I'm Tim<span class="blink">|</span></span>
		<i class="material-icons to-bottom" v-scroll-to="'.container'">expand_more</i>
		</div>
		<i class="material-icons to-top" v-scroll-to="'.bg--container'">expand_less</i>
		<div class="container">
			<div class="expertise--title"> My Expertise </div>
			<div class="expertise">
				<div class="expertise--b1">
					<h2>Lorum Ipsum</h2>
					Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
				</div>
				<div class="expertise--b2">
					<h2>Lorum Ipsum</h2>
					Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
				</div>
				<div class="expertise--b3">
					<h2>Lorum Ipsum</h2>
					Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
				</div>
			</div>
		<div class="about--title"> My Life </div>
		<div class="about">
			<div class="about__image"></div>
			<div class="about__block">
				<div class="about__block--1">
				Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
				</div>
				<div class="about__block--2">
					Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
				</div>
			</div>
		</div>
		</div>
	</div>
</template>
<style lang="scss">
@import '~@/main.scss';
.tim {
	height: 2000px;
	font-family: 'Montserrat', sans-serif;
	background-color: $tim--lightgray;

	.to-bottom {
		font-size: 4em;
		color: $tim--white;
		z-index: 3;
		cursor: pointer;
		opacity: .6;
		transition-duration: 500ms;

		&:hover {
			opacity: 1.0;
			transition-duration: 500ms;
		}
	}

	.to-top {
		position: fixed;
		right: 10px;
		bottom: 10px;
		font-size: 4em;
		color: $tim--black;
		z-index: 1;
		cursor: pointer;
		opacity: .6;
		transition-duration: 500ms;

		&:hover {
			opacity: 1.0;
			transition-duration: 500ms;
		}
	}

	.bg--container {
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		overflow: hidden;
		height: 100%;
		background-image: url("../../images/laptop.jpeg");
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		z-index: 2;

		.bg--color {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to bottom right, $tim--lightgray, $tim--black);
			opacity: .6;
			z-index: 2;
		}
	}
	
	.bg--title {
		font-size: 6em;
		font-weight: $heavy;
		color: $tim--white;
		z-index: 3;
	}

	.blink {
  		animation: blink 1300ms infinite;
		height: 1em;
	}

	@keyframes blink {
		0% {opacity: 0}
		49%{opacity: 0}
		50% {opacity: 1}	
	}

	.container {
		position: absolute;
		top: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		text-align: center;
		color: $tim--black;
	}

	.expertise {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		height: 450px;
		width: 100%;
		background-color: $tim--white;
		color: $tim--gray;
		
		&--title {
			font-size: 2em;
			font-weight: $heavy;
			width: 100%;
			background-color: $tim--white;
			padding: 50px 0;
		}
	
		&--b1, &--b2, &--b3 {
			font-weight: $semi-bold;
			font-size: 1.1em;
			width: 20%;
			color: $tim--gray;

			h2 {
				font-size: 1.5rem;
				padding-bottom: 50px;
			}
		}
	}

	.about {
		display: flex;
		flex-direction: column;
		height: 400px;
		width: 100%;
		
		&--title {
			font-size: 2em;
			font-weight: $heavy;
			width: 100%;
			padding: 50px 0 30px;
		}

		&__image {
			height: 200px;
			width: 150px;
			margin: 0 auto 50px;
			background: url("../../images/tim.png") no-repeat center;
			background-size: contain;
		}

		&__block {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			&--1, &--2 {
				font-size: 1.1em;
				text-align: justify;
				width: 400px;
			}
		}
	}
}

</style>

<script>
export default {
  name: 'Tim',

	mounted: function() {
		console.log('het is werkende');
	},
	methods: {
		scrollDown: function (event) {
			alert('Hello')
		}
	}
}
</script>
