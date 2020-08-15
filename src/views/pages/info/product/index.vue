<template>
     <div class="page bg-gray-700 overflow-y-scroll content-between z-50">
         <div class="py-10">
             <div class="flex justify-between p-8">
                 <div class="pl-16 text-left">
                 <h1 class="text-white m-0">G-zero Product</h1>
                <p class="text-gray-400 text-tiny font-thin m-0">Any product that needs a manual to work is broken.</p>
             </div>
             <div class="rounded-xl p-4">
                <vs-input color="#f3f3f3" type="text" icon-after placeholder="Search">
                    <template #icon>
                    <ic class="text-gray-700 p-1 icon-xs" icon="ic_search"/>
                    </template>
                </vs-input>
             </div>
             </div>
             <div>
                 <lottie path="smartCity" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="200" :width="400" />
             </div>
         </div>
        <div class="py-1" v-for="(item, index) in 4" :key="index">
                <product-demo />
        </div>
        <div class="h-1/3">
            <h3 class="text-md text-white font-thin">
                At the heart of every product person, there’s a desire to make someone’s life easier or simpler.
            </h3>
        </div>
    </div>
</template>

<script>
    import ProductDemo from '@/components/productDemo'
    export default {
        components:{
            ProductDemo
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="sass" scoped>

</style>