<template>
<div v-on:mousemove="hovers" id="app" class="p-0 m-0">
    <router-view class="h-screen" />
    <div ref="robot" class="robot z-50">
      <transition enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutDown">
        <div v-if="speakingType != null" class="rounded-lg shadow-lg p-3">
        <p v-if="speakingType=='text'" class="text-sm text-gray-800 max-w-xs m-0 p-0"> 
          {{speaking}}
        </p>
        <div v-else-if="speakingType =='html'" class="" v-html="speaking"></div>
      </div>

      </transition>
      <lottie path="robot" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="100" :width="100"  />
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
        bot:'App/bot'
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
    },
    methods: {
        hovers(event) {
            var x = event.pageX + (event.pageX > screen.width / 2 ? -100 : 0)
            var y = event.pageY + (event.pageY < 100 ? 60 : -100)
            setTimeout(() => {
                try {
                    this.isAnimating = true
                    this.$refs.robot.setAttribute("style", "top: " + y +
                        "px; left: " + x + "px;")
                } catch (error) {

                }
            }, 500)
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
    pointer-events: none;
}

@keyframes cursorAnim {
    from {
        transform: translateY(1.2)
    }

    to {
        transform: translateY(1);
    }
}
</style>
