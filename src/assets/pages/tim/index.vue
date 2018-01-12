<template>
	<div class="tim">
		<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<div class="bg--container">
			<div class="bg--color">
		</div>
		<span class="bg--title">Hi, I'm Tim<span class="blink">|</span></span>
		<i class="bg--icon material-icons" v-scroll-to="'.container'">expand_more</i>
		</div>
		<div class="container">
		<div class="expertise--title"> My Expertise </div>
			<div class="expertise">
				<div class="expertise--b1">
					Lorum Ipsum
				</div>
				<div class="expertise--b2">
					Lorum Ipsum
				</div>
				<div class="expertise--b3">
					Lorum Ipsum
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.tim {
	height: 2000px;
	font-family: 'Montserrat', sans-serif;
	background-color: #e7e3e3;

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
		z-index: 1;

		.bg--color {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to bottom right, #e7e3e3, #000000); //#525252
			opacity: .6;
			z-index: 1;
		}
	}
	
	.bg--title {
		font-size: 6em;
		font-weight: 600;
		color: #FFF;
		z-index: 2;
	}

	.bg--icon {
		font-size: 4em;
		color: #FFF;
		z-index: 2;
		cursor: pointer;
		opacity: .6;
		transition-duration: 500ms;

		&:hover {
			opacity: 1.0;
			transition-duration: 500ms;
		}
	}
	.container {
		position: absolute;
		top: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		font-size: 2em;
		text-align: center;
		color: #000;
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

	.expertise {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		height: 400px;
		width: 100%;
		background-color: #FFF;
		color: #525252;
		
		&--title {
			font-size: 1.4em;
			font-weight: 600;
			width: 100%;
			background-color: #FFF;
			padding: 50px 0;
		}
	
		&--b1 {
			
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
