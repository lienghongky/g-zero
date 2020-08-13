<template>
    <div class="bg-blue-500 overflow-y-scroll h-full content-between z-50">
            <router-link :to="{name:'About'}">
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