<script setup lang="ts"></script>

<template>
  <div
    class="container-fluid flex flex-col items-center text-center py-20 bg-dark text-white"
  >
    <h1 class="text-4xl lg:text-5xl font-bold">Hi, I'm [Your Name] 👋</h1>
    <p class="text-xl mt-3 text-gray-300">
      Frontend Developer | Vue & Nuxt Expert
    </p>

    <p class="mt-5 max-w-2xl text-lg text-gray-400">
      I design and develop **high-performance, user-friendly** web applications.
      With a passion for **clean UI, smooth UX, and scalable code**, I help
      businesses bring their ideas to life.
    </p>

    <div class="mt-8 flex gap-4 sm:gap-8 w-full sm:w-fit flex-col sm:flex-row">
      
      <NuxtLink class="w-full sm:w-fit" to="projects">
        <CusotmButton class="w-full sm:w-fit" text="View My Work" />
      </NuxtLink>
      <NuxtLink class="w-full sm:w-fit" to="contact">
        <CusotmButton class="w-full sm:w-fit" text="Let's Connect" :type="2" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
