<script setup lang="ts">
import { gsap } from 'gsap'

const supabaseClient = useSupabaseClient();

const skills: Ref<any> = computed(() => data?.value?.data?.slice(0, 12));

const { data, error } = await useAsyncData(
  'skills',
  async () => await supabaseClient.from('technologies').select('*')
)

const animateElements = () => {
  const items = gsap.utils.toArray('.skill-item')

  items.forEach((item: any, index) => {
    gsap.from(item, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
})
}

onMounted(async () => {
  await nextTick()

  animateElements()
})

</script>

<template>
    <div class="container-fluid py-20 bg-dark items-center flex flex-col gap-12 justify-center">
        <h2 class="font-semibold text-2xl sm:text-4xl text-white w-fit">My Skills</h2>

        <div class="grid gap-4 md:gap-6 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 w-full" >
            <div v-for="item in skills" :key="item?.id" class="skill-item">
                <NuxtLink :to="item?.link ? item?.link : '#'" class="flex flex-col gap-2 items-center justify-center">
                    <div class="[&_svg]:w-8 [&_svg]:h-8 sm:[&_svg]:w-10 sm:[&_svg]:h-10" v-html="item?.image"></div>
                    <p class="text-white text-center">{{ item?.name }}</p>
                </NuxtLink>
            </div>

          </div>
          <NuxtLink class="w-full flex justify-center items-center" to="/skills">
            <CusotmButton text="discover more" :type="2"/>
          </NuxtLink>
    </div>
</template>

<style scoped>

</style>