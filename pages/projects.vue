<script setup lang="ts">
import CusotmButton from '~/components/ui/CusotmButton.vue';

const supabaseClient = useSupabaseClient();

const itemRow = ref(3);
// const projectState = ref("all");
// const chosenProjects = ref();
const dataChunks: Ref<any[]> = ref([])

const projects: Ref<any> = computed(() => error !== null ? data?.value?.data : []);

// const filterProjects = () => {
//   personalProjects.value = projects.value.filter((el: any) => el.type === 'personal');
//   otherProjects.value = projects.value.filter((el: any) => el.type === 'commercial');
// }

const { data, error } = await useAsyncData(
  'projects',
  async () => await supabaseClient.from("projects").select(`
    id,
    name,
    image,
    link,
    technologies ( id, name )
  `).order('name', { ascending: true })
)

const sliceData = () => {
  for (let i = 0; i < projects?.value?.length; i += itemRow.value) {
    const chunk: any[] = projects.value?.slice(i, i + itemRow.value);
    dataChunks.value.push(chunk);
  }
}

// const fetchProjects = async () => {
//   const { data, error } = await supabaseClient.from("projects").select(`
//     id,
//     name,
//     image,
//     link,
//     technologies ( id, name )
//   `).order('name', { ascending: true });
//   if (!error) {
//     projects.value = data;
//   } else {
//     console.log(error);
//   }

//   for (let i = 0; i < projects?.value?.length; i += itemRow.value) {
//     const chunk: any[] = projects.value?.slice(i, i + itemRow.value);
//     dataChunks.value.push(chunk);
//   }
// };

// fetchProjects();

// watch(projectState, () => {
//   projectState.value ? (chosenProjects.value = personalProjects.value) : (chosenProjects.value = otherProjects.value)
// }, {
//   immediate: true
// })

onMounted(() => {
  sliceData()
})
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
        <div class="flex flex-col md:flex-row gap-9 even:justify-end odd:justify-start" v-for="(item, index) in dataChunks" :key="index">
          <div class="w-full md:w-[28.6979166667%]" v-show="el?.image" v-for="el in item" :key="el?.id">
              <CustomCard class="w-full " :data="el" />
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
