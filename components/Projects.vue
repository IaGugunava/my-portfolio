<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const projects = ref();

const fetchProjects = async () => {
  const { data, error } = await supabaseClient.from("projects").select(`
    id,
    name,
    image,
    link,
    technologies ( id, name )
  `).order('name', { ascending: true });
  if (!error) {
    projects.value = data;
  } else {
    console.log(error);
  }
};

fetchProjects();
</script>

<template>
  <div class="py-20">
    <div class="container-fluid">
      <div class="mb-8 flex justify-between items-center">
        <div>
          <h2 class="font-semibold text-4xl text-dark w-fit">My Projects</h2>
          <div class="text-xl text-gray-700 w-fit mt-3">
            Projects I have collaborated on
          </div>
        </div>

        <NuxtLink to="/projects">
          <CusotmButton text="Explore more" :type="3"/>
        </NuxtLink>
      </div>
    </div>
    <swiper-container
      class="!overflow-visible"
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
      }"
      :speed="1000"
    >
      <swiper-slide
        v-show="item?.image"
        v-for="item in projects"
        :key="item?.id"
      >
        <Card :data="item" :limit-badges="true" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped></style>
