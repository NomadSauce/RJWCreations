<script>
	import { 
	products, 
	cartItems }             from "../cart";

	import Gallery 			from "../lib/Gallery.svelte";
	import ProductCard      from "../lib/ProductCard.svelte";
	import whiteceramic     from '../lib/assets/whtc.jpg'
	import blackceramic     from '../lib/assets/blkc.jpg'
	import titanium         from '../lib/assets/ttnm.jpg'
	import yooperlight      from '../lib/assets/yooperlite.jpg'
	import blueopal         from '../lib/assets/blueopal.jpg'
	import banner5			from '../lib/assets/banner5.jpg'
	import ring2 			from '../lib/assets/ring2.jpg'



	let value = 7

	function changeRange(e) {
	console.log(e)
	}

	function selectBlank(blank) {
	console.log('Blank selected:', blank)
	}

	// -------------------------------------------------------

	$: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0

	let break_points = [
		{
			lbl: 'xs',
			min: 0,
			max: 575
		},
		{
			lbl: 'sm',
			min: 576,
			max: 768
		},
		{
			lbl: 'md',
			min: 769,
			max: 992
		},
		{
			lbl: 'lg',
			min: 993,
			max: 1200
		},
		{
			lbl: 'xl',
			min: 1201,
			max: 9999
		}
	]


	$: checkBPs(outerWidth)

	let bp = checkBPs(outerWidth)

	function checkBPs(width) {
		console.log('Width:', width)
		break_points.forEach(v => {
		if (outerWidth >= v.min && outerWidth <= v.max) {
			console.log('Breakpoint: ', v)
			bp = v
		}
	})
	}

</script>


	<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

	<div class="container-fluid mt-5 pt-5">


	<!-- <p class="text-white-50 display-6">
	Inner Width: {innerWidth}
	</p>
	<p class="text-white-50 display-6">
	Inner Height: {innerHeight}
	</p>
	<p class="text-white-50 display-6">
	Outer Width: {outerWidth}
	</p>
	<p class="text-white-50 display-6">
	Outer Height: {outerHeight}
	</p> -->


<!-- Main Slider -->
	<div class="full_height row justify-content-evenly" >
		{#if outerWidth <= break_points[1].max}
			<div class="row justify-content-evenly banner main_slider" style="background-image: url(/src/lib/assets/banner5.jpg);">
			</div>
		{:else}
			<div class="row justify-content-evenly banner main_slider" style="background-image: url(/src/lib/assets/ring2.jpg);">
			</div>
		{/if}
	</div>

<!-- Gallery -->
	<div class="row">
		<Gallery />
	</div>

	<div class="row text-white-50 p-2 m-2">
	<h2>
		3 easy steps
	</h2>
	</div>




	<div class=" row justify-content-evenly">

	<!-- Step 1: Ring blank -->
		<div class="row d-flex align-items-stretch justify-content-around thin_banner p-2 m-1 col-lg" >
		<div class="d-flex align-items-center m-2">
			<div class="flex-shrink-0">
			<div class="circle p-1 col-4 ">1</div>
			</div>
			<div class="flex-grow-1 ms-1">
			<h3 class="text-white-50">
				Select your blank
			</h3>
			</div>
		</div>

		<!-- White Ceramic -->
		<div on:click={() => selectBlank('wc')} class="d-flex align-items-center flex-sm-row flex-lg-column justify-content-around rounded col-sm-4 col-md border border-dark sm-1 bg-secondary blank-product pt-1 pb-2">
			<div class="align-text-centercol-lg-12 col-sm align-self-sm-center flex-grow-1 ms-1 justify-content-sm-around">
			<h5 class="text-white-50 text-center align-items-sm-center col-md-4 align-items-lg-center col-sm-4 justify-content-sm-around">
				White Ceramic
			</h5>
			</div>
			<div class="col-lg-12 col-sm-4 d-flex justify-content-sm-center" >
			<img src={whiteceramic} alt="" class="blankimg">
			</div>
		</div>

		<!-- Black Ceramic -->
		<div on:click={() => selectBlank('bc')} class="d-flex align-items-center flex-sm-row flex-lg-column justify-content-around rounded col-sm-4 col-md border border-dark sm-1 bg-secondary blank-product pt-1 pb-2">
			<div class="align-text-centercol-lg-12 col-sm align-self-sm-center flex-grow-1 ms-1 justify-content-sm-around ">
			<h5 class="text-white-50 text-center align-items-sm-center col-md-4 align-items-lg-center col-sm-4 justify-content-sm-around">
				Black Ceramic
			</h5>
			</div>
			<div class="col-lg-12 col-sm-4 d-flex justify-content-sm-center" >
			<img src={blackceramic} alt="" class="blankimg">
			</div>
		</div>

		<!-- Titanium -->
		<div on:click={() => selectBlank('ti')} class="d-flex align-items-center flex-sm-row flex-lg-column justify-content-around rounded col-sm-4 col-md border border-dark sm-1 bg-secondary blank-product pt-1 pb-2">
			<div class="align-text-centercol-lg-12 col-sm align-self-sm-center flex-grow-1 ms-1 justify-content-sm-around">
			<h5 class="text-white-50 text-center align-items-sm-center col-md-4 align-items-lg-center col-sm-4 justify-content-sm-around">
				Titanium
			</h5>
			</div>
			<div class="col-lg-12 col-sm-4 d-flex justify-content-sm-center" >
			<img src={titanium} alt="" class="blankimg">
			</div>
		</div>
		</div>

	<!-- Step 2: Stone -->
		<div class="row d-flex align-items-stretch justify-content-evenly thin_banner p-2 m-1 col-lg" >
		<!-- Title -->
		<div class="d-flex align-items-center m-2 ">
			<div class="flex-shrink-0">
			<div class="circle p-1 col-4 ">2</div>
			</div>
			<div class="flex-grow-1 ms-1">
			<h3 class="text-white-50">
				Select your stone
			</h3>
			</div>
		</div>
		<!-- Yooperlight -->
		<div class="d-flex align-items-center flex-column justify-content-between bg-secondary blank-product col-5 pb-2">
			<div class="align-text-center">
			<h5 class="text-white-50 text-center">
				Yooperlight (Syenite)
			</h5>
			</div>
			<img src={yooperlight} alt="" class="blankimg">
		</div>
		<!-- Blue Opal -->
		<div class="d-flex align-items-center flex-column justify-content-between bg-secondary blank-product col-5 pb-2">
			<div class="align-text-center">
			<h5 class="text-white-50 text-center">
				Blue Opal
			</h5>
			</div>

			<div>
			<img src={blueopal} alt="" class="blankimg">
			</div>
		</div>
		</div>

		<!-- Step 3: Size -->
		<div class="row d-flex align-items-start justify-content-around thin_banner p-2 m-1 col-lg" >
		<div class="d-flex align-items-center m-2">
			<div class="flex-shrink-0">
			<div class="circle p-1 col-4 ">3</div>
			</div>
			<div class="flex-grow-1 ms-1">
			<h3 class="text-white-50">
				Select your size
			</h3>
			</div>
		</div>
		<div class="row justify-content-center banner">
			<label for="customRange3" class="text-white-50"><h4>{value}</h4></label>
			<input type="range" class="form-range p-3" min="5" max="13" step="0.5" id="customRange3" bind:value >
		</div>
		</div>

	</div>

	<!--  -->
	<div class="main_slider full_height"  >

	</div>
	<!-- 
	<div class="banner  main_slider">
		
	</div> -->
	</div>
	<style>

	</style>