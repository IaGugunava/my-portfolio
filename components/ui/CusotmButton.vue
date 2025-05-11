<script setup lang="ts">

/**
 * @description BUTTON TYPE ONE: Button with violet background
 * @description BUTTON TYPE TWO: Transparent button
 * @description BUTTON TYPE THREE: Transparent button with violet border and text
 */


withDefaults(
  defineProps<{
    text: string;
    type?: number;
    icon?: any;
    isActive?: boolean;
  }>(),
  {
    text: "",
    type: 1,
    icon: null,
    isActive: false,
  }
);
</script>

<template>
    <button class="px-3 sm:px-6 py-3 rounded-lg text-sm sm:text-lg font-semibold transition-all duration-300 ease-in-out"
    :class="{
        'bg-primary text-white hover:bg-primary-dark ': type === 1,
        'border border-white font-semibold text-white hover:bg-white hover:text-gray-900': type === 2,
        ' border border-primary text-primary hover:bg-primary hover:text-white': type === 3
    }"
    >
        <div>
            {{ text }}
        </div>
    </button>
</template>

<style scoped>

</style>