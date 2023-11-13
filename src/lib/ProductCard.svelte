<script>
    import { cartItems, addToCart, removeFromCart } from '../cart.js'
   
    export let product
    let selection = 'Yooperlight'
    let prod_price = 135

    function onChange(value, price) {
        selection = value
        prod_price = price
        console.log(value, price)
    }

    function addCart(id, name, price) {
        $cartItems = [{id, name, price}, ...$cartItems]
        // console.log()
    }

    $: console.log('cartITems:', $cartItems)

</script>

<div class="card  align-items-center bg-dark text-primary full_height">
    <div class="card-header">
        <div class="row">
            <img src={product.image} class="card-img-top" alt="...">
            <h2>{selection} - {product.name} - ${prod_price}</h2>
        </div>

        <div class="row d-flex justify-content-around">
            {#each product.options as option }
                <div>

                    <label class="m1 p1">
                        <input type="radio" checked={selection===option.value} on:change={() => onChange(option.value, option.price)} value={option.value}> {option.value} - ${option.price}
                    </label>
                </div>
            {/each}
        </div>
    </div>

    <div class="card-body">
        
    </div>

    <div class="card-footer">
        <button class="btn btn-dark btn-sm" on:click={() => addCart(product.id, product.name, prod_price)}>Add to Cart</button>
        <!-- <button class="btn btn-dark btn-sm" on:click={() => addToCart(product.id, product.name, prod_price)}>Add to Cart</button> -->
    </div>
</div>