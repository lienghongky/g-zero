<template>
<div class="h-screen bg-gray-200 z-100 relative">
    <!-- Header -->
    <transition enter-active-class="animate__animated animate__rotateInDownLeft" leave-active-class="animate__animated animate__rotateInUpLeft">
        <div class="z-100 fixed w-screen bg-transparent sm:absolute sm:block sm:w-auto sm:h-screen sm:inset-y-0 left-0  sm:bg-white sm:bg-opacity-0 sm:shadow-lg">
            <div class="flex flex-row sm:flex-col justify-between h-full">
                <div class="p-1 sm:px-2 sm:pt-2 flex flex-col justify-center">
                    <!-- mobile only -->
                    <div class="sm:hidden flex items-center py-4">
                        <ic class="text-gray-800 px-2" :icon="'logo'" />
                        <div class="flex-1 flex justify-center ">
                            <h4 class="text-sm text-black m-0 items-baseline align-baseline">G-ZERO</h4>
                        </div>
                    </div>
                    <!-- END mobile only -->
                    <router-link class="hidden sm:block" :to="{name:'Home'}">
                            <ic class="text-gray-900 icon-md" :icon="'logo'" />
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
                <div class="hidden sm:block p-2 self-center ">
                    <router-link v-bot:html="item.bot.html" class="block my-2 text-black" :to="'/'" v-for="(item, index) in subTabs" :key="index">
                          <ic class="text-gray-800 hover:text-gray-200 icon-sm py-2 " :icon="item.icon"/>
                    </router-link>
                </div>
            </div>
        </div>
    </transition>
    <!-- END Header -->
    <div class="h-full w-auto">
        <transition name="fade">
            <router-view class="h-full overflow-hidden z-90"></router-view>
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
import Tabs from './tabs';
export default {
    components:{
        Tabs
    },
    data: () => ({
        active: 0
    }),
    computed:{
        ...mapGetters({
            tabs:'App/tabs',
            subTabs:'App/subTabs'
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
