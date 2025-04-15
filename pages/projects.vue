<script setup lang="ts">
import CusotmButton from '~/components/ui/CusotmButton.vue';

const supabaseClient = useSupabaseClient();

const itemRow = ref(3);
const projects = ref();
// const projectState = ref("all");
// const chosenProjects = ref();
const dataChunks: Ref<any[]> = ref([])

// const filterProjects = () => {
//   personalProjects.value = projects.value.filter((el: any) => el.type === 'personal');
//   otherProjects.value = projects.value.filter((el: any) => el.type === 'commercial');
// }

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

  for (let i = 0; i < projects?.value?.length; i += itemRow.value) {
    const chunk: any[] = projects.value?.slice(i, i + itemRow.value);
    dataChunks.value.push(chunk);
  }
};

fetchProjects();

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

        <div>
          <!-- <CusotmButton :text="projectState ? 'personal' : 'other'" @click="changeProjectType"/> -->
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-9 px-4">
        <div class="flex gap-9 even:justify-end odd:justify-start" v-for="(item, index) in dataChunks" :key="index">
          <div class="w-[28.6979166667%]" v-show="el?.image" v-for="el in item" :key="el?.id">
              <Card class="w-full " :data="el" />
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
