const state = {
        botData:{messages:'Click me to let me help! I can show you around!'},
        position:{x:0,y:0},
        element:{},
        terminal:{
            show: true
        },
        moveable:true,
        avatar:'botv2',
        hidden:true
  }
  const mutations = {
    SET_BOT:(state,payload)=>{
      state.botData = payload
      if(state.botData.messages != null && state.botData.messages != ''){
        //   state.terminal.show = true
      }else if (state.botData.html != null && state.botData.html != ''){
        //   state.terminal.show = true
      }else{
        // state.terminal.show = false
      }
    },
    SET_BOT_POSITION:(state,payload)=>{
      state.position = payload
    },
    SET_BOT_MOVEABLE:(state,payload)=>{
      state.moveable = payload
    },
    SET_BOT_TERMINAL_SHOW:(state,payload)=>{
      state.terminal.show = payload
    },
    SET_BOT_ELEMENT:(state,payload)=>{
      state.element = payload
      state.position = payload.botPosition
    },
    SET_BOT_AVATAR:(state,payload)=>{
      state.avatar = payload
      
    },
    SET_BOT_HIDDEN:(state,payload)=>{
      state.hidden = payload
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
    },
    setBotTerminalShow({commit,dispatch},payload){
        commit('SET_BOT_TERMINAL_SHOW',payload)
    },
    setBotElement({commit,dispatch},payload){
        commit('SET_BOT_ELEMENT',payload)
    },
    setBotAvatar({commit,dispatch},payload){
        commit('SET_BOT_AVATAR',payload)
    },
    setBotHidden({commit,dispatch},payload){
        commit('SET_BOT_HIDDEN',payload)
    }

  }
  
  const getters = {
    bot: state => state.botData,
    position: state => state.position,
    moveable: state => state.moveable,
    terminal: state => state.terminal,
    avatar: state => state.avatar,
    hidden: state => state.hidden
  }
  
  export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters
    }