<script>
	import { products, cartItems } from "../cart";
	import Gallery from "../lib/Gallery.svelte";
	import ProductCard from "../lib/ProductCard.svelte";
	import whiteceramic from "../lib/assets/whtc.jpg";
	import blackceramic from "../lib/assets/blkc.jpg";
	import titanium from "../lib/assets/ttnm.jpg";
	import yooperlight from "../lib/assets/yooperlite.jpg";
	import blueopal from "../lib/assets/blueopal.jpg";
	import banner5 from "../lib/assets/banner5.jpg";
	import ring2 from "../lib/assets/ring2.jpg";
	import bannermobile from '$lib/assets/bannermobile.jpg'
	import mainbanner from '$lib/assets/bannermain.jpg'
	import '@fontsource/cormorant-sc/300.css';



	

	function changeRange(e) {
		console.log(e);
	}

	// -------------------------------------------------------

	let blank = ''
	let stone = ''
	let value = 7;
	let price = 0

	let size = 8

	function selectBlank(selected) {
		console.log("Blank selected:", selected);
		blank = selected
	}

	function selectStone(selected) {
		console.log('Stone Selected: ', selected)
		stone = selected
		if (selected === 'opal') {
			price = 115
		} else if (selected === 'yooper') {
			price = 135
		}
	}

	function addToCart() {
		console.log('Add to Cart')
		let item = {
			blank: blank,
			stone: stone,
			size: value,
			price: price
		}
		console.log('Item:', item)
		$cartItems = [item, ...$cartItems]
		blank = ''
		stone = ''
		price = 0
		console.log('Item', item, 'store', $cartItems)
	}

	async function checkout() {
        console.log('Checkout', $cartItems)
		await fetch('api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				{
					items: $cartItems
				}
			)

		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url)
		})
	}

	export let data

	// -------------------------------------------------------

	$: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;

	let break_points = [
		{
			lbl: "xs",
			min: 0,
			max: 575,
		},
		{
			lbl: "sm",
			min: 576,
			max: 768,
		},
		{
			lbl: "md",
			min: 769,
			max: 992,
		},
		{
			lbl: "lg",
			min: 993,
			max: 1200,
		},
		{
			lbl: "xl",
			min: 1201,
			max: 9999,
		},
	];

	$: checkBPs(outerWidth);

	let bp = checkBPs(outerWidth);

	function checkBPs(width) {
		// console.log("Width:", width, data.data);
		break_points.forEach((v) => {
			if (outerWidth >= v.min && outerWidth <= v.max) {
				// console.log("Breakpoint: ", v);
				bp = v;
			}
		});
	}
</script>

<svelte:window
	bind:innerWidth
	bind:outerWidth
	bind:innerHeight
	bind:outerHeight
/>

