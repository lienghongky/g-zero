const state = {
        botData:{messages:'Click me to let me help! I can show you around!'},
        position:{},
        terminal:{
            show: true
        },
        moveable:true
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
      }

  }
  
  const getters = {
    bot: state => state.botData,
    position: state => state.position,
    moveable: state => state.moveable,
    terminal: state => state.terminal
  }
  
  export default {
      namespaced: true,
      state,
      mutations,
      actions,
      getters
    }