<script setup lang="ts">
defineProps<{
  data: any;
}>();
</script>

<template>
  <div>
    <NuxtLink :to="data?.link" target="_blank" class="group relative flex-col bg-dark w-12 h-12 overflow-visible rounded-full flex items-center justify-center">
      <div class="[&_svg]:w-6 [&_svg]:h-6" v-html="data?.image"></div>
      <div class="absolute -bottom-1/2 left-0 w-full opacity-100 text-dark transition-opacity duration-300 ease-in-out group-hover:opacity-100">{{ data?.name }}</div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
