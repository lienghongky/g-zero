<template>
<div class="sublayout w-full h-full">
    <!-- Footer -->
    <!-- <transition-group enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
        <div class="z-100 fixed bottom-10 left-10" :key="'1'">
            <tabs/>
        </div>
        <div class="z-100 sm:hidden fixed bottom-0 w-screen  inset-x-0  bg-gray-600  flex shadow-md pt-2 pb-4 bg-opacity-90" :key="'2'">
            <div class="flex w-full justify-center" v-for="(item, index) in tabs" :key="index">
                <router-link class="text-gray-500" :to="{name:item.route.name}" >
                    <div :class="{'text-gray-900 transform scale-105 transition duration-150 ease-in-out':index==active}" @click="active=index">
                        <ic :class="{'text-gray-900':index==active}" class="text-gray-700" :icon="item.icon" />
                        <p class="text-xs m-0 p-0 text-gray-700">{{item.title}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    <!-- </transition-group> -->
    <!-- END Footer -->
    <div class="h-full w-full">
        <transition name="animate">
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
.animate-enter-active{
  animation: in .7s ease-in-out;
  animation-delay: .7s;
}
.animate-leave-active {
    animation: out .7s ease-in-out;

    
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
/* .animate-enter{
    animation: in2 2s ease-in-out;
    animation-delay: 2s;
    background: black;
}
.animate-leave-to{
    animation: out2 2s ease-in-out;
    animation-delay: 2s;
    background: white;
} */
</style>
