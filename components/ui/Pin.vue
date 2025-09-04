<script setup lang="ts">
defineProps<{
  data: any;
}>();
</script>

<template>
  <NuxtLink :to="data?.link" target="_blank" class="group aspect-square relative flex-col bg-dark w-full h-full overflow-visible rounded-full flex items-center justify-center">
    <div class="size-40 h-full [&_svg]:w-[50%] [&_svg]:h-[50%] flex justify-center items-center" v-html="data?.image"></div>
    <div class="absolute top-0 -left-1/2 text-center flex justify-center items-center min-w-8 w-[100px] bg-gray-light p-2 rounded-lg opacity-0 text-white
      transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-active:opacity-0">{{ data?.name }}</div>
  </NuxtLink>
</template>

<style scoped></style>
