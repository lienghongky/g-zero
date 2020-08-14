<template>
     <div class="flex sm:pl-20 items-end space-x-1">
        <router-link class="floating" :to="{name:item.route.name}" v-for="(item, index) in tabs" :key="index">
            <div @click="selectedTab = index" :class="{'bg-gray-900 bg-opacity-25 transition duration-75 transform -translate-y-4':index == selectedTab}" v-bot:text="item.title" class=" hidden  sm:flex sm:flex-wrap sm:h-24 w-1/4 sm:w-20 bg-white bg-opacity-90  hover:bg-opacity-25 shadow-3xl transform hover:-translate-y-4  items-center justify-center p-4" >
                <ic :class="{'text-gray-800':index == selectedTab}" class="w-full icon-md text-gray-700" :icon="item.icon"/>
                <p  :class="{'text-gray-800':index == selectedTab}" class="w-full text-sm m-0 py-2 text-gray-700 text-center">{{item.title}}</p>
            </div>
        </router-link>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
    export default {
        data(){
            return {
                selectedTab:0
            }
        },
        computed:{
            ...mapGetters({
                tabs: 'App/tabs'
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>