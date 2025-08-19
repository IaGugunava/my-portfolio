<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    type?: number;
    url?: string;
  }>(),
  {
    text: "",
    type: 1,
    url: "#",
  }
);
</script>

<template>
  <NuxtLink :to="url" target="_blank">
    <div
      class="relative px-4 py-2 rounded-3xl z-10 cursor-pointer"
      :class="[
        { 'bg-primary-light text-white': type === 1 },
        {
          'border border-primary-light text-gray-dark transition-all duration-500 ease-in-out hover:bg-primary-light hover:text-white':
            type === 2,
        },
      ]"
    >
      {{ title }}
    </div>
  </NuxtLink>
</template>

<style scoped></style>
