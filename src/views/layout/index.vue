<template>
<div class="h-screen bg-gray-200">
    <!-- Header -->
    <transition enter-active-class="animate__animated animate__rotateInDownLeft" leave-active-class="animate__animated animate__rotateInUpLeft">
        <div class="fixed w-screen bg-transparent sm:absolute sm:block sm:w-auto sm:h-screen sm:inset-y-0 left-0  sm:bg-gray-300">
            <div class="flex flex-row sm:flex-col justify-between h-full">
                <div class="p-1 sm:px-2 sm:pt-2 flex flex-col justify-center">
                    <div class="sm:hidden flex items-center">
                        <vs-button icon color="dark">
                            <ic :icon="'ic_linkedin'" />
                        </vs-button>
                        <div class="flex-1 flex justify-center">
                            <h4 class="text-sm text-black">G-ZERO</h4>
                        </div>
                    </div>
                    <div class="hidden  sm:flex w-full justify-center" v-for="(item, index) in $router.options.routes" :key="index">
                        <router-link :to="item.path">
                            <vs-tooltip right>
                                <vs-button icon color="dark">
                                    <ic :icon="item.meta.icon" />
                                </vs-button>
                                <template #tooltip>
                                    {{item.meta.title}}
                                </template>
                            </vs-tooltip>
                        </router-link>
                    </div>
                </div>
                <div class="hidden sm:block p-2 self-center">
                    <vs-button icon color="facebook">
                        <i class='bx bxl-facebook-square'></i>
                    </vs-button>

                    <vs-button icon color="twitter">
                        <i class='bx bxl-twitter'></i>
                    </vs-button>

                    <vs-button icon color="youtube">
                        <i class='bx bxl-youtube'></i>
                    </vs-button>
                </div>
            </div>
        </div>
    </transition>
    <!-- END Header -->
    <!-- Footer -->
    <transition enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeInDown">
        <div class="sm:hidden fixed bottom-0 w-screen  inset-x-0  bg-gray-300 bg-opacity-90 flex shadow-md pt-4 pb-2">
            <div class="flex w-full justify-center" v-for="(item, index) in tabs" :key="index">
                <router-link class="text-gray-700" :to="{name:item.route.name}">
                    <vs-button transparent dark :active="active == index" @click="active = index">
                        <ic :icon="item.icon" />
                    </vs-button>
                    <p class="text-xs m-0 p-0">{{item.title}}</p>
                </router-link>
            </div>
        </div>
    </transition>
    <!-- END Footer -->
    <div class="h-full w-full">
        <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <router-view class="h-full sm:p-0"></router-view>
        </transition>
    </div>

</div>
</template>

<script>
import {
    getDevice,
    isDevice
} from '@/utils/devices'

import { mapGetters } from 'vuex'
export default {
    data: () => ({
        active: 0
    }),
    computed:{
        ...mapGetters({
            tabs:'App/tabs'
        })
    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>

</style>
