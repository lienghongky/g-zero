const state = {
    profiles:[
       
        {
            name:'Lieng Hongky',
            skill:'Mobile App Developer',
            picture:'images/profilePng.png',
            networks:[
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
            meta:{}
        },
        {
            name:'Lieng Hongky',
            skill:'Mobile App Developer',
            picture:'images/profile_socail.jpg',
            networks:[
                {
                  icon:'ic_github',
                  color:'text-white',
                  background:'bg-instagram',
                  title:'Github',
                  url:'',
                  bot:{
                    html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">lienghongky</span></p>'
                  }
                },
                {
                    icon:'ic_stack_overflow',
                    color:'text-white',
                    background:'bg-telegram',
                    title:'Stackoverflow',
                    url:'',
                    bot:{
                      html:'<p class="m-0 text-sm text-white">Profile:<span class="text-sm text-white font-bold">Lieng Hongky</span></p>'
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
            meta:{}
        },
        {
            name:'Lieng Hongky',
            skill:'Product Designer',
            picture:'images/profile_designer.png',
            networks:[
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
            meta:{}
        }
    ]
  }
  const mutations = {
    // SET_NAV:(state,payload)=>{
    //   state.nav = payload
    // }
  }
  const actions = {
    // setNav({commit,dispatch},payload){
    //   commit('SET_NAV',payload)
    // },
  
  }
  
  const getters = {
    profiles: state => state.profiles
  }
  
  export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters
    }