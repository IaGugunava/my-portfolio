<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const downloadPrivateFile = async () => {
  const { data } = await supabaseClient
    .storage
    .from('resume')
    .getPublicUrl('newcv/ia-gugunava.pdf')

  // if (error) {
  //   console.error('Error generating signed URL:', error)
  //   return
  // }


  try {
    const response = await fetch(data.publicUrl)
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'ia-gugunava.pdf'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Download failed:', err)
  }
}
</script>

<template>
    <div class="flex justify-between items-center w-full bg-dark p-5">
        <a class="text-white" href="/">logo?</a>
        <div class="flex items-center gap-5">
            <NuxtLink class="text-white text-lg font-semibold transition-all duration-300 ease-in-out" to="about">about me</NuxtLink>
            <NuxtLink class="text-white text-lg font-semibold transition-all duration-300 ease-in-out" to="projects">projects</NuxtLink>
            <NuxtLink class="text-white text-lg font-semibold transition-all duration-300 ease-in-out" to="contact">contact</NuxtLink>
            <NuxtLink class="text-white text-lg font-semibold transition-all duration-300 ease-in-out" to="skills">skills</NuxtLink>

            <div class="ml-3">
                <CusotmButton text="Download my CV" :type="2" @click="downloadPrivateFile"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>