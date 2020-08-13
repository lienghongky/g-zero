<template>
<div id="app" class="p-0 m-0">
    <router-view class="z-40 overflow-hidden" />
    <bot class="z-200" @mousedown="freeBot" @onBotMove="onBotMove" @onEnterOffsetArea="onEnterOffsetArea"/>
    <terminal v-if="terminal.show" :position="position" :contentType="contentType" :content="content"/>
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
