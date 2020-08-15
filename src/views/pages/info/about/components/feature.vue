<template>
    <div>
     <transition-group name="flaot"  tag="div" class="scroll-none  flex-1 flex flex-wrap items-center self-center justify-center sm:justify-start">
                    <div :class="{'transition duration-75 transform translate-y-10': index = 0}" class="transition w-32 h-32 sm:w-32 sm:h-48 p-1 py-2 sm:p-2 float" v-for="(item, index) in hightlights" :key="item.title">
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
import { mapGetters } from 'vuex'
    export default {
        computed:{
             ...mapGetters({
            hightlights:'App/hightlights'
        }),
        }
    }
</script>

<style scoped>

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