<div class="container-fluid">
	<!-- Main Slider -->
	<div class="h-100 row">
		{#if outerWidth <= break_points[1].max}
			<div
				class="justify-content-center banner main_slider "
				style="background-image: url({bannermobile});">
				<div class="text-center">
					<div class="banner-bg  pb-2 mt-3 w-100 rounded">
						<!-- <img src={mainbanner} alt=""> -->
						<h1 class="banner-header  text-center text-white-50">
							RJ's Creations
						</h1>
						<h6 class="text-white-50 sub-banner">
							Bespoke luminous rings <em>hand-made-to-order</em>  
						</h6>
					</div>
				</div>
			</div>
		{:else}
			<div
				class="banner main_slider d-flex "
				style="background-image: url({mainbanner});">
				<div class="flex-column align-self-center banner-bg rounded d-flex align-items-center ml-4 pl-4">
					<div class="align-self-center ">
						<h1 class="banner-header text-danger text-left">
							RJ's Creations
						</h1>
					</div>
					<div class="text-left ">
						<div class="p-4 mt-4 w-100 rounded">
							<h6 class="text-white-50 sub-banner ml-4">
								Bespoke luminous rings <em>hand-made-to-order</em>  
							</h6>
						</div>
					</div>
				</div>
				
			</div>
		{/if}
	</div>

	<!-- Gallery -->
	<Gallery />


	

	<div class="row text-white-50 p-2 m-2">
		<h2>3 easy steps</h2>
	</div>

	<div class="row justify-content-evenly" id='builder'>
		<!-- Step 1: Ring blank -->
		<div
			class="row d-flex align-items-stretch justify-content-around thin_banner p-2 m-1 col-lg"
		>
			<div class="d-flex align-items-center m-2">
				<div class="flex-shrink-0">
					<div class:active-circle={blank != ''} 
					class="circle p-1 col-4"
					>
					1
				</div>
				</div>
				<div class="flex-grow-1 ms-1">
					<h3 class="text-white-50">Select your blank</h3>
				</div>
			</div>

			<!-- White Ceramic -->
			<div
				on:click={() => selectBlank("whiteceramic")}
				class:active={blank === 'whiteceramic'}
				class="d-flex align-items-center flex-sm-row flex-lg-column justify-content-around rounded col-sm-4 col-md border border-dark sm-1 bg-secondary blank-product pt-1 pb-2"
			>
				<div
					class="align-text-centercol-lg-12 col-sm align-self-sm-center flex-grow-1 ms-1 justify-content-sm-around"
				>
					<h5
						class="text-white-50 text-center align-items-sm-center col-md-4 align-items-lg-center col-sm-4 justify-content-sm-around"
					>
						White Ceramic
					</h5>
				</div>
				<div
					class="col-lg-12 col-sm-4 d-flex justify-content-sm-center"
				>
					<img src={whiteceramic} alt="" class="blankimg" />
				</div>
			</div>

			<!-- Black Ceramic -->
			<div
				on:click={() => selectBlank("blackceramic")}
				class:active={blank === 'blackceramic'}
				class="d-flex align-items-center flex-sm-row flex-lg-column justify-content-around rounded col-sm-4 col-md border border-dark sm-1 bg-secondary blank-product pt-1 pb-2"
			>
				<div
					class="align-text-centercol-lg-12 col-sm align-self-sm-center flex-grow-1 ms-1 justify-content-sm-around"
				>
					<h5
						class="text-white-50 text-center align-items-sm-center col-md-4 align-items-lg-center col-sm-4 justify-content-sm-around"
					>
						Black Ceramic
					</h5>
				</div>
				<div
					class="col-lg-12 col-sm-4 d-flex justify-content-sm-center"
				>
					<img src={blackceramic} alt="" class="blankimg" />
				</div>
			</div>

			<!-- Titanium -->
			<div
				on:click={() => selectBlank("titanium")}
				class:active={blank === 'titanium'}
				class="d-flex align-items-center flex-sm-row flex-lg-column justify-content-around rounded col-sm-4 col-md border border-dark sm-1 bg-secondary blank-product pt-1 pb-2"
			>
				<div
					class="align-text-centercol-lg-12 col-sm align-self-sm-center flex-grow-1 ms-1 justify-content-sm-around"
				>
					<h5
						class="text-white-50 text-center align-items-sm-center col-md-4 align-items-lg-center col-sm-4 justify-content-sm-around"
					>
						Titanium
					</h5>
				</div>
				<div
					class="col-lg-12 col-sm-4 d-flex justify-content-sm-center"
				>
					<img src={titanium} alt="" class="blankimg" />
				</div>
			</div>
		</div>

		<!-- Step 2: Stone -->
		<div
			class="row d-flex align-items-stretch justify-content-evenly thin_banner p-2 m-1 col-lg"
		>
		<div>
			
		</div>
			<!-- Title -->
			<div class="d-flex align-items-center m-2">
				<div class="flex-shrink-0">
					<div class="circle p-1 col-4"
					class:active-circle={stone != ''} 
				>
					2
					</div>
				</div>
				<div class="flex-grow-1 ms-1">
					<h3 class="text-white-50">Select your stone</h3>
				</div>
			</div>
			<!-- Yooperlight -->
			<div
				class="d-flex align-items-center flex-column justify-content-between bg-secondary blank-product col-5 pb-2"
				on:click={() => selectStone('yooper')}
				class:active={stone === 'yooper'}
				>
				<div class="align-text-center">
					<h5 class="text-white-50 text-center">
						Yooperlight (Syenite)
					</h5>
				</div>
				<img src={yooperlight} alt="" class="blankimg" />
			</div>
			<!-- Blue Opal -->
			<div
				on:click={() => selectStone('opal')}
				class="d-flex align-items-center flex-column justify-content-between bg-secondary blank-product col-5 pb-2"
				class:active={stone === 'opal'}
				>
				<div class="align-text-center">
					<h5 class="text-white-50 text-center">Blue Opal</h5>
				</div>

				<div>
					<img src={blueopal} alt="" class="blankimg" />
				</div>
			</div>

			<!-- Ring Size -->
			<div class="d-flex m-3">
				<div class="d-flex align-items-center m-2">
					<div class="flex-shrink-0">
						<div 
							class="circle p-1 col-4"
							class:active-circle={value != ''}
							>
							3
						</div>
					</div>
					<div class="flex-grow-1 ms-1">
						<h3 class="text-white-50">Select your size</h3>
					</div>
				</div>
				<div class="row justify-content-center banner">
					<label for="customRange3" class="text-white-50"
						><h4>{value}</h4></label
					>
					<input
						type="range"
						class="form-range p-3"
						min="5"
						max="13"
						step="0.5"
						id="customRange3"
						bind:value
					/>
				</div>
			</div>
			<div>
				<button class={(blank === '' || stone === '') ? "btn btn-secondary btn-lg rounded disabled" : "btn btn-secondary btn-lg rounded"} on:click={() => addToCart()}>{($cartItems.length > 0) ? 'Add Another' : 'Add to Cart'}</button>
				{#if $cartItems.length > 0}
					<button 
						on:click={() => checkout()}
						class="btn btn-danger btn-lg rounded">
						Checkout! {$cartItems.length}
					</button>
				{/if}
			</div>
		</div>
	</div>

	<!--  -->
	<div class="main_slider h-100" />
	<!-- 
	<div class="banner  main_slider">
		
	</div> -->
</div>

<style>
	.active {
		background-color: rgb(1, 117, 226) !important;
		background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%,rgba(220, 66, 37, 0.0) 100%); /* W3C */
	}
	
	.active-circle {
		background-color: rgb(1, 117, 226) !important;

	}
	.sub-banner {
		font-family: 'Cormorant SC', sans-serif;
		font-weight: 300;
		font-size: 24px !important;

	}

	.banner-header {
		font-family: 'Dancing Script' !important;
		font-size: 48px !important;
	}
</style>
