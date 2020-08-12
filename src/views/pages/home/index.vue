<template>
<div class="flex flex-col justify-center items-center bg-gray-700 page">
    <div class="flex flex-wrap-reverse justify-center pt-20">
       <div  class="w-full sm:w-1/2 pb-4">
            <!-- <h2 v-bot:text.init="'welcom to G-zero'" class="text-6xl text-white font-bold font-gentona m-0 mt-20">WELCOME</h2>
            <h1 class="w-1/2 mx-auto text-black text-5xl m-0 self-center align-middle flex justify-center items-center bg-white rounded-full"><span class="text-red-700 text-6xl">G</span>-zero</h1> -->
       </div>
       <div v-bot:text.init="'CITY Plan You may use special comments to disable some warnings.Use <br/>Use to ignore all warnings in a file.'" class="w-full sm:w-1/2">
            <lottie  path="city" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1"/>
       </div>
    </div>
</div>
</template>

<script>
import {isDevice} from '@/utils/devices'
import Carousel from '@/components/carousel'
import { mapGetters } from 'vuex'
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
        ...mapGetters({
            hightlights:'App/hightlights'
        }),
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
            this.$store.dispatch('Bot/setBot', {
                messages: null
            })
        }

    }
}
</script>

<style scoped>
.float--enter-active {
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
    transition: all;
    animation: floating 1s infinite;
}
.float-leave-active {
  transition-duration: 100ms;
    transition-timing-function: ease-in-out;
    transition: all;
    animation: floating 1s   forwards;
}
</style>
