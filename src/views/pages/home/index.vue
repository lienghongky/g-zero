<template>
<div class="flex justify-center items-center">

    <div class=" w-full h-full flex justify-center items-start">
        <h2 v-bot:html="'<p>hi<span>HONGKY</span></p>'" @click="logoClick" class="text-center text-md text-gray-700"><span class="text-black text-5xl">G</span>
            -Zero
        </h2>
    </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            isAnimating: false,
            positions: []
        }
    },
    computed: {},
    mounted() {

    },
    methods: {
        setAnimController(e) {

        },
        logoClick(){
            this.$store.dispatch('App/setBot',{messages:null})
        }
        
    }
}
</script>

<style scoped>

</style>
