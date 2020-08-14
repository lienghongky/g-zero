<template>
<div class="h-full w-full bg-gray-700 z-100">
    <!-- Header -->
    <transition enter-active-class="animate__animated animate__rotateInDownLeft" leave-active-class="animate__animated animate__rotateInUpLeft">
        <div class="z-100 fixed w-screen bg-transparent sm:absolute sm:block sm:w-auto sm:h-screen sm:inset-y-0 left-0  sm:bg-white sm:bg-opacity-0 sm:shadow-lg">
            <div class="flex flex-row sm:flex-col justify-between h-full">
                <div class="p-1 sm:px-2 sm:pt-2 flex flex-col justify-center">
                    <!-- mobile only -->
                    <router-link :to="{name:'Home'}" class="sm:hidden flex items-center py-4">
                        <ic class="text-gray-800 px-2" :icon="'logo'" />
                        <div class="flex-1 flex justify-center ">
                            <h4 class="text-sm text-black m-0 items-baseline align-baseline">G-ZERO</h4>
                        </div>
                    </router-link>
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
    <div class="h-full w-full">
        <transition name="animate">
            <router-view ></router-view>
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
.animate-enter-active{
  animation: in 1s ease-in-out;
  animation-delay: 1s;
}
.animate-leave-active {
    animation: out 1s ease-in-out;

    
 }
@keyframes in {
    from{
        transform: translateX(45px);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
}
 @keyframes out {
     from{
        transform: translateX(0);
    }
    to{
        transform: translateX(45px);
        background: black;
        opacity: 0;
        
    }
 }
</style>
