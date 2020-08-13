<template>
<div class="h-screen bg-gray-200 z-90 relative">
    <!-- Footer -->
    <transition-group name="fade" >
        <div class="hidden sm:block fixed bottom-10 left-10 " :key="'1'">
            <tabs/>
        </div>
        <div class="sm:hidden fixed bottom-0 w-screen  inset-x-0  bg-gray-600  flex shadow-md pt-2 pb-4 bg-opacity-90" :key="'2'">
            <div class="flex w-full justify-center" v-for="(item, index) in tabs" :key="index">
                <router-link class="text-gray-500" :to="{name:item.route.name}" >
                    <div :class="{'text-black transform scale-105 transition duration-150 ease-in-out':index==active}" @click="active=index">
                        <ic :icon="item.icon" />
                        <p class="text-xs m-0 p-0">{{item.title}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </transition-group>
    <!-- END Footer -->
    <div class="h-full w-auto">
        <transition name="fade">
            <router-view class="h-full overflow-hidden"></router-view>
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
