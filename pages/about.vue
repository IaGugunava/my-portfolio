<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const imgSource = ref("");

const getImage = async () => {
  const { data } = await supabaseClient.storage
    .from("avatars")
    .getPublicUrl("about-profile.jpeg");

  imgSource.value = data?.publicUrl;
};

onMounted(() => {
    getImage()
})
</script>

<template>
  <div class="py-20">
    <AboutBanner :image="imgSource"/>
  </div>
</template>

<style scoped></style>
