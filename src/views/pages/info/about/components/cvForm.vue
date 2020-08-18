<template>
<div>
    <div class="w-full rounded-xl bg-gray-300 p-8">
        <h4 class="text-sm font-thin w-full">Want my cv?</h4>
        <div class="flex justify-center">
            <div class="space-y-4 py-4">
                <vs-input class="" v-model="value1" placeholder="Full Name">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
                <vs-input class="" v-model="value1" placeholder="Email">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
                <vs-input class="" v-model="value1" placeholder="Company">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
                <vs-input class="" v-model="value1" placeholder="Company Site">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
                <vs-input class="" v-model="value1" placeholder="Note">
                    <template #icon>
                        <ic class="text-gray-700" icon="ic_me" />
                    </template>
                </vs-input>
            </div>
        </div>
        <div class="flex justify-center">
            <vs-button class="ml-auto mr-auto" border>
                Request CV
            </vs-button>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
