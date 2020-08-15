<template>
    <div class="flex flex-wrap lg:flex-no-wrap">
        <div class="w-full lg:w-1/3 flex items-center justify-center">
                <div class="w-full floating">
                    <div class="w-20 h-20 rounded-xl shadow-3xl bg-white p-4 mx-auto">
                        <img class="w-20 h-20" :src="getImgUrl(app.icon)" alt="">
                    </div>
                    <p class="text-center text-md text-white m-1 mt-4 font-semibold">{{app.name}}</p>
                    <hr class="w-2/3 bg-gray-800" style="height:0.01px"/>
                    <div class="flex justify-center">
                        <div class="flex items-center justify-center px-4">
                            <a :href="app.url.ios" target="_blank" >
                                <ic class="icon hover:text-blue-200" icon="ic_appstore"/>
                            </a>
                        </div>
                        <div class="flex items-center justify-center px-4">
                            <a :href="app.url.android" target="_blank">
                                <ic class="icon hover:text-blue-200" icon="ic_playstore"/>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
        <div class="w-full lg:w-2/3 flex " :class="{'justify-end':align=='right','justify-start':align=='left','justify-center':align=='center'}">
            <div class="flex justify-center items-center p-10 m-0 relative">
                <div class="w-40 sm:w-64 -ml-32 floating sm:-ml-56 md:-ml-56  lg:-ml-34  flex items-center justify-center " v-for="(item, index) in app.images" :key="index">
                    <div class="overflow-hidden transition duration-75 transform hover:-translate-y-4 hover:z-100" >
                        <img class="w-full h-full object-contain" :src="getImgUrl(item)" alt="">
                    </div>
                </div>
                <div v-bot:text="'Web Admin'" class="floating absolute -right-8 sm:-right-13 top-auto bottom-auto shadow-3xl rounded-xl bg-white w-32 h-24  sm:w-64 sm:h-40 transition duration-75 transform hover:-translate-x-4">
                    <div class="transition duration-500 ease-in-out hover:shadow-lg  space-x-4 h-full rounded-xl bg-gray-300 overflow-hidden flex justify-center items-center border-4 border-white border-solid ">
                        <img class="object-cover w-full h-full" :src="getImgUrl(app.hightLight)" alt="">
                    </div>
                </div>
                <div class="floating absolute left-4 bottom-4 shadow-3xl rounded-xl bg-white ">
                    <div class="transition duration-500 ease-in-out hover:shadow-lg p-2 sm:p-4 space-x-4 h-full rounded-xl bg-gray-300 overflow-hidden  flex justify-center items-center ">
                        <div v-bot:text="dev.name" v-for="(dev, index) in app.teams" :key="index">
                            <vs-avatar badge badge-color="success" >
                                <img :src="getImgUrl(dev.profile)" alt="">
                                <template #badge>
                                    {{dev.role}}
                                </template>
                            </vs-avatar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            app:{
                type: Object,
            },
            align:{
                type: String,
                default: 'center'
            }
        },
        data(){
            return {
               
            }
        },
        methods:{
            getImgUrl(name) {
                try {
                    var image = require( `@/assets/${name}`)
                    return image
                }catch (e){
                    
                    return ''
                }
            }
        }
    }
</script>

<style scoped>

</style>