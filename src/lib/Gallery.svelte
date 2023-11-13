<script>

    import { onMount } from 'svelte'
    import ImageModal from './ImageModal.svelte'

    import ring1 from '$lib/assets/ring1.jpg'
    import ring2 from '$lib/assets/ring2.jpg'
    import ring3 from '$lib/assets/ring3.jpg'
    import ring4 from '$lib/assets/ring4.jpg'
    import ring5 from '$lib/assets/ring5.jpg'
    import ring6 from '$lib/assets/ring6.jpg'
    import ring7 from '$lib/assets/ring7.jpg'
    import ring8 from '$lib/assets/ring8.jpg'
    import ring9 from '$lib/assets/ring9.jpg'
    import ring10 from '$lib/assets/ring10.jpg'
    import ring11 from '$lib/assets/ring11.jpg'
    import ring12 from '$lib/assets/ring12.jpg'
    import ring13 from '$lib/assets/ring13.jpg'

    onMount(() => {
        console.log(columns)
    })

    let images = [
        ring1,
        ring2,
        ring3,
        ring4,
        ring5,
        ring6,
        ring7,
        ring8,
        ring9,
        ring10,
        ring11,
        ring13,
    ]

    let col1 = []
    let col2 = []
    let col3 = []


    let columns = images.forEach((v, index) => {
        // console.log('index: ', v, index)
        let tmp = index + 1
        if (tmp % 3 === 0) {
            // console.log('Column 3', v, index)
            col3 = [...col3, v]
        } else if (tmp % 2 === 0) {
            // console.log('Column 2', v, index)
            col2 = [...col2, v]

        } else {
            // console.log('Column 1', v, index)
            col1 = [...col1, v]

        }
    })


    // -------------------------------------------------
    


    let showModal = false

    let fullImg = ''

    function handleClick(image) {
        showModal=true
        fullImg = image
    }

    // -------------------------------------------------

    

    // -------------------------------------------------




</script>



<div class="gallery border border-danger">
    <h2 class="display-6 text-white-50">
        Gallery
    </h2>

    <!-- {#if fullScreen}
        <div>
            <img class="full-img" src={fullImg} alt="">
        </div>
    {/if} -->

    <ImageModal bind:showModal>
        <img class='full-img' src={fullImg} alt="">
    </ImageModal>

    <div class="w-100 d-flex">
        <!-- {#each cols as col, index}
            
        {/each} -->
        <div class="d-flex flex-column">
            {#each col1 as col }
                <img 
                    class="col m-1 gal-photo" 
                    on:click={() => handleClick(col)}
                    src={col} 
                    alt="">
            {/each}
        </div>

        <div class="d-flex flex-column">
            {#each col2 as col }
                <img 
                    class="col m-1 gal-photo" 
                    on:click={() => handleClick(col)}
                    src={col} 
                    alt="">
            {/each}
        </div>

        <div class="d-flex flex-column">
            {#each col3 as col }
                <img 
                    class="col m-1 gal-photo" 
                    on:click={() => handleClick(col)}
                    src={col} 
                    alt="">
            {/each}
        </div>
        <!-- {#each images as image }
            <img 
                class="col m-1 gal-photo" 
                on:click={() => handleClick(image)}
                src={image} 
                alt="">
        {/each} -->
    </div>
</div>

<style>
	
</style>