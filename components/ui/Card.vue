<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();

const technologies = computed(() => props?.data?.technologies?.slice(0, 3))
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
      <h3 class="text-2xl text-dark font-semibold mt-5 ml-5 mb-3">{{ data?.name }}</h3>

      <div v-if="technologies?.length" class="flex gap-2 flex-wrap">
        <div class="w-fit pl-2" v-for="item in technologies">
          <Badge :title="item?.name" :type="2"/>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
