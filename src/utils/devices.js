import Vue from 'vue'

export const Devices = {
    ios: 'ios',
    iphone: 'iphone',
    iphoneX: 'iphoneX',
    iPhoneXR: 'iPhoneXR',
    iPhoneXSMax: 'iPhoneXSMax',
    ipod: 'ipod',
    ipad: 'ipad',
    android: 'android',
    androidPhone: 'androidPhone',
    windows: 'windows',
    mobile: 'mobile',
    dingding: 'dingding',
    wechat: 'wechat', 
    wechatMiniApp: 'wechatMiniApp'
}

export function getDevice(){
    for(var key in Vue.$device){
        if (Vue.$device[key]){
            return key
        }
    }
}
export function isDevice(d){
    if (Vue.$device[d]){
        return true
    }
    return false;
}
