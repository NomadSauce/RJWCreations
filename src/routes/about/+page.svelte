<script>

    import yooperlite from '$lib/assets/ylr.jpg'
    import superiorshore1 from '$lib/assets/superiorshore.jpg'
    import '@fontsource/nanum-myeongjo';
    import '@fontsource/cormorant-sc';
	import '@fontsource/nanum-gothic';


</script>

<div 
    class="main_slider rounded m-3 d-flex flex-column align-items-left"
    style="background-image: url({superiorshore1});">

    <div class=" col-md-7 col-sm-6 col-lg-8 p-3 ">
        <p class="display-6 text-white-50 text-left banner-bg rounded p-2">
            Each ring starts with the long journey to Michigan's Upper Penninsula on Lake Superior. 
        </p>
        <p class="display-6 text-white-50 text-left banner-bg rounded p-2">
            Each stone is broken down to flakes where each flake is selected for the best luminescent properties. 
        </p>
        <!-- <p class="display-6 text-white-50 text-left banner-bg rounded p-2">
            
        </p> -->
    </div>
</div>

<div class="d-flex flex-wrap justify-content-around m-3  rounded ">
    <div class="align-items-center align-self-center col-md-7 col-sm-6 col-lg-8">
        <blockquote class="blockquote">
            <p class=" text-white-50 text-end">
                A yooperlite is a type of rock that is found in the Upper Peninsula of Michigan, USA. 
                It is known for its unique and beautiful fluorescence under ultraviolet light. 
                High sodalite content in the matrix of the stones is responsible for their fluorescence.
            </p>
            <p class="text-white-50">
                Each ring is hand-made-to-order. Orders are typically shipped within 1 week but may take longer depending on demand.
            </p>

        </blockquote>
    </div>
    <div class="align-self-center">
        <img class='about-photo' src={yooperlite} alt="">
    </div>
</div>



<style>
    .banner-bg {
        /* font-family: 'Nanum Myeongjo', sans-serif; */
        font-family: 'Cormorant SC', sans-serif;
        /* font-family: 'Nanum Gothic', sans-serif; */


    }
</style>