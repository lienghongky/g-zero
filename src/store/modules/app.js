const state = {
tabs:[
    {
      title:'Home',
      icon:'face',
      route: {
              name:'Home',
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
  ]
}
const mutations = {

}
const actions = {
  

}

const getters = {
  tabs: state => state.tabs
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }