<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();

</script>

<template>
    <div class="border border-primary rounded-2xl p-4 flex">
        <div>
            <h3 class="text-primary text-lg font-semibold mb-1">{{ data?.title }}</h3>
            <div class="text-dark text-md">{{ data?.description }}</div>
        </div>
        <div class="flex-shrink-0 w-8 h-8 [&_svg]:w-full [&_svg]:h-full [&_path]:stroke-primary [&_path]:fill-none" v-html="data?.icon"></div>
    </div>
</template>

<style scoped>

</style>