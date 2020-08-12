<template>
<div id="app" class="p-0 m-0">
    <router-view class="z-40" />
    <bot @click="freeBot" @onBotMove="onBotMove" @onEnterOffsetArea="onEnterOffsetArea"/>
    <terminal v-if="terminal.show" :position="position" :contentType="contentType" :content="content"/>
    <!-- <div class="robot-terminal" ref="terminal">
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
        
      
    </div> -->
</div>
</template>

<script>
import { isDevice } from '@/utils/devices'
import { mapGetters } from 'vuex'
import Bot from '@/components/bot'
import Terminal from '@/components/bot/terminal'
export default {
    components: {
        Bot,
        Terminal
    },
    data() {
        return {
            position:{}
        }
    },
    computed:{
      ...mapGetters({
        bot: 'Bot/bot',
        moveable: 'Bot/moveable',
        botPosition: 'Bot/position',
        terminal:'Bot/terminal'
      }),
      contentType(){
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
      content(){
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
    },
    methods: {
        onEnterOffsetArea(areas){

        },
        onBotMove(param){
            this.position = param.botPosition
        },
        freeBot(e){
            console.log('free')
            this.$store.dispatch('Bot/setBotMoveable',!this.moveable);
        },
        
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



</style>
