import Vue from 'vue'
import {devices,getDevice,isDevice} from '@/utils/devices'
export const deviceType =  {
    inserted(el,binding,vnode){
        const { value,arg } = binding
        if(arg == 'default'){
            return
        }
        if(isDevice(value) || isDevice(arg)){
            return
        }else{
            el.parentNode && el.parentNode.removeChild(el)
        }
    },
    update() {
        
    },
    unbind(){

    }
}

Vue.directive('deviceType',deviceType)

export default deviceType