<template>
     <div class="flex sm:pl-20 items-end space-x-1">
        <router-link :to="{name:item.route.name}" v-for="(item, index) in tabs" :key="index">
            <div @click="selectedTab = index" :class="{'bg-opacity-25':index == selectedTab}" v-bot:text="item.title" class="hidden floating sm:flex sm:flex-wrap sm:h-32 w-1/4 sm:w-24 bg-gray-900 bg-opacity-0 shadow-3xl hover:bg-opacity-25  items-center justify-center p-4" >
                <ic :class="{'text-gray-200':index == selectedTab}" class="w-full icon-md text-gray-500" :icon="item.icon"/>
                <p  :class="{'text-gray-200':index == selectedTab}" class="w-full text-sm m-0 py-2 text-gray-500 text-center">{{item.title}}</p>
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