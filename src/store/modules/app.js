const state = {
  navStyle:{
    styles:null,
    classes:null
  },
  subTabs: [{
    icon:'ic_facebook_solid',
    color:'text-white',
    background:'bg-blue-600',
    title:'Facebook',
    bot:{
      html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Hongky</span></p>'
    }
  },
  {
    icon:'ic_instagram_solid',
    color:'text-white',
    background:'bg-instagram',
    title:'Instagram',
    bot:{
      html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">@hongkydev</span></p>'
    }
  },
  {
    icon:'ic_linkedin_solid',
    color:'text-white',
    background:'bg-blue-300',
    title:'Linkedin',
    bot:{
      html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Lieng Hongky</span></p>'
    }
  },
  {
    icon:'ic_telegram_solid',
    color:'text-white',
    background:'bg-telegram',
    title:'Telegram',
    bot:{
      html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">t.me/hongky.dev</span></p>'
    }
  },
  {
    icon:'ic_twitter_solid',
    color:'text-white',
    background:'bg-twitter',
    title:'Tweeter',
    bot:{
      html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Hongky Lieng</span></p>'
    }
  }],
  hightlights:[
    {
      icon:'ic_facebook',
      color:'text-white',
      background:'bg-facebook',
      title:'Facebook',
      url:'',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Hongky</span></p>'
      }
    },
    {
      icon:'ic_instagram',
      color:'text-white',
      background:'bg-instagram',
      title:'Instagram',
      url:'',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">@hongkydev</span></p>'
      }
    },
    {
      icon:'ic_linkedin',
      color:'text-white',
      background:'bg-linkedin',
      title:'Linkedin',
      url:'',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Lieng Hongky</span></p>'
      }
    },
    {
      icon:'ic_telegram',
      color:'text-white',
      background:'bg-telegram',
      title:'Telegram',
      url:'',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">t.me/hongky.dev</span></p>'
      }
    },
    {
      icon:'ic_twitter',
      color:'text-white',
      background:'bg-twitter',
      title:'Tweeter',
      url:'',
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Hongky Lieng</span></p>'
      }
    }
  ],
  tabs:[
    {
      title:'Home',
      icon:'ic_home',
      route: {
              name:'Home-Index',
              path:'/'
              },
      bot:{
        html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Hongky</span></p>'
      }
              
    },
    {
      title:'Service',
      icon:'ic_coding',
      route: {
        name:'Service',
        path:'/service'
        }
    },
    {
      title:'Product',
      icon:'ic_chip',
      route: {
        name:'Product',
        path:'/product'
        }
    },
    {
      title:'More',
      icon:'ic_more',
      route: {
        name:'More',
        path:'/more'
        },
      
    },
    {
      title:'Me',
      icon:'ic_me',
      route: {
        name:'About-Me',
        path:'/aboutme'
        },
      bot:{

      }
      
    }
  ]
}
const mutations = {
  SET_NAV:(state,payload)=>{
    state.nav = payload
  }
}
const actions = {
  setNav({commit,dispatch},payload){
    commit('SET_NAV',payload)
  },

}

const getters = {
  hightlights: state => state.hightlights,
  tabs: state => state.tabs,
  subTabs: state => state.subTabs,
  nav: state => state.nav,
  
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }