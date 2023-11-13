<script>
	import '../app.scss';
	import { cartItems } from '../cart';
</script>

<div class="container-fluid header trans_300 row">

<nav class="navbar navbar-expand-lg bg-dark">
	<div class="container-fluid  d-flex justify-content-between">
		<h4 class="text-danger display-6">RJs Creations</h4>
		<ul class="navbar-nav d-flex justify-content-around ">
			<li class="nav-item ">
			<a class="nav-link text-primary active" aria-current="page" href="/">Home</a>
			</li>
			<li class="nav-item ">
			<a class="nav-link text-primary" href="/products">Products</a>
			</li>
			<li class="nav-item ">
			<a class="nav-link text-primary" href="/about">About</a>
			</li>
			<li class="nav-item ">
			<a class="nav-link text-primary" href='/cart'>Cart {$cartItems.length}</a>
			</li>
		</ul>
	</div>
</nav>
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