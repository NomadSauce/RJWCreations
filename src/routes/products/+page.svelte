<script>

    import { cartItems } from '../../cart.js';
    import { get } from 'svelte/store';
    export let data
    $: cycleData(data.data)

    function cycleData(v) {
        v.forEach(element => {
            // console.log('Product:', element.id)
        });
    }

    async function checkout() {
        console.log('Checkout', get(cartItems))
		await fetch('api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				{
					items: get(cartItems)
				}
			)

		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url)
		})
	}
</script>

<div class="d-flex flex-wrap">
    {#each data.data as product}
        <div class="border border-secondary rounded m-2 p-2">
            <h1 class="display-6 text-white-50 m-2 p-2 ">{product.name}</h1>
            <!-- <p class="display-6 text-white-50">{product.id}</p> -->
            <button class="btn btn-secondary btn-lg rounded" on:click={() => checkout(product)}>X</button>
        </div>
    {/each}
</div>