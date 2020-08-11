<template>
<div v-on:mousemove="hovers" id="app" class="p-0 m-0">
    <router-view class="h-screen z-40" />
    <div @click="freeBot" ref="robot" class="fixed robot z-101">
        <transition name="terminal" class="z-102">
            <div v-if="speakingType != null" class="z-102 rounded-sm shadow-lg p-0 bg-gray-900 bg-opacity-75 text-white">
                <div class="z-102 w-full h-2 bg-gray-400 rounded-sm rounded-br-none rounded-bl-none flex justify-start items-center space-x-1">
                    <div class="bg-red-600 rounded-full w-1 h-1 ml-1" ></div>
                    <div class="bg-yellow-600 rounded-full w-1 h-1" ></div>
                    <div class="bg-green-600 rounded-full w-1 h-1" ></div>

                </div>
                <p v-if="speakingType=='text'" class="text-xs  max-w-xs min-h-10 m-0 p-3"> 
                {{speaking}}
                </p>
                <div class="p-3" v-else-if="speakingType =='html'" v-html="speaking"></div>
            </div>

        </transition>
        <lottie class="z-101"  path="robot" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="100" :width="100"  />
      
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
      ...mapGetters({
        bot: 'App/bot',
        moveable: 'App/botMoveable',
        botPosition: 'App/botPosition'
      }),
      speakingType(){
          if(this.bot.messages != null && this.bot.messages != ''){
              return 'text'
          }else if(this.bot.html != null && this.bot.html != ''){
              return 'html'
          }else{
              return null
          }
      },
      speaking(){
          if(this.bot.messages != null && this.bot.messages != ''){
              return this.bot.messages
          }else if(this.bot.html != null && this.bot.html != ''){
              return this.bot.html
          }else{
              return null
          }
      }
    },
    mounted() {
        window.scrollTo(0, 1)
        this.$refs.robot.setAttribute("style", "top: " + (this.botPosition.y || 100) +
                            "px; left: " + (this.botPosition.x) || 200 + "px;")
    },
    methods: {
        freeBot(e){
            // console.log(e)
            this.$store.dispatch('App/setBotMoveable',!this.moveable);
        },
        hovers(event) {
            
            if(this.moveable){
                var x = event.pageX + (event.pageX > screen.width / 2 ? -100 : 50)
                var y = event.pageY + (event.pageY < 100 ? 10 : -100)
                this.$store.dispatch('App/setBotPosition',{x:x,y:y})
                setTimeout(() => {
                    try {
                        
                        this.$refs.robot.setAttribute("style", "top: " + y +
                            "px; left: " + x + "px;")
                    } catch (error) {

                    }
                }, 500)
            }else{
                //console.log(this.$refs.robot.getBoundingClientRect())
                var dw = 0//this.$refs.robot.getBoundingClientRect().width/2 || 0
                // console.log('bot pose',this.botPosition)
                this.$refs.robot.setAttribute("style", "top: " + this.botPosition.y +
                            "px; left: " + this.botPosition.x + "px;")
            }
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

html,
body {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
}

a {
    text-decoration: none;
}

.robot {
    position: absolute;
    transition-duration: 1000ms;
    transition-timing-function: ease-in-out;
    animation: cursorAnim .9s infinite alternate;
    
}

@keyframes cursorAnim {
    from {
        transform: translateY(1.2)
    }

    to {
        transform: translateY(1);
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
  transform: scale(0.0);
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
       transform:rotateX(60deg) rotateY(-120deg) translateY(100px) scale(0.5)
   }
  /*50%  {top: 100px;}*/
  75%  {
       transform:rotateX(0deg) rotateY(0deg) translateY(50px) scale(1)
  } 
  100% {
     transform:rotateX(0deg) rotateY(0deg) translateY(0px)
      
      }
    
}
</style>
