<template>
<div class="page bg-gray-600 overflow-y-scroll content-between z-50">
    <div class="fixed inset-0 transition duration-75 transform scale-125">
        <sketch-fab :obj="'fb78f4cc938144e6902dd5cff354d525'" class="w-full h-full"/>
    </div>
    <div class="flex flex-wrap sm:flex-no-wrap justify-center items-center  ">
        <div class="w-full sm:w-1/2  sm:h-full sm:pl-20 pt-20 sm:pt-0 text-left">
            <h1 class="text-4xl z-100">Hello!</h1>
            <h1 class="text-4xl text-white z-100">Welcome to G-zero The Site<span v-bot:text.init="'CITY Plan You may use special comments to disable some warnings.Use <br/>Use to ignore all warnings in a file.'"></span>!</h1>
        </div>
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
</style>
