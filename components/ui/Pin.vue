<script setup lang="ts">
defineProps<{
  data: any;
}>();
</script>

<template>
  <NuxtLink :to="data?.link" target="_blank" class="group relative flex-col bg-dark w-12 h-12 overflow-visible rounded-full flex items-center justify-center">
    <div class="[&_svg]:w-6 [&_svg]:h-6" v-html="data?.image"></div>
    <div class="absolute top-0 -left-1/2 text-center flex justify-center items-center min-w-8 w-[100px] bg-gray-light p-2 rounded-lg opacity-0 text-white
      transition-opacity duration-300 ease-in-out group-hover:opacity-100">{{ data?.name }}</div>
  </NuxtLink>
</template>

<style scoped></style>
