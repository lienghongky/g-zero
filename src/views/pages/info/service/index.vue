<template>
     <div class="page bg-green-500 overflow-y-scroll content-between">
           <div class="flex flex-wrap sm:flex-no-wrap justify-center items-center  ">
            <div class="w-full sm:w-1/2  sm:h-full sm:pl-20 pt-20 sm:pt-0">
                <h1 class="text-4xl text-gray-700">Services</h1>
                <h1 class="text-xl text-white">are you looking for services, Like any services? <span v-bot:text.init="'CITY Plan You may use special comments to disable some warnings.Use <br/>Use to ignore all warnings in a file.'"></span></h1>
            </div>
            <div class="w-full sm:w-1/2 flex flex-col justify-center items-start py-20 space-y-4">
                <lottie path="underconstruction" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="400" :width="600" />
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