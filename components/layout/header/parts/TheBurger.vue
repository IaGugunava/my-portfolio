<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const downloadPrivateFile = async () => {
  const { data } = await supabaseClient.storage
    .from("resume")
    .getPublicUrl("newcv/ia-gugunava.pdf");

  // if (error) {
  //   console.error('Error generating signed URL:', error)
  //   return
  // }

  try {
    const response = await fetch(data.publicUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ia-gugunava.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Download failed:", err);
  }
};
</script>

<template>
  <div class="w-full h-[100dvh] z-10 fixed top-[64px] left-0 bg-dark">
    <div class="flex gap-5 flex-col justify-center items-center">
        <NuxtLink class="text-white text-lg font-semibold w-full border-b border-white flex justify-center items-center pb-5" to="/about">
          about
        </NuxtLink>
        <NuxtLink class="text-white text-lg font-semibold w-full border-b border-white flex justify-center items-center pb-5" to="/projects">
          projects
        </NuxtLink>
        <NuxtLink class="text-white text-lg font-semibold w-full border-b border-white flex justify-center items-center pb-5" to="/skills">
          skills
        </NuxtLink>
        <NuxtLink class="text-white text-lg font-semibold w-full border-b border-white flex justify-center items-center pb-5" to="/contact">
          contact
        </NuxtLink>
    </div>

    <div
      class="absolute bottom-[150px] flex-col z-30 left-5 flex gap-4 items-start"
    >
      <p class="text-xl text-white font-bold">follow me on social media</p>
      <Socials />

      <CusotmButton
        class="mt-3"
        text="Download my CV"
        :type="2"
        @click="downloadPrivateFile"
      />
    </div>
  </div>
</template>

<style scoped></style>
