<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <NuxtLink :to="data?.link" target="_blank" class="group">
    <div class="relative w-full overflow-hidden rounded-lg">
        <NuxtImg
          :src="data?.image"
          :alt="data?.name"
          class="aspect-[351/216] w-full object-cover transition-all duration-500 ease-in-out lg:aspect-[542/300] 2xl:aspect-[778/456]"
        />
    </div>
    <h3>{{ data?.name }}</h3>
  </NuxtLink>
</template>

<style scoped></style>
