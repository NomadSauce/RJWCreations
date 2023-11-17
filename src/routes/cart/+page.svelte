<script>
    import { cartItems } from "../../cart";
</script>

<div class="container-fluid d-flex full_height flex-column">
    {#each $cartItems as item }
        <div class="border border-danger rounded">
            <h6 class="display-6 text-white-50">{item.blank} {item.stone} {item.price}</h6>
        </div>
    {/each}
</div>