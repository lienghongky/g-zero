<template>
    <div class="bg-blue-500 overflow-y-scroll h-full content-between flex justify-center items-center">
            <router-link :to="'/about'">
                 <vs-button
                    danger
                    border
                >
                    About me
                </vs-button>
            </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>

</style>