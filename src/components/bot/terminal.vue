<template>
    <transition name="">
        <div :style="`left:${position.x}px;top:${position.y}px;`" class="terminal-card  z-102 rounded-sm shadow-lg p-0 bg-gray-900 bg-opacity-75 text-green-500 overflow-y-auto">
                <div class="absolute inset-0 flex items-center justify-center">
                    <ic class="text-gray-300 text-opacity-25 icon-md" icon="logo"/>
                </div>
                <div class="z-102 w-full h-2 bg-gray-400 rounded-sm rounded-br-none rounded-bl-none flex justify-start items-center space-x-1">
                    <div class="bg-red-600 rounded-full w-1 h-1 ml-1" ></div>
                    <div class="bg-yellow-600 rounded-full w-1 h-1" ></div>
                    <div class="bg-green-600 rounded-full w-1 h-1" ></div>

                </div>
                <p v-if="contentType=='text'" class="text text-left max-w-xs min-h-10 m-0 p-3"> 
                {{content}}
                </p>
                <div class="p-3 text" v-else-if="contentType =='html'" v-html="content"></div>
        </div>
    </transition>
</template>

<script>
    export default {
        props:{
            position:{
                type: Object,
                default: { x:0, y:0 }
            },
            contentType:{
                type: String,
                default: null
            },
            content:{
                type: String,
                default: null
            }
        },
        data(){
            return{
               
            }
        },
        computed:{
        }

    }
</script>

<style scoped>
.text {
    text-align: left;
    font-size: 0.8rem;
}
.text p {
    margin: 1px;
}
.terminal-card {
    position: absolute;
    transform: translateY(-100%) translateX(-30%);
    left: 50%;
    min-width: 80px;
    max-width: 300px;
    
    min-height: 60px;
    max-height: 200px;
    transition-duration: 0.8s;
    transition-timing-function: ease-in-out; 
    animation: cursorAnim 5s infinite alternate;
}
@keyframes cursorAnim {
    from {
        transform: translateY(-100%) translateX(0%) rotate3d(1,0,1, -0.5deg);
    }

    to {
        transform: translateY(-100%) translateX(-20%) rotate3d(1,0,1, 0.5deg);
    }
}


.terminal-enter-active {
    transition-duration: 100ms;
    transition-timing-function: ease-in-out;
    transition: all;
    animation: openTerminal 1s forwards;
}
.terminal-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  animation: closeTerminal 0.5s forwards;
}
/* .terminal-enter, .terminal-leave-to
{ 
  transform: translateX(10px);
  opacity: 0;
} */

@keyframes openTerminal {
  0%   {
     transform:rotateX(60deg) rotateY(-120deg) translateY(100px) scale(0.1)
      
  }
   25%  {
       transform:rotateX(60deg) rotateY(-120deg) translateY(100px) scale(0.1)
   }
  /*50%  {top: 100px;}*/
  75%  {
       transform:rotateX(0deg) rotateY(0deg) translateY(50px) scale(0.3)
  } 
  100% {
     transform:rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)
      
      }
    
}
@keyframes closeTerminal {
  0%   {
    
  }
   25%  {
     
   }
  50%  {
      transform: scaleX(0.0001);
  }
  75%  {
       transform: scaleY(0.0001);
  } 
  100% {
     transform: scale(0.0);
      
      }
    
}
</style>