<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -500],
    },
    next: {
      shadow: true,
      translate: [0, 0, -500],
    },
  },
});

onMounted(() => {
  console.log(swiper.instance);
});

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
        <div>
          <swiper-container
            class="!overflow-visible"
            ref="containerRef"
            :init="false"
          >
            <swiper-slide v-for="item in projects" :key="item?.id">
              <Card :data="item" />
            </swiper-slide>
          </swiper-container>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
