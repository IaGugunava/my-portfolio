<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const containerRef = ref(null);

const projects = ref();
const technologies = ref();
// const personalProjects = ref();
// const otherProjects = ref();
// const projectState = ref(false);
// const chosenProjects = ref();

const fetchProjects = async () => {
  const { data, error } = await supabaseClient.from("projects").select(`
    id,
    name,
    image,
    link,
    technologies ( id, name )
  `);
  if (!error) {
    projects.value = data;
  } else {
    console.log(error);
  }

};

// const fetchTechProjects = async () => {
//   const { data, error } = await supabaseClient.from("projects").select(`
//   id,
//   name,
//   image,
//   link,
//   technologies ( id, name )
// `);

//   if (!error) {
//     technologies.value = data;
//   } else {
//     console.log(error);
//   }

// };

// const changeProjectType = () => {
//   projectState.value = !projectState.value;
// }

// const filterProjects = () => {
//   personalProjects.value = projects.value.filter((el: any) => el.type === true);
//   otherProjects.value = projects.value.filter((el: any) => el.type === false);
// }

fetchProjects();
// fetchTechProjects();

// watch(projectState, () => {
//   projectState.value ? (chosenProjects.value = personalProjects.value) : (chosenProjects.value = otherProjects.value)
// }, {
//   immediate: true
// })
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

        <!-- <div>
          <CusotmButtons :text="projectState ? 'personal' : 'other'" @click="changeProjectType"/>
        </div> -->
      </div>
    </div>
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

      }"
      :speed="1000"
    >
      <swiper-slide
        v-show="item?.image"
        v-for="item in projects"
        :key="item?.id"
      >
        <Card :data="item" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped></style>
