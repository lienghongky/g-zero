<template>
    <div class="page bg-blue-900 overflow-y-scroll content-between ">
        <div class="flex flex-wrap sm:flex-no-wrap justify-center items-center  ">
            <div class="w-full sm:w-1/2  sm:h-full sm:pl-20 pt-20 sm:pt-0">
                <h1 class="text-4xl text-white">More</h1>
                <h1 class="text-xl text-gray-200">Want to know more about me? <span v-bot:text.init="'CITY Plan You may use special comments to disable some warnings.Use <br/>Use to ignore all warnings in a file.'"></span></h1>
                <router-link class="flex items-center justify-center" :to="'/about'">
                    <vs-button
                        dark
                        border
                    >
                        About me
                    </vs-button>
                </router-link>
            </div>
            <div class="w-full sm:w-1/2 flex flex-col justify-center items-start py-20 space-y-4">
                <lottie path="botHightLight" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="300" :width="400" />
            </div>
        </div>
            
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>

</style>