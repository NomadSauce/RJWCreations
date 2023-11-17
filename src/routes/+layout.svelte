<script>
	import '../app.scss';
	import { cartItems } from '../cart';
	import '@fontsource/dancing-script/400.css'
	import '@fontsource/roboto'
</script>

<div class="container-fluid">
	<ul class="d-flex justify-content-center nav_bar">
		<li class="nav-item p-2 m-1 btn btn-sm btn-dark">
			<a class="nav-link text-primary active" aria-current="page" href="/">Home</a>
		</li>
		<li class="nav-item p-2 m-1 btn btn-sm btn-dark">
			<a class="nav-link text-primary" href="#builder">Rings</a>
		</li>
		<li class="nav-item p-2 m-1 btn btn-sm btn-dark">
			<a class="nav-link text-primary" href="/about">About</a>
		</li>
		<li class="nav-item p-2 m-1 btn btn-sm btn-dark">
			<a class="nav-link text-primary" href='/cart'>Cart {$cartItems.length}</a>
		</li>
	</ul>
</div>

<slot />


<!-- footer -->
<div class="container-fluid header w-100 p-0 m-0">
	<footer class="main_footer d-flex justify-content-center align-items-center ">
		<h1 class="text-center">RJ's Creations</h1>
	</footer>
</div>



<style>
	
	.navbar {
		height: 5rem;
	}

	.main_footer {
		background-color: black;
		height: 70px;
		font-family: 'Dancing Script' !important;
		font-size: 60px !important;
		color: rgb(114, 114, 114);
		background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%,rgba(220, 66, 37, 0.0) 100%); /* W3C */

	}

</style>