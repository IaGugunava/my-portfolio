<script setup lang="ts">
defineProps<{
  data: any;
}>();
</script>

<template>
  <NuxtLink :to="data?.link" class="group relative bg-dark w-12 h-12 rounded-full flex items-center justify-center">
      <div class="absolute -top-1/2 left-0 w-full opacity-0 text-dark transition-opacity duration-300 ease-in-out group-hover:opacity-100">{{ data?.name }}</div>
    <div class="[&_svg]:w-6 [&_svg]:h-6" v-html="data?.image"></div>
  </NuxtLink>
</template>

<style scoped></style>
