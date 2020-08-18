<template>
<div class="page bg-white overflow-y-auto flex flex-wrap">
    <div class="w-full flex flex-wrap sm:p-8">
        <div class="w-full sm:w-3/5 md:1/2 flex flex-wrap justify-center items-center">
            <h1  @click="next"  class="w-full text-4xl">Hello! let's stay connected</h1>
        </div>
        <div class="w-full sm:w-2/5 md:1/2 flex flex-col justify-center items-center">
            <div  @click="next" class="relative">
                <transition mode="out-in"  name="switching" >
                    <profile  v-if="activeProfile == (index+1)" :profile="item" class="transition duration-75 transform z-50" v-for="(item, index) in profiles" :key="(index+1)"/>
                </transition>
                <lottie ref="anim" class="absolute bottom-0 inset-x-0" path="puff" :loop="false" :autoPlay="false" :loopDelayMin="0" :loopDelayMax="0" :speed="1"/>
            </div>
            <div class=" p-2">
                <vs-pagination color="dark" buttons-dotted v-model="activeProfile" :length="profiles.length" />
                    
                </vs-button>
            </div>
            <div class="w-2/3 flex-1 bg-white flex justify-center items-start border-0 border-t-1 border-solid border-gray-700 py-4 z-75">
                <vs-button dark border @click="active=!active">
                    See CV
                </vs-button>
            </div>
        </div>
    </div>
    <!-- <div class="flex w-full justify-end self-end sm:px-20 sm:pb-20">
        <feature/>
    </div> -->

    <!-- CV FROM SECTION -->
    <vs-dialog blur v-model="active">
        <template #header>
            <div>
                <h4 class="m-0 mt-4">
                CV Request
            </h4>
            </div>
        </template>
        <div class="w-full flex flex-col content-between space-y-4">
            <vs-input class="input-view" v-model="form.fullname" placeholder="Full Name">
                <template #icon>
                    <ic class="text-gray-700" icon="ic_me" />
                </template>
            </vs-input>
            <vs-input class="input-view" v-model="form.email" placeholder="Email">
                <template #icon>
                    <ic class="text-gray-700" icon="ic_me" />
                </template>
            </vs-input>
            <vs-input class="input-view" v-model="form.company" placeholder="Company">
                <template #icon>
                    <ic class="text-gray-700" icon="ic_me" />
                </template>
            </vs-input>
            <vs-input class="input-view" v-model="form.companySite" placeholder="Company Site">
                <template #icon>
                    <ic class="text-gray-700" icon="ic_me" />
                </template>
            </vs-input>
            <vs-input class="input-view" v-model="form.note" placeholder="Note">
                <template #icon>
                    <ic class="text-gray-700" icon="ic_me" />
                </template>
            </vs-input>
            <div class="flex justify-center">
                I will get back to you as soon as possible!
            </div>
        </div>

        <template #footer>
            <div class="footer-dialog">
                <vs-button block @click="submitRequest">
                    Request CV
                </vs-button>
            </div>
        </template>
    </vs-dialog>
    <!-- END CV FROM SECTION -->
    <!-- ALERT SECITON -->
    <vs-dialog width="550px" not-center v-model="activeAlert">
        <template #header>
          <h4 class="not-margin">
           Thank you so much for your interest!
          </h4>
        </template>


        <div class="con-content">
          <p>
            Thank you so much for your interest, I will send my CV to your email as soon as possible after reviewing your request. Actually, I am please to share my infomation with you, however to protect my privacy and personal information I have to do a quick review. Thank you for you understanding!
          </p>
        </div>

        <template #footer>
          <div class="con-footer">
            <vs-button @click="activeAlert=false" transparent>
              Ok
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    <!-- END ALERT SECITON -->

</div>
</template>

<script>
import Feature from './components/feature'
import CvForm from './components/cvForm';
import Profile from './components/profile'
import {
    mapGetters
} from 'vuex'
export default {
    components: {
        Feature,
        CvForm,
        Profile
    },
    data() {
        return {
            activeProfile:1,
            active: false,
            activeAlert: false,
            form: {
                fullname: '',
                email: '',
                company: '',
                companySite: '',
                note:''
            }
        }
    },
    computed: {
        ...mapGetters({
            profiles: 'User/profiles'
        }),

    },
    methods: {
        next(){
            
            
            this.activeProfile ++;
            if (this.activeProfile > this.profiles.length) this.activeProfile = 1
            
      
            
        },
        submitRequest() {
            this.active = !this.active;
            this.activeAlert = true
        }
    },
    watch:{
        activeProfile(newVal){
            this.$refs.anim.anim.goToAndPlay(0)
        }
    }
}
</script>

<style scoped>

.switching-enter-active{
  animation: switch-in .5s ease-in;
  
}
.switching-leave-active {
    animation: switch-out .1s ease-out;
 }
 /* .switching-enter{
     background: rgb(121, 117, 116);
 }
.switching-leave-to {
    background: palegreen;
    animation: switch-out 5s ease-out;
} */
@keyframes switch-in {
   0%{
        transform:translateY(10%);
        opacity: 0;
    }
    50%{
        transform:translateY(-10%);
  
    }
    100%{
        transform:translateY(0%);
        opacity: 1;
        
    }
}
 @keyframes switch-out {
    0%{
        transform:translateY(0);
    }
    100%{
        transform:translateY(10%);
        opacity: 0;
        
    }
 }

input-view {
    width: 100%;
}
</style>
