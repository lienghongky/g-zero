<template>
<div>
    <div class="w-full">
        <div class="ml-auto mr-auto w-64 h-80 floating shadow-xl rounded-xl bg-white">
            <div class="transition duration-500 ease-in-out hover:shadow-lg border-solid border-6  sm:border-10  border-white h-2/3 rounded-xl overflow-hidden bg-gray-300 flex justify-center items-center ">
                <img class="object-cover h-full w-full" :src="profile.picture | fileUrl" alt="">
            </div>
            <h3 class="text-lg mt-4 m-0 text-gray-700 ">{{profile.name}}</h3>
            <p class="text-sm m-1 text-gray-700">{{profile.skill}}</p>
            <!-- 
                            <div class="flex justify-center items-center mb-auto">
                               
                            </div> -->
        </div>
    </div>
    <div class="w-full flex items-center justify-center space-x-4 md:space-x-4 pt-10">
        <a :href="item.url" target="_blank" class="floating-sm" v-for="(item, index) in profile.networks" :key="index">
            <div class="group" v-bot.text="item.title">
                <ic class="text-gray-700 group-hover:text-blue-400" :icon="item.icon" />
                <p class="text-sm text-gray-700 group-hover:text-blue-400">{{item.title}}</p>
            </div>
        </a>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        profile:{
            type:Object,
            default:()=>({
                name:'Lieng Hongky',
                skill:'Mobile App Developer',
                picture:'images/profilePng.png',
                networks:[]
            })
        }
    },
    computed:{
    }
}
</script>

<style lang="scss" scoped>

</style>
