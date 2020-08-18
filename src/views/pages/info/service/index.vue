<template>
     <div class="page bg-teal-600 overflow-y-scroll content-between">
           <div class="flex flex-wrap sm:flex-no-wrap justify-center items-center py-10">
                <div class="w-full sm:w-1/2  sm:h-full sm:pl-20 pt-20 sm:pt-0">
                    <h1 class="text-4xl text-gray-100">Services</h1>
                    <h1 class="text-xl font-thin text-gray-400">Are you looking for App/Web/System development services? <span v-bot:text.init="'CITY Plan You may use special comments to disable some warnings.Use <br/>Use to ignore all warnings in a file.'"></span></h1>
                </div>
                <div class="w-full sm:w-1/2 flex flex-col justify-center items-start py-20 space-y-4">
                    <lottie path="app" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="300" :width="300" />
                </div>
            </div>
            <h1 class="text-gray-400 text-lg">Our Previous Projects</h1>
            <div  class="p-8 pl-16 py-32 " v-for="(item, index) in apps" :key="index">
                <app-demo :app="item" :class="{'flex-row-reverse':(index == 0 || index ==2 || index ==4)}"/>
            </div>
    </div>
</template>

<script>
    import AppDemo from '@/components/appDemo'
    export default {
        components:{
            AppDemo
        },
        data(){
            return {
                apps: [
                        {
                        name: 'EasyGo Cambodia',
                        url: {
                            ios:'https://google.com',
                            android:'https://google.com'
                        },
                        icon: 'images/easygo/icon.png',
                        hightLight: 'images/easygo/admin.png',
                        images: [
                                'images/easygo/p1.png',
                                'images/easygo/p2.png',
                                'images/easygo/p3.png'],
                        teams:[
                            {
                                name:'Pisal',
                                profile:'images/pisal.jpg',
                                role: 'android'
                            },
                            {
                                name:'Hongky',
                                profile:'images/profile.png',
                                role: 'ios'
                            },
                            {
                                name:'Long Heng',
                                profile:'images/longheng.jpg',
                                role: 'web'
                            }
                        ]
                        },
                        {
                        name: 'EasyGo Driver Cambodia',
                        url: {
                            ios:'https://google.com',
                            android:'https://google.com'
                        },
                        icon: 'images/easygod/icon.png',
                        hightLight: 'images/easygo/admin.png',
                        images: [
                                'images/easygod/d1.png',
                                'images/easygod/d2.png',
                                'images/easygod/d3.png',
                                'images/easygod/d4.png'
                                ],
                        teams:[
                            {
                                name:'Pisal',
                                profile:'images/pisal.jpg',
                                role: 'android'
                            },
                            {
                                name:'Hongky',
                                profile:'images/profile.png',
                                role: 'ios'
                            },
                            {
                                name:'Long Heng',
                                profile:'images/longheng.jpg',
                                role: 'web'
                            }
                        ]
                        },
                        {
                        name: '365day Market',
                        url: {
                            ios:'https://google.com',
                            android:'https://google.com'
                        },
                        icon: 'images/365day/icon.png',
                        hightLight: 'images/365day/admin.png',
                        images: [
                                'images/365day/s1.png',
                                'images/365day/s2.png',
                                'images/365day/s3.png',
                                ],
                        teams:[
                            {
                                name:'Hongky',
                                profile:'images/profile.png',
                                role: 'ios'
                            },
                            {
                                name:'Pisal',
                                profile:'images/pisal.jpg',
                                role: 'android'
                            },
                            
                        ]
                        },
                        {
                        name: 'PickUp App',
                        url: {
                            ios:'https://google.com',
                            android:'https://google.com'
                        },
                        icon: 'images/pickup/icon.png',
                        hightLight: 'images/pickup/admin.png',
                        images: [
                                'images/pickup/p1.png',
                                'images/pickup/p3.png',
                                'images/pickup/p4.png',
                                'images/pickup/p5.png',
                                ],
                        teams:[
                            {
                                name:'Hongky',
                                profile:'images/profile.png',
                                role: 'ios'
                            },
                            {
                                name:'Pisal',
                                profile:'images/pisal.jpg',
                                role: 'android'
                            },
                            
                        ]
                        },
                        {
                        name: 'PickUp Driver',
                        url: {
                            ios:'https://google.com',
                            android:'https://google.com'
                        },
                        icon: 'images/pickupd/icon.png',
                        hightLight: 'images/pickupd/admin.png',
                        images: [
                                'images/pickupd/d1.png',
                                'images/pickupd/d2.png',
                                'images/pickupd/d3.png',
                                'images/pickupd/d4.png',
                                ],
                        teams:[
                            {
                                name:'Hongky',
                                profile:'images/profile.png',
                                role: 'ios'
                            },
                            {
                                name:'Pisal',
                                profile:'images/pisal.jpg',
                                role: 'android'
                            },
                            
                        ]
                        },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>