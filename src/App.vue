<template>
<div v-on:mousemove="hovers" id="app" class="p-0 m-0">
    <router-view class="h-screen z-40" />
    <div class="robot-terminal" ref="terminal">
        <transition name="terminal" class="z-102">
            <div v-if="terminal.show" class="terminal-card min-h-64 z-102 rounded-sm shadow-lg p-0 bg-gray-900 bg-opacity-75 text-white">
                <div class="z-102 w-full h-2 bg-gray-400 rounded-sm rounded-br-none rounded-bl-none flex justify-start items-center space-x-1">
                    <div class="bg-red-600 rounded-full w-1 h-1 ml-1" ></div>
                    <div class="bg-yellow-600 rounded-full w-1 h-1" ></div>
                    <div class="bg-green-600 rounded-full w-1 h-1" ></div>

                </div>
                <p v-if="speakingType=='text'" class="text-xs text-left max-w-xs min-h-10 m-0 p-3"> 
                {{speaking}}
                </p>
                <div class="p-3" v-else-if="speakingType =='html'" v-html="speaking"></div>
            </div>

        </transition>
    </div>
    <div  ref="robot" class="robot z-101">
        <div @click="freeBot" class="z-101 fixed">
            <lottie  path="robot" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="100" :width="100"  />
        </div>
        
      
    </div>
</div>
</template>

<script>
import { isDevice } from '@/utils/devices'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:{
      ...mapGetters({
        bot: 'Bot/bot',
        moveable: 'Bot/moveable',
        botPosition: 'Bot/position',
        terminal:'Bot/terminal'
      }),
      speakingType(){
          if(this.bot.messages != null && this.bot.messages != ''){
            //   this.$store.dispatch('Bot/setBotTerminalShow',true)
              return 'text'
          }else if(this.bot.html != null && this.bot.html != ''){
            //   this.$store.dispatch('Bot/setBotTerminalShow',true)
              return 'html'
          }else{
            //   this.$store.dispatch('Bot/setBotTerminalShow',false)
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
        this.move((this.botPosition.x) || 200,(this.botPosition.y || 100))
    },
    methods: {
        freeBot(e){
            this.$store.dispatch('Bot/setBotMoveable',!this.moveable);
        },
        hovers(event) {
            var viewPortW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            var dx = isDevice('mobile') ? 20 : 50
            var dy = this.terminal.show ? -100 : -100
            if(this.moveable){
                var x = event.pageX + (event.pageX > viewPortW / 2 ? -100 : dx)
                var y = event.pageY + (event.pageY < (this.terminal.show ? 120 : 60) ? (this.terminal.show ? 100:10) : dy) 
                this.$store.dispatch('Bot/setBotPosition',{x:x,y:y})
                setTimeout(() => {
                         this.move(x,y)
                }, 500)
            }else{
                this.move(this.botPosition.x, this.botPosition.y )
            }
            

        },
        move(x,y){
                try {
                    var robotRect = this.$refs.robot.getBoundingClientRect()
                    this.$refs.robot.setAttribute("style", "top: " + y+
                            "px; left: " + x + "px;")

                    var dw = this.$refs.terminal.getBoundingClientRect().width/2
                    var viewPortW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
                    var pointing = `left:${x+50};px`

                    var defualtPointing = (x > 100 && x < viewPortW - 300) ? `left:${x+50}px;` :(x > viewPortW - 300 ? `transiton 5s;left:${(x+50)-(300)}px;`:`left:${x+50}px;`)
                    var mobilePointing = (x > viewPortW*0.2 && x < viewPortW - viewPortW*0.5) ? `left:${viewPortW*0.3}px;` :(x > viewPortW - viewPortW*0.5 ? `transiton 5s;left:${viewPortW*0.2}px;`:`left:${x+50}px;`)
                    pointing = isDevice('mobile') ? mobilePointing :defualtPointing
                    
                    var defualtTranslateX = (x > 100 && x < viewPortW - 300) ? "-50%" :(x > viewPortW - 300 ? '-10%':'0%' )
                    var mobileTranslateX = (x > viewPortW*0.2 && x < viewPortW - viewPortW*0.5) ? "-30%"  :(x > viewPortW - viewPortW*0.5 ? 0:"-30%" )
                    var translateX = isDevice('mobile') ? mobileTranslateX : defualtTranslateX

                    //console.log(this.$refs.terminal.getBoundingClientRect(),'dw',dw)
                    // console.log('translate ',translateX)
                    // console.log('x ', pointing)
                    // console.log('sc', viewPortW)
                    this.$refs.terminal.setAttribute("style", "top: " +y+
                            "px; "+pointing+"transform: translateX("+translateX+");")
                } catch (error) {

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
.robot-terminal{
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
.terminal-card {
    margin-top: -120px;
    height: 100px;
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
