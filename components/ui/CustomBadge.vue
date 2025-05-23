<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    type?: number;
  }>(),
  {
    text: "",
    type: 1,
  }
);
</script>

<template>
    <div class="relative px-4 py-2 rounded-3xl z-10" :class="[{'bg-primary-light text-white': type === 1}, {'border border-primary-light text-gray-dark transition-all duration-500 ease-in-out hover:bg-primary-light hover:text-white': type === 2}]">
        {{ title }}
    </div>
</template>

<style scoped>

</style>