<template>
    <div class="" >
        <span  v-for="error in errors" :key="error">
            {{error}}
        </span>
    </div>
</template>

<script>
    export default {
        props:{
            errors:{
                type:[Object,String],
                default:null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
