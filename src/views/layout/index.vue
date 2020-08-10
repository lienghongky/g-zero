<template>
<div class="h-screen bg-gray-200">
    <!-- Header -->
    <transition enter-active-class="animate__animated animate__rotateInDownLeft" leave-active-class="animate__animated animate__rotateInUpLeft">
        <div class="fixed w-screen bg-transparent sm:absolute sm:block sm:w-auto sm:h-screen sm:inset-y-0 left-0  sm:bg-gray-300">
            <div class="flex flex-row sm:flex-col justify-between h-full">
                <div class="p-1 sm:px-2 sm:pt-2 flex flex-col justify-center">
                    <div class="sm:hidden flex items-center py-4">
                        <ic class="text-gray-800 px-2" :icon="'logo'" />
                        <div class="flex-1 flex justify-center ">
                            <h4 class="text-sm text-black m-0 items-baseline align-baseline">G-ZERO</h4>
                        </div>
                    </div>
                    <router-link class="hidden sm:block" :to="{name:'Home-index'}">
                            <vs-tooltip right>
                                 <ic class="text-gray-900 icon-md" :icon="'logo'" />
                                <template #tooltip>
                                    Home
                                </template>
                            </vs-tooltip>
                    </router-link>
                    <div class="hidden  sm:flex w-full justify-center" v-for="(item, index) in routes" :key="index" >
                        <router-link :to="item.path">
                            <vs-tooltip right>
                                <vs-button size="mini" circle icon color="dark">
                                    <!-- <ic style="height:20px;width:20px;" :icon="item.meta.icon" /> -->
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
    <transition name="fade">
        <div class="sm:hidden fixed bottom-0 w-screen  inset-x-0  bg-gray-300 bg-opacity-90 flex shadow-md pt-2 pb-4">
            <div class="flex w-full justify-center" v-for="(item, index) in tabs" :key="index">
                <router-link class="text-gray-500" :to="{name:item.route.name}" >
                    <div :class="{'text-black transform scale-105 transition duration-150 ease-in-out':index==active}" @click="active=index">
                        <ic :icon="item.icon" />
                        <p class="text-xs m-0 p-0">{{item.title}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </transition>
    <!-- END Footer -->
    <div class="h-full w-full">
        <transition name="fade">
            <router-view class="h-full sm:p-0"></router-view>
        </transition>
    </div>

</div>
</template>

<script>
// import {
//     getDevice,
//     isDevice
// } from '@/utils/devices'

import { mapGetters } from 'vuex'
export default {
    data: () => ({
        active: 0
    }),
    computed:{
        ...mapGetters({
            tabs:'App/tabs'
        }),
        routes(){
            return this.$router.options.routes.filter(e => e.meta != undefined)
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
