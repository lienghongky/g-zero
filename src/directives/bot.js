import Vue from 'vue'
export const bot =  {
    inserted(el,binding,vnode){
        const { value,arg,modifiers } = binding
        if(!el){return}
        if(modifiers.init){
            //console.log(el.getBoundingClientRect())
            var x = el.getBoundingClientRect().right;
            var y = el.getBoundingClientRect().bottom || 200;
            console.log(x,y)
            vnode.context.$store.dispatch('Bot/setBotPosition',{x:x,y:y})
        }
    },
    update() {
        
    },
    bind(el,binding,vnode){
        if(!el){return}
        el.addEventListener('mouseenter', function() {
            const { value,arg,modifiers } = binding
            // console.log(vnode.context.$store.getters['Bot/terminal'].show)
           if(!vnode.context.$store.getters['Bot/terminal'].show && value != null){
                vnode.context.$store.dispatch('Bot/setBotTerminalShow',true)
           }
        //    console.log('ender')
            if(arg == 'text'){
                vnode.context.$store.dispatch('Bot/setBot',{messages:value})
            }else if(arg == 'html'){
                vnode.context.$store.dispatch('Bot/setBot',{html:value})
            }else{
                vnode.context.$store.dispatch('Bot/setBot',value)
            }
           
           
           
        });
        el.addEventListener('mouseleave', function() {
            // console.log('leave')
            // setTimeout(() => {
                // vnode.context.$store.dispatch('Bot/setBotTerminalShow',false)
                vnode.context.$store.dispatch('Bot/setBot',{messages:null, html:null})
            // }, 0);
        });
    },
    unbind(el,binding,vnode){
        if(!el){return}
        el.removeEventListener('mouseenter',()=>{});
        el.removeEventListener('mouseleave',()=>{});
    }
}

Vue.directive('bot',bot)

export default bot