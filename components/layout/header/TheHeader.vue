<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const route = useRoute();
const isBurgerOpen = ref(false)

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

watch(
  () => isBurgerOpen.value,
  (isOpen) => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }
);

watch(() => route.fullPath, () => {
  isBurgerOpen.value = false;
})
</script>

<template>
  <div class="flex justify-between items-center w-full bg-dark p-5">
    <a class="text-white" href="/">logo?</a>
    <div class="flex">
      <div class="hidden md:flex items-center gap-5">
        <NuxtLink
          class="text-white text-lg font-semibold transition-all duration-300 ease-in-out"
          to="about"
          >about me</NuxtLink
        >
        <NuxtLink
          class="text-white text-lg font-semibold transition-all duration-300 ease-in-out"
          to="projects"
          >projects</NuxtLink
        >
        <NuxtLink
          class="text-white text-lg font-semibold transition-all duration-300 ease-in-out"
          to="contact"
          >contact</NuxtLink
        >
        <NuxtLink
          class="text-white text-lg font-semibold transition-all duration-300 ease-in-out"
          to="skills"
          >skills</NuxtLink
        >

        <div class="ml-3">
          <CusotmButton
            text="Download my CV"
            :type="2"
            @click="downloadPrivateFile"
          />
        </div>
      </div>

      <div class="flex md:hidden">
        <div
          class="grid cursor-pointer justify-items-center gap-1.5 lg:hidden"
          @click="isBurgerOpen = !isBurgerOpen"
        >
          <div
            :class="{ 'translate-y-2.5 rotate-45': isBurgerOpen }"
            class="h-1 w-8 rounded-full bg-white transition-transform"
          ></div>
          <div
            :class="{ 'scale-x-0': isBurgerOpen }"
            class="h-1 w-8 rounded-full bg-white transition-transform"
          ></div>
          <div
            :class="{ '-translate-y-2.5 -rotate-45': isBurgerOpen }"
            class="h-1 w-8 rounded-full bg-white transition-transform"
          ></div>
        </div>
      </div>

      <Teleport to="body">
        <Transition name="fade-in-out">
          <TheBurger v-if="isBurgerOpen" />
        </Transition>
      </Teleport>
    </div>
  </div>
</template>

<style scoped></style>
