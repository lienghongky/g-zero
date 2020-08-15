<template>
     <div class="flex items-end space-x-1">
        <router-link class="floating-sm" :to="{name:item.route.name}" v-for="(item, index) in tabs" :key="index">
            <div @click="$emit('input',index)" :class="{'bg-gray-300 bg-opacity-90 transition duration-75 transform -translate-y-4':index == value}" v-bot:text="item.title" class="hidden  sm:flex sm:flex-wrap sm:h-16 w-1/4 sm:w-10 bg-gray-200 hover:bg-gray-300 shadow-3xl transform hover:-translate-y-4  items-center justify-center p-4 rounded-sm" >
                <ic :class="{'text-gray-200':index == value}" class="w-full icon-sm text-gray-700" :icon="item.icon"/>
                <p :class="{'text-white':index == value}" class="w-full text-sm m-0 py-2 text-gray-700 text-center">{{item.title}}</p>
                <div v-if="index == value" class="absolute bottom-0 inset-x-0 bg-gray-700 h-1"></div>
            </div>
        </router-link>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
    export default {
        props:{
            value: {
                type: null,
                default: 0
            },
            tabs: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
              hidden:true
            }
        },
        computed:{
        },
        methods:{
            show(){
                this.hidden = !this.show
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>