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
    messages:'Im Here to help! I can show you around!'
  }
}
const mutations = {
  SET_BOT:(state,payload)=>{
    state.bot = payload
  }
}
const actions = {
  setBot({commit,dispatch},payload){
    commit('SET_BOT',payload)
  }

}

const getters = {
  tabs: state => state.tabs,
  bot: state => state.bot
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }