<template>
    <div class="flex flex-wrap bg-blue-900 pl-16 h-full">
        <div class="w-full md:w-1/2 lg:w-2/3 flex items-center justify-center">
            <div class="">
                <img class="w-80 h-80 py-16" src="@/assets/images/products/mx/mx-ver.png" alt="">
            </div>
        </div>
        <div class="w-full rounded-tl-lg sm:rounded-none md:w-1/2 lg:w-1/3 flex bg-gray-200 py-10">
            <div class="h-full">
                <div class="p-8 py-10">
                    <div class="relative bg-white bg-opacity-50 rounded-xl shadow-3xl">
                        <div class="pl-24 p-4 text-left text-gray-900">
                            <h4 class="text-md  m-0">Mx Master S3 for mac</h4>
                            <p class="text-sm font-thin my-2">The Master Series by Logitech</p>
                            <h4 class="text-sm font-thin m-0 text-blue-800">$99.99</h4>
                            <p class="text-tiny font-thin m-0">Free shipping on orders over $29.00</p>
                            <div class="flex space-x-2 -mb-8 mt-2">
                                <div class="w-1/2">
                                    <vs-button dark class="w-full">
                                        DETAIL
                                    </vs-button>
                                </div>
                                <div class="w-1/2">
                                    <vs-button class="w-full">
                                        BUY
                                    </vs-button>
                                </div>
                            </div>
                        </div>
                        <img style="left:-120px" class="absolute -top-1/2 w-64 h-64 object-contain" :src="getImgUrl('images/products/mx/mx.webp')" alt="">
                    </div>
                </div>
                <div class="text-left p-4">
                    <h4 class="text-sm">
                        DIMENSIONS
                    </h4>
                    <ul>
                        <li>Height: 2.01 in (51 mm)</li>
                        <li>Width: 3.32 in (84.3 mm)</li>
                        <li>Depth: 4.92 in (124.9 mm)</li>
                        <li>Weight: 4.97 oz (141 g)</li>
                    </ul>
                    <h4 class="text-sm">
                        SYSTEM REQUIREMENTS
                    </h4>
                    
                    <ul>
                        <li>Bluetooth®</li>
                        <li>Required: Bluetooth Low Energy</li>
                        <li>macOS 10.15 or later</li>
                        <li>iPadOS 13.4 or later</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               
            }
        },
        methods:{
            getImgUrl(name) {
                try {
                    var image = require( `@/assets/${name}`)
                    return image
                }catch (e){
                    console.log(e)
                    return ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>