const state = {
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
    botData:{messages:'Im Here to help! I can show you around!'},
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