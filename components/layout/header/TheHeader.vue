<script setup lang="ts">

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
                <CusotmButton text="Download my CV" :type="2"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>