<template>
    <div class="container bg-white rounded p-2">

        <div class="card text-center   mb-5 mt-5">
            <div class="card-header request-header text-white bg-primary">
                <span class="card-title ">Purpose of Scan</span>
            </div>
            <div class="card-body">

                <purposes></purposes>

            </div>
            <div class="card-footer text-white text-muted">
                2 days ago
            </div>
        </div>
        <div class="card text-center  mb-5">
            <div class="card-header text-white bg-info">
                Featured
            </div>
            <div class="card-body bg-white mb-5">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-info">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>
        <div class="card text-center mb-5">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>
        <div class="card text-center mb-5">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                2 days ago
            </div>
        </div>

    </div>
</template>

<script>

import Purposes from '@/components/requests/purpose/Purposes.vue';

export default {

  components: {

    Purposes
      },
};
</script>

<style lang="scss" scoped>

.cls-1{fill:#0a6b37;stroke:#6ebe44;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:none;stroke:#05aa4c;stroke-width:2px;}
.request-header{
    --color:white;

    clip-path: polygon(0 0,100% 0,100% 11%, 50% 11%,46% 100%,0 100%);
    border-radius: 1rem;
    color:var(--color);
    display: flex;

    transition:all 1s ease-in-out ;
}
.request-header>span{
    color: var(--color);
    transform: translateX(0px);
    transition:all 1s ease-in-out ;
}

.request-header:hover > span{
    color: #6ebe44;

    transform: translateX(30%);
}
.request-header:hover{
    clip-path: polygon(0 0,100% 0,100% 11%, 60% 11%,56% 100%,0 100%);
    background-color: var(--color, white);
}

</style>
