<template>
<div class="flex justify-center items-center bg-gray-700">
    <div class="fixed  h-full w-full flex flex-wrap-reverse">
       <div  class="w-full sm:w-1/2">
            <h2 v-bot:text.init="'hi'" class="text-6xl text-white font-bold font-gentona m-0 mt-20">G-Zero</h2>
            <h1 class="text-black text-xl m-0">Welcome!</h1>
       </div>
       <div v-bot:text="'CITY Plan'" class="w-full sm:w-1/2 flex flex-wrap items-start justify-end">
            <lottie  path="city" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="height"/>
       </div>
    </div>
</div>
</template>

<script>
import {isDevice} from '@/utils/devices'
import Carousel from '@/components/carousel'
export default {
    components:{
        Carousel
    },
    data() {
        return {
            isAnimating: false,
            positions: [],
        }
    },
    computed: {
        height(){
            return isDevice('mobile') ? 400 : 600
        }
    },
    mounted() {

    },
    methods: {
        setAnimController(e) {

        },
        logoClick() {
            this.$store.dispatch('App/setBot', {
                messages: null
            })
        }

    }
}
</script>

<style scoped>

</style>
