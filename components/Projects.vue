<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const containerRef = ref(null);

const projects = ref();

const fetchProjects = async () => {
  const { data, error } = await supabaseClient.from("projects").select("*");

  if (!error) {
    projects.value = data;
  } else {
    console.log(error);
  }

  console.log(projects.value);
};

fetchProjects();
</script>

<template>
  <div class="py-20">
    <div class="container-fluid">
      <div class="mb-8">
        <h2 class="font-semibold text-4xl text-dark w-fit">My Projects</h2>
      </div>
    </div>
    <div class="">
      <swiper-container
        class="!overflow-visible"
        ref="containerRef"
        :breakpoints="{
          0: {
            spaceBetween: 24,
            slidesPerView: 1.09,
          },

          480: {
            spaceBetween: 24,
            slidesPerView: 1.4,
          },
          768: {
            spaceBetween: 16,
            slidesPerView: 2.2,
          },
          1024: {
            spaceBetween: 36,
            slidesPerView: 2.5,
          },

          1280: {
            spaceBetween: 36,
            slidesPerView: 3,
          },
        }"
        :speed="1000"
      >
        <swiper-slide v-for="item in projects" :key="item?.id">
          <Card :data="item" />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style scoped></style>
