<script setup lang="ts">
defineProps<{
  image: string | undefined;
}>();
</script>

<template>
  <div class="py-20 bg-dark">
    <div class="container-fluid">
      <div class="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
        <div class="w-full md:w-1/3 flex flex-col justify-center">
          <h1 class="text-white text-4xl font-bold mb-4">✨ About Me</h1>
          <p class="text-white text-lg">
            Hi, I’m Wind — a frontend developer with a passion for crafting
            delightful user experiences. I specialize in building fast,
            accessible, and visually appealing web applications using modern
            technologies like Vue, Nuxt, and React. With over 2 years of
            professional experience and a background in large-scale projects, I
            thrive on turning complex problems into simple, elegant solutions.
            Whether it’s creating smooth animations, architecting scalable
            components, or diving deep into the latest frontend trends, I’m
            always exploring how to bridge creativity with code.
          </p>
        </div>

        <div class="w-full md:w-1/2 flex justify-center relative">
            <NuxtImg :src="image" alt="profile image" class="aspect-[500/600] max-w-full md:max-w-[500px] object-cover"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
