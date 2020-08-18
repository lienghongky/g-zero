<template>
<div class="page bg-gray-600 overflow-y-scroll content-between z-50">
    <div class="fixed inset-0">
        <!-- <sketch-fab :obj="'c632823b6c204797bd9b95dbd9f53a06'" class="w-full h-full"/> -->
    </div>
    <div class="flex flex-wrap sm:flex-no-wrap justify-center items-center  ">
        <div class="w-full sm:w-1/2  sm:h-full p-2 sm:pl-20 pt-20 sm:pt-0 text-left">
            <h1 class="text-xl m-0 sm:text-4xl z-100">Hello!</h1>
            <h1 class="text-lg m-0 sm:text-4xl text-white z-100">Welcome to G-zero The Site<span v-bot:text.init="'CITY Plan You may use special comments to disable some warnings.Use <br/>Use to ignore all warnings in a file.'"></span>!</h1>
            
            <!-- <div class="flex rounded-full bg-gray-800 p-2 relative">
                <vs-input class="w-full"  placeholder="Name" />
                <div class="absolute right-0 -top-2 rounded-lg w-10 h-10 flex items-center justify-center bg-gray-600 shadow-lg">
                    <ic icon="ic_instagram_solid"/>
                </div>
             </div> -->
        </div>
        <div class="w-full sm:w-1/2 flex flex-col justify-center items-start py-20 space-y-4">
            <lottie path="dev" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="300" :width="400" />
            <div class="flex justify-center w-full space-x-6">
                <div @mousedown="avatarSelect(item)" @mouseenter="mouseenter" @mouseleave="mouseleave" :class="{'border-green-500 shadow-3xl':avatar==item}" class="floating hover:translate-y-10 hover:shadow-3xl border-gray-500 hover:border-blue-600 border-solid rounded-xl w-24 h-32 bg-gray-300 bg-opacity-25 shadow-xl flex justify-center items-center" v-for="(item, index) in ['robot','botv2']" :key="index">
                    <lottie :path="item" :loop="true" :autoPlay="isAnimating" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="70" :width="70" />
                </div>
            </div>
        </div>
    </div>
    <div class="w-full">
        
    </div>
</div>
</template>

<script>
import {
    isDevice
} from '@/utils/devices'
import Carousel from '@/components/carousel'
import {
    mapGetters
} from 'vuex'

import SketchFab from '@/components/sketchFab'
export default {
    components: {
        Carousel,
        SketchFab
    },
    data() {
        return {
            isAnimating: false,
            positions: [],
        }
    },
    computed: {
        ...mapGetters({
            hightlights: 'App/hightlights',
            avatar: 'Bot/avatar'
        }),
        height() {
            return isDevice('mobile') ? 400 : 600
        }
    },
    mounted() {

    },
    methods: {
        mouseenter(e) {
            // console.log(e)
            // e.anim.play()
        },
        mouseleave(e) {
            // console.log(e)
            // e.anim.pause()
        },
        avatarSelect(avatar) {
            this.$store.dispatch('Bot/setBotAvatar', avatar)
            this.$store.dispatch('Bot/setBotHidden', false)
        },
        setAnimController(e) {

        },
        logoClick() {
            this.$store.dispatch('Bot/setBot', {
                messages: null
            })
        }

    },
    watch: {

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
    animation: floating 1s forwards;
}

.title {
    font-size: 3rem;
}
</style>
