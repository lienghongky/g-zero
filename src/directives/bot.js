import Vue from 'vue'
export const bot =  {
    inserted(el,binding,vnode){
       
    },
    update() {
        
    },
    bind(el,binding,vnode){
        const { value,arg,modifiers } = binding
        el.addEventListener('mouseenter', function() {
           if(arg == 'messages'){
            vnode.context.$store.dispatch('App/setBot',{messages:value})
           }else if(arg == 'html'){
            vnode.context.$store.dispatch('App/setBot',{html:value})
           }else{
            vnode.context.$store.dispatch('App/setBot',value)
           }
           
        });
        el.addEventListener('mouseleave', function() {
            vnode.context.$store.dispatch('App/setBot',{})
        });
    },
    unbind(){
        el.removeEventListener('mouseenter');
        el.removeEventListener('mouseleave');
    }
}

Vue.directive('bot',bot)

export default bot