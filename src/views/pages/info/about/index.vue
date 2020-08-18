<template>
    <div class="page bg-white overflow-y-auto flex flex-wrap">
        <div class="w-full flex flex-wrap sm:p-8">
            <div class="w-full sm:w-3/5 md:1/2 flex flex-wrap justify-center items-center">
                <h1 class="w-full text-4xl">Hello! let's stay connected</h1>
            </div>
            <div class="w-full sm:w-2/5 md:1/2 flex flex-wrap justify-center items-center">
                <div class=" w-64 h-80 floating">
                    <div class="shadow-xl rounded-xl bg-white w-full h-full">
                            <div  class="transition duration-500 ease-in-out hover:shadow-lg border-solid border-6 sm:border-10  border-white h-2/3 rounded-xl overflow-hidden bg-gray-300 flex justify-center items-center ">
                                <img class="object-cover h-full w-full" src="@/assets/images/profilePng.png" alt="">
                            </div>
                            <h3 class="text-lg mt-4 m-0 text-gray-700 ">Lieng Hongky</h3>
                            <p class="text-sm m-1 text-gray-700">Mobile App Developer</p>
<!-- 
                            <div class="flex justify-center items-center mb-auto">
                               
                            </div> -->
                    </div>
                </div>
                <div class="w-full flex justify-center">
                                    <vs-button border @click="active=!active">
                                        CV
                                    </vs-button>
                </div>
                <div class="w-full flex items-center justify-center space-x-4 md:space-x-4">
                    <a :href="item.url" target="_blank" class="floating-sm" v-for="(item, index) in hightlights" :key="index">
                        <div  class="group" v-bot.text="item.title">
                            <ic class="text-gray-700 group-hover:text-blue-400" :icon="item.icon"/>
                            <p class="text-sm text-gray-700 group-hover:text-blue-400">{{item.title}}</p>
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
        <div class="flex w-full justify-end self-end sm:px-20 sm:pb-20">
            <!-- <feature/> -->
        </div>
      <vs-dialog blur v-model="active">
        <template #header>
          <h4 class="not-margin">
            Thank you for your interest!
          </h4>
        </template>


        <div class="w-full flex flex-col content-between space-y-4">
          <vs-input class="input-view" v-model="value1" placeholder="Full Name">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
                <vs-input class="input-view" v-model="value1" placeholder="Email">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
                <vs-input class="input-view" v-model="value1" placeholder="Company">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
                <vs-input class="input-view" v-model="value1" placeholder="Company Site">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
                <vs-input class="input-view" v-model="value1" placeholder="Note">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
          <div class="flex justify-center">
            I will get back to you latter!
          </div>
        </div>

        <template #footer>
          <div class="footer-dialog">
            <vs-button block @click="active = !active">
              Request CV
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </div>
</template>

<script>
    import Feature from './components/feature'
    import CvForm from './components/cvForm';
    import { mapGetters } from 'vuex'
    export default {
        components:{
            Feature,
            CvForm
        },
        data(){
            return{
                active:false
            }
        },
         computed:{
             ...mapGetters({
                hightlights:'App/hightlights'
                }),
         },
         methods:{
             showCv(){

             }
         }
    }
</script>

<style scoped>
input-view {
    width: 100%;
}

</style>