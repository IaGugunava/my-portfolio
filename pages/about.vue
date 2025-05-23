<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const { data, error } = await useAsyncData(
  'about',
  async () => await supabaseClient.storage.from("avatars").getPublicUrl("for-portfolio.jpeg")
)

const imgSource = computed(() => data?.value?.data?.publicUrl);

console.log(data.value)
</script>

<template>
  <div class="">
    <AboutBanner :image="imgSource"/>
    <AboutTimeline/>
    <AboutWorkflow/>
    <AboutHobbies/>
  </div>
</template>

<style scoped></style>
