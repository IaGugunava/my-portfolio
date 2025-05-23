<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const hobbies: Ref<any> = computed(() => data?.value?.data);

const { data, error } = await useAsyncData(
  'hobbies',
  async () => await supabaseClient.from('hobbies').select('*')
)

</script>

<template>
  <div class="bg-white py-20 overflow-hidden">
    <div class="container-fluid">
      <div class="mb-8">
        <h2 class="text-dark text-4xl font-bold mb-2 w-full">My Hobbies</h2>
        <p class="text-gray-dark text-xl max-w-[700px]">
          Believe it or not, I don't code for 24/7! I am a human after all, I'd go insane!
          So, here are things I actually do during my free time that I really
          enjoy:
        </p>
      </div>
    </div>

    <swiper-container
      class="!overflow-visible"
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
          slidesPerView: 2,
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
      <swiper-slide v-for="item in hobbies" :key="item?.id">
        <CustomSecondaryCard :data="item" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped></style>
