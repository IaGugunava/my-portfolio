<script setup lang="ts">
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const supabaseClient = useSupabaseClient();

const imgSource = computed(() => data?.value?.data?.publicUrl);

const elementWrapper = ref(null)

const animateelement = () => {
  gsap.from(elementWrapper.value, {
    scrollTrigger: {
      trigger: elementWrapper.value,
      start: "top bottom-=100",
      onToggle: (scrollTrigger) => {
        scrollTrigger.refresh();
      }
    },
    opacity: 0,
    duration: 1.2,
    ease: 'power2.in'
  })
}

onMounted(() => {
  animateelement();
})

const { data, error } = await useAsyncData(
  'aboutme',
  async () => await supabaseClient.storage.from("avatars").getPublicUrl("for-portfolio.jpeg")
)


</script>

<template>
  <div class="py-5 md:py-20 bg-white text-gray-900">
    <div class="container-fluid flex flex-col-reverse md:flex-row gap-6 md:gap-0 opacity-100" ref="elementWrapper">
      <div>
        <NuxtImg :src="imgSource" alt="profile image" class="aspect-[500/600] max-w-full md:max-w-[600px] object-cover"/>
      </div>
      <div class="max-w-4xl w-full md:w-1/2 mx-auto text-left">
        <h2 class="text-2xl sm:text-4xl font-bold text-[#6A0572]">About Me</h2>
        <p class="mt-4 text-md sm:text-lg text-gray-600">
          I'm Ia Gugunava, a <span class="text-primary font-semibold">Web Developer</span> with expertise in
          <span class="text-primary font-semibold">Vue.js, Nuxt, Express.js and modern web technologies</span>. I specialize in
          building high-performance, user-friendly applications that enhance
          digital experiences.
        </p>

        <div class="mt-8 text-left">
          <h3 class="text-lg sm:text-2xl font-semibold text-[#6A0572]">
            What I Do
          </h3>
          <ul class="mt-3 space-y-3 text-gray-700">
            <li class="font-semibold">✅ Develop responsive, scalable web applications</li>
            <li class="font-semibold">✅ Create pixel-perfect UI with great UX</li>
            <li class="font-semibold">✅ Optimize performance for seamless experiences</li>
            <li class="font-semibold">✅ Solve complex frontend challenges with Vue & Nuxt</li>
          </ul>

          <h3 class="mt-8 text-lg sm:text-2xl font-semibold text-[#6A0572]">
            Why Work With Me?
          </h3>
          <p class="mt-3 text-gray-700">
            With <span class="text-primary font-semibold">over 3 years</span> of experience in frontend development, I’ve
            worked on large-scale projects and collaborated with teams to
            deliver <span class="text-primary font-semibold">clean, efficient, and scalable</span> code. I am passionate
            about <span class="text-primary font-semibold">solving problems, optimizing performance, and making the web
            better.</span>
          </p>
        </div>
        <div class="w-full flex justify-center items-center">
          <div
            class="mt-10 flex gap-4 sm:gap-8 w-full sm:w-fit flex-col sm:flex-row items-center"
          >
            <NuxtLink class="w-full sm:w-fit" to="projects">
              <CusotmButton class="w-full sm:w-fit" text="See My Work" />
            </NuxtLink>
            <NuxtLink class="w-full sm:w-fit" to="contact">
              <CusotmButton
                class="w-full sm:w-fit"
                text="Let's Connect"
                :type="3"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
