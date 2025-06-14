<script setup lang="ts">
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css'
import 'swiper/css/pagination'

// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"


const workflowData = [
  {
    id: 1,
    title: "Discover & Define",
    teaser: "I start by understanding real user needs and frustrations.",
  },
  {
    id: 2,
    title: "Research & Inspiration",
    teaser:
      "I look into competitive products, design patterns, and real user pain points.",
  },
  {
    id: 3,
    title: "Plan & Scope",
    teaser:
      "I define the MVP, break the work into manageable pieces, and pick the right tech stack for the job.",
  },
  {
    id: 4,
    title: "Design & Architecture",
    teaser:
      "I build features that work well at the core and shine when supported.",
  },
  {
    id: 5,
    title: "Test & Polish",
    teaser:
      "I test across devices and browsers and perform accessibility checks.",
  },
  {
    id: 6,
    title: "Craft + Performance",
    teaser: "It’s not done until it’s smooth, fast, and elegant.",
  },
  {
    id: 7,
    title: "Deploy & Reflect",
    teaser:
      "I ship early, monitor real-world usage, and reflect on what could be better. There’s always room to improve.",
  },
];

</script>

<template>
  <div class="bg-dark py-20 relative overflow-hidden">
    <div class="container-fluid">
      <h2 class="text-white text-4xl font-bold mb-5 w-full">My Workflow</h2>
    </div>

    <Swiper
      class="!overflow-visible custom-swiper"
      style=""
      :pagination="{
         el: '.custom-swiper-progressbar',
        type: 'progressbar',
      }"
      :modules="[Pagination]"
      :breakpoints="{
        0: {
          spaceBetween: 24,
          slidesPerView: 1.09,
          slidesOffsetBefore: 12
        },
        480: {
          spaceBetween: 24,
          slidesPerView: 1.4,
          slidesOffsetBefore: 12
        },
        768: {
          spaceBetween: 16,
          slidesPerView: 2,
          slidesOffsetBefore: 32
        },
        1024: {
          spaceBetween: 24,
          slidesPerView: 2.5,
          slidesOffsetBefore: 64
        },
        1280: {
          spaceBetween: 24,
          slidesPerView: 2.5,
          slidesOffsetBefore: 80
        },
        1536: {
          spaceBetween: 36,
          slidesPerView: 3.5,
          slidesOffsetBefore: 150
        },
        1920:{
          spaceBetween: 36,
          slidesPerView: 4,
          slidesOffsetBefore: 150
        }
      }"
      :speed="1000"
    >
      <SwiperSlide v-for="item in workflowData" :key="item?.id">
          <workflowCard :data="item" :total-length="workflowData?.length"/>
      </SwiperSlide>
    </Swiper>

    <div class="custom-swiper-progressbar absolute bottom-0 left-0 w-full h-1 bg-gray-300"></div>

  </div>
</template>

<style>
.custom-swiper-progressbar .swiper-pagination-progressbar-fill {
  background-color: #3b82f6;
}
</style>
