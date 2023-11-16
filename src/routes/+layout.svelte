<script>
	import '../app.scss';
	import { cartItems } from '../cart';
</script>

<div class="container-fluid p-2">
	<ul class="d-flex justify-content-center nav_bar">
		<li class="nav-item p-2 m-1 btn btn-sm btn-dark">
			<a class="nav-link text-primary active" aria-current="page" href="/">Home</a>
		</li>
		<li class="nav-item p-2 m-1 btn btn-sm btn-dark">
			<a class="nav-link text-primary" href="/products">Products</a>
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

<!-- <div class="container-fluid header">
	<footer class="main_footer">

	</footer>
</div> -->



<style>
	
	.navbar {
		height: 5rem;
	}

</style>