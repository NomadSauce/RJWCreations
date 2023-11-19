<script>
    export let data

    function selectItem(item) {
        console.log('Cart Item:', item)
    }
</script>

<div class="d-inline-flex flex-column align-items-end align-content-stretch">
    {#each data as item }
        <div class="row align-self-right align-items-center cart-item" on:click={() => selectItem(item)}>
            <h6 class=" text-white-50 align-middle">{item.size} {item.blank} {item.stone} ${item.price}</h6>
        </div>
    {/each}
</div>

<style>
    .cart-item {
        background: linear-gradient(rgb(46, 46, 46), rgb(46, 46, 46)) padding-box,
              linear-gradient(to right, darkblue, darkorchid) border-box;
        border-radius: 50em;
        border: 2px solid transparent;
        padding: 5px;
        margin: 5px;

    }
</style>