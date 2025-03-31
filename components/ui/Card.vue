<script setup lang="ts">
defineProps<{
  data: any;
  technologies?: any;
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
    <div>
      <h3 class="text-xl text-dark mt-5 ml-5 mb-5">{{ data?.name }}</h3>
      <div v-if="technologies?.length">
        <div v-for="(item, index) in technologies" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
