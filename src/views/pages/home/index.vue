<template>
<div class="flex flex-col justify-center items-center bg-gray-700 page">
    <div class="flex flex-wrap-reverse justify-center pt-20">
       <div  class="w-full sm:w-1/2 pb-4">
            <h2 v-bot:text.init="'welcom to G-zero'" class="text-6xl text-white font-bold font-gentona m-0 mt-20">WELCOME</h2>
            <h1 class="w-1/2 mx-auto text-black text-5xl m-0 self-center align-middle flex justify-center items-center bg-white rounded-full"><span class="text-red-700 text-6xl">G</span>-zero</h1>
       </div>
       <div v-bot:text="'CITY Plan'" class="w-full sm:w-1/2">
            <lottie  path="city" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1"/>
       </div>
    </div>
    <transition-group name="flaot"  tag="div" class="scroll-none w-full flex-1 flex flex-wrap items-center self-center justify-center sm:justify-start">
           
                    <div class="transition w-32 h-32 sm:w-32 sm:h-48 p-1 py-2 sm:p-2 float" v-for="(item, index) in hightlights" :key="item.title">
                        <div class="shadow-xl rounded-xl bg-white w-full h-full">
                            <div :class="item.background" class="transition duration-500 ease-in-out hover:shadow-lg border-solid border-6 sm:border-10  border-white h-haft rounded-xl overflow-hidden bg-gray-200 flex justify-center items-center ">
                                <ic class="icon-md sm:icon-lg" :class="item.color" :icon="item.icon"/>
                            </div>
                            <p class="text-sm m-1 text-gray-700">{{item.title}}</p>
                            <div class="flex justify-center items-center mb-auto">
                                <vs-button class="w-2/3 self-center">
                                Visit
                            </vs-button>
                            </div>
                        </div>
                    </div>
                
    </transition-group>
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
            this.$store.dispatch('App/setBot', {
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
.float{
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
    transition: all;
    animation: floating 8s infinite  forwards;
    transition-delay: 0s;
}
.float:nth-child(1)  {
    animation-delay: 0.0s;
  }
.float:nth-child(2)  {
    animation-delay: 1.0s;
  }
.float:nth-child(3)  {
    animation-delay: 2.15s;
  }
.float:nth-child(4)  {
    animation-delay: 3.2s;
  }
.float:nth-child(5)  {
    animation-delay: 4.25s;
  }
@keyframes floating {
	0% {
		
		transform: translatey(0px);
	}
	50% {
		
		transform: translatey(-10px);
	}
	100% {
		
		transform: translatey(0px);
	}
}
</style>
