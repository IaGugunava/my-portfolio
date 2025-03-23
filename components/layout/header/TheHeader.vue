<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between items-center w-full bg-dark p-5">
        <a class="text-white" href="/">logo?</a>
        <div class="flex items-center gap-3">
            <NuxtLink class="text-white" to="about">about me</NuxtLink>
            <NuxtLink class="text-white" to="projects">projects</NuxtLink>
            <NuxtLink class="text-white" to="contact">contact</NuxtLink>

            <div class="ml-3">
                <CusotmButton text="Download my CV" :type="2"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>