const state = {
  hightlights:[
    {
      icon:'ic_facebook',
      color:'text-white',
      background:'bg-blue-600',
      title:'Facebook',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Hongky</span></p>'
      }
    },
    {
      icon:'ic_instagram',
      color:'text-white',
      background:'instagram',
      title:'Instagram',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">@hongkydev</span></p>'
      }
    },
    {
      icon:'ic_linkedin',
      color:'text-blue-500',
      background:'bg-blue-300',
      title:'Linkedin',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Lieng Hongky</span></p>'
      }
    },
    {
      icon:'ic_telegram',
      color:'text-blue-500',
      background:'bg-blue-300',
      title:'Telegram',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">t.me/hongky.dev</span></p>'
      }
    },
    {
      icon:'ic_twitter',
      color:'text-blue-500',
      background:'bg-blue-300',
      title:'Tweeter',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Hongky Lieng</span></p>'
      }
    }
  ],
  tabs:[
    {
      title:'Home',
      icon:'face',
      route: {
              name:'Home-Index',
              path:'/'
              }
    },
    {
      title:'Service',
      icon:'integration_instructions',
      route: {
        name:'Service',
        path:'/service'
        }
    },
    {
      title:'Product',
      icon:'shopping_bag',
      route: {
        name:'Product',
        path:'/product'
        }
    },
    {
      title:'More',
      icon:'vertical_split',
      route: {
        name:'More',
        path:'/more'
        }
    }
  ],
  bot:{
    botData:{messages:'Click me to let me help! I can show you around!'},
    position:{},
    moveable:false
  }
}
const mutations = {
  SET_BOT:(state,payload)=>{
    state.bot.botData = payload
  },
  SET_BOT_POSITION:(state,payload)=>{
    state.bot.position = payload
  },
  SET_BOT_MOVEABLE:(state,payload)=>{
    state.bot.moveable = payload
  }
}
const actions = {
  setBot({commit,dispatch},payload){
    commit('SET_BOT',payload)
  },
  setBotPosition({commit,dispatch},payload){
    commit('SET_BOT_POSITION',payload)
  },
  setBotMoveable({commit,dispatch},payload){
    commit('SET_BOT_MOVEABLE',payload)
  }

}

const getters = {
  hightlights: state => state.hightlights,
  tabs: state => state.tabs,
  bot: state => state.bot.botData,
  botPosition: state => state.bot.position,
  botMoveable: state => state.bot.moveable
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }