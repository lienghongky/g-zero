<template>
<div class="page bg-gray-700 overflow-y-scroll content-between z-50">
    <div class="py-10 ">
        <div class="flex flex-wrap-reverse sm:flex-no-wrap justify-between p-8">
            <div class="pl-16 text-left">
                <h1 class="text-white m-0">G-zero Product</h1>
                <p class="text-gray-400 text-tiny font-thin m-0">Any product that needs a manual to work is broken.</p>
            </div>
            <div class="rounded-xl p-4">
                <vs-input color="#f3f3f3" type="text" icon-after placeholder="Search">
                    <template #icon>
                        <ic class="text-gray-700 p-1 icon-xs" icon="ic_search" />
                    </template>
                </vs-input>
            </div>
        </div>
        <div>
            <lottie path="smartCity" :loop="true" :autoPlay="true" :loopDelayMin="0" :loopDelayMax="0" :speed="1" :height="200" :width="400" />
        </div>
    </div>
    <!-- <div class="flex flex-wrap pl-14 my-4">
        <div class="w-full md:w-1/2 lg:w-2/3 flex items-center justify-center">
            <sketch-fab :obj="'c632823b6c204797bd9b95dbd9f53a06'" class="w-full h-full" />
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 rounded-tl-lg sm:rounded-none  flex bg-gray-200 py-10">
            <div class="h-full">
                <div class="pl-8 pr-4 py-10">
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
                        <img style="left:-5rem" class="absolute -top-1/2 w-56 h-56 object-contain" :src="getImgUrl('images/products/mx/mx.webp')" alt="">
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
    </div> -->
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
import SketchFab from '@/components/sketchFab'
export default {
    components: {
        ProductDemo,
        SketchFab
    },
    data() {
        return {

        }
    },
    methods: {
        getImgUrl(name) {
            try {
                var image = require(`@/assets/${name}`)
                return image
            } catch (e) {
                console.log(e)
                return ''
            }
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
