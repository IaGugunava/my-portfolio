<script setup lang="ts"></script>

<template>
  <div
    class="container-fluid flex flex-col items-center text-center py-20 bg-dark text-white"
  >
    <h1 class="text-5xl font-bold">Hi, I'm [Your Name] 👋</h1>
    <p class="text-xl mt-3 text-gray-300">
      Frontend Developer | Vue & Nuxt Expert
    </p>

    <p class="mt-5 max-w-2xl text-lg text-gray-400">
      I design and develop **high-performance, user-friendly** web applications.
      With a passion for **clean UI, smooth UX, and scalable code**, I help
      businesses bring their ideas to life.
    </p>

    <div class="mt-8 flex gap-4 xs:gap-8 flex-col xs:flex-row">
      
      <NuxtLink to="projects">
        <CusotmButton text="View My Work" />
      </NuxtLink>
      <NuxtLink to="contact">
        <CusotmButton text="Let's Connect" :type="2" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
