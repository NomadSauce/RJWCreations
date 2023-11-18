<script>
    export let data
</script>

<div class="d-inline-flex flex-column align-items-end align-content-stretch">
    {#each data as item }
        <div class="row align-self-right align-items-center cart-item">
            <h6 class=" text-white-50">{item.size} {item.blank} {item.stone} ${item.price}</h6>
        </div>
    {/each}
</div>

<style>
    .cart-item {
        border: 1px solid rgb(51, 0, 170);
        border-radius: 2rem;
        background-color: rgb(41, 41, 41);
        margin: 5px;
        padding: 5px;

    }
</style>