import Vue from 'vue'
export const bot =  {
    inserted(el,binding,vnode){
        const { value,arg,modifiers } = binding
        if(!el){return}
        if(modifiers.init){
            console.log(el.getBoundingClientRect())
            var x = el.getBoundingClientRect().right || 200;
            var y = el.getBoundingClientRect().top || 200;
            vnode.context.$store.dispatch('App/setBotPosition',{x:x,y:y})
        }
    },
    update() {
        
    },
    bind(el,binding,vnode){
        if(!el){return}
        el.addEventListener('mouseenter', function() {
            const { value,arg,modifiers } = binding
            // console.log(vnode.context.$store.getters)
           if( true){
            if(arg == 'text'){
                vnode.context.$store.dispatch('App/setBot',{messages:value})
               }else if(arg == 'html'){
                vnode.context.$store.dispatch('App/setBot',{html:value})
               }else{
                vnode.context.$store.dispatch('App/setBot',value)
               }
           }
           
           
        });
        el.addEventListener('mouseleave', function() {
            setTimeout(() => {
                vnode.context.$store.dispatch('App/setBot',{messages:null, html:null})
            }, 0);
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