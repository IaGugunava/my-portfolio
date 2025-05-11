<script setup lang="ts">
defineProps<{
  data: any;
}>();
</script>

<template>
  <div>
    <NuxtLink
      :to="data?.link"
      target="_blank"
      class="group relative overflow-visible"
    >
      <div
        class="flex-col bg-dark w-12 h-12 rounded-full flex items-center justify-center"
      >
        <div class="[&_svg]:w-6 [&_svg]:h-6" v-html="data?.image"></div>
      </div>
      <div
        class="p-2 bg-gray-500 absolute h-10 -top-1/2 left-0 w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
      >
        <div class="text-dark">{{ data?.name }}</div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
