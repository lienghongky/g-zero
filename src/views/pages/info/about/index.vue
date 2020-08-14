<template>
    <div class="page bg-white overflow-y-auto flex flex-wrap">
        <div class="w-full flex flex-wrap p-8">
            <div class="w-full sm:w-2/3 flex justify-center items-center">
                <h1 class="text-4xl">Hello! let's stay connected</h1>
            </div>
            <div class="w-full sm:w-1/3 flex justify-center">
                <div class=" w-64 h-80 floating">
                    <div class="shadow-xl rounded-xl bg-white w-full h-full">
                            <div  class="transition duration-500 ease-in-out hover:shadow-lg border-solid border-6 sm:border-10  border-white h-2/3 rounded-xl overflow-hidden bg-gray-200 flex justify-center items-center ">
                                <img class="object-cover h-full w-full" src="@/assets/images/profile2.png" alt="">
                            </div>
                            <h3 class="text-lg mt-4 m-0 text-gray-700 ">Lieng Hongky</h3>
                            <p class="text-sm m-1 text-gray-700">Mobile App Developer</p>

                            <div class="flex justify-center items-center mb-auto">
                               
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="self-end sm:pl-20 sm:pb-20">
            <feature/>
        </div>
    </div>
</template>

<script>
    import Feature from './components/feature'
    export default {
        components:{
            Feature
        }
    }
</script>

<style lang="scss" scoped>

</style>