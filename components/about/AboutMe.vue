<script setup lang="ts"></script>

<template>
  <div class="py-20 bg-white text-gray-900">
    <div class="container-fluid ">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl font-bold text-[#6A0572]">About Me</h2>
        <p class="mt-4 text-md sm:text-lg text-gray-600">
          I'm **[Your Name]**, a **Frontend Developer** with expertise in
          **Vue.js, Nuxt, and modern web technologies**. I specialize in building
          **high-performance, user-friendly** applications that enhance digital
          experiences.
        </p>
  
        <div class="mt-8 text-left">
          <h3 class="text-lg sm:text-2xl font-semibold text-[#6A0572]">What I Do</h3>
          <ul class="mt-3 space-y-3 text-gray-700">
            <li>✅ **Develop responsive, scalable web applications**</li>
            <li>✅ **Create pixel-perfect UI with great UX**</li>
            <li>✅ **Optimize performance for seamless experiences**</li>
            <li>✅ **Solve complex frontend challenges with Vue & Nuxt**</li>
          </ul>
  
          <h3 class="mt-8 text-lg sm:text-2xl font-semibold text-[#6A0572]">
            Why Work With Me?
          </h3>
          <p class="mt-3 text-gray-700">
            With **[X] years** of experience in frontend development, I’ve worked
            on **large-scale projects** and collaborated with teams to deliver
            **clean, efficient, and scalable** code. I am passionate about
            **solving problems, optimizing performance, and making the web
            better**.
          </p>
        </div>
        <div class="w-full flex justify-center items-center">
  
            <div class="mt-10 flex gap-4 sm:gap-8 w-full sm:w-fit flex-col sm:flex-row items-center">
              <NuxtLink class="w-full sm:w-fit" to="projects">
                <CusotmButton class="w-full sm:w-fit" text="See My Work" />
              </NuxtLink>
              <NuxtLink class="w-full sm:w-fit" to="contact">
                <CusotmButton class="w-full sm:w-fit" text="Let's Connect" :type="3" />
              </NuxtLink>
             
            </div>
        </div>
  
      </div>
    </div>
  </div>
</template>

<style scoped></style>
