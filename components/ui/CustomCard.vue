<script setup lang="ts">
const props = defineProps<{
  data: any;
  limitBadges?: boolean;
}>();

const technologies = computed(() =>
  props?.limitBadges
    ? props?.data?.technologies?.slice(0, 3)
    : props?.data?.technologies
);
</script>

<template>
  <div>
    <NuxtLink :to="data?.link" target="_blank" class="group">
      <div class="relative w-full overflow-hidden rounded-lg">
        <NuxtImg
          :src="data?.image"
          :alt="data?.name"
          class="aspect-[351/216] w-full object-cover transition-all duration-700 ease-in-out lg:aspect-[542/300] 2xl:aspect-[778/456]"
          :class="{ 'group-hover:scale-110': data?.link }"
        />

        <div
          v-if="!data?.link"
          class="absolute top-0 left-0 w-full h-full bg-primary-dark bg-opacity-30 font-semibold transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 flex justify-center items-center text-white text-2xl"
        >
          Link not available
        </div>
      </div>
      <div>
        <h3 class="text-2xl text-dark font-semibold mt-5 ml-5 mb-3">
          {{ data?.name }}
        </h3>
      </div>
    </NuxtLink>

    <div v-if="technologies?.length" class="pl-2 cursor-grab">
      <swiper-container
        :breakpoints="{
          0: {
            spaceBetween: 8,
            slidesPerView: 'auto',
          },
        }"
      >
        <swiper-slide
          v-for="item in technologies"
          :key="item?.id"
          class="w-auto"
        >
          <CustomBadge :title="item?.name" :url="item?.link" :type="2" class="w-fit" />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style scoped></style>
