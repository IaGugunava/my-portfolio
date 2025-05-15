<script setup lang="ts">
const props = defineProps<{
  data: any;
  totalLength: number | null;
}>();
</script>

<template>
    <div class="text-white mt-5 p-5 flex items-center gap-5">
        <div>
            <p class="text-lg">Step {{ data?.id }}</p>
            <h3 class="text-2xl font-semibold">{{ data?.title }}</h3>
            <p class="text-xl min-h-[56px]">{{ data?.teaser }}</p>
        </div>
        <div v-if="data?.id !== totalLength">
            <ArrowLeft/>
        </div>
    </div>
</template>

<style scoped>

</style>