<template>
    <div class="flex flex-wrap sm:flex-no-wrap">
        <div class="w-full sm:w-2/5 flex items-center justify-center">
                <div class="w-full floating">
                    <div class="w-20 h-20 rounded-xl shadow-3xl bg-white p-4 mx-auto">
                        <img class="w-20 h-20" :src="getImgUrl(app.icon)" alt="">
                    </div>
                    <p class="text-center text-md text-white m-1 mt-4 font-semibold">{{app.name}}</p>
                    <hr class="w-1/2 bg-gray-800" style="height:0.01px"/>
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
        <div class="w-full sm:w-3/5 flex flex-wrap justify-center items-center p-10 m-0 relative">
            <div class="w-1/3 -ml-8 floating sm:-ml-32 flex items-center justify-center transition duration-75" v-for="(item, index) in app.images" :key="index">
                <div class="overflow-hidden transition duration-75 transform hover:-translate-y-4 hover:z-100" >
                    <img class="w-full h-full object-contain" :src="getImgUrl(item)" alt="">
                </div>
            </div>
            <div v-bot:text="'Web Admin'" class="floating absolute right-10 top-auto bottom-auto shadow-3xl rounded-xl bg-white w-64 h-40 ">
                <div class="transition duration-500 ease-in-out hover:shadow-lg  space-x-4 h-full rounded-xl bg-gray-300 overflow-hidden flex justify-center items-center border-4 border-white border-solid ">
                    <img class="object-cover w-full h-full" :src="getImgUrl(app.hightLight)" alt="">
                </div>
            </div>
            <div class="floating absolute left-4 bottom-4 shadow-3xl rounded-xl bg-white ">
                <div class="transition duration-500 ease-in-out hover:shadow-lg p-4 space-x-4 h-full rounded-xl bg-gray-300 overflow-hidden  flex justify-center items-center ">
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
</template>

<script>
    export default {
        props:{
            app:{
                type: Object,
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