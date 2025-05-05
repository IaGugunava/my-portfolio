<script setup lang="ts">

const supabaseClient = useSupabaseClient();

const skills = ref();

const fetchSkills = async () => {
    const { data, error } = await supabaseClient.from('technologies').select('*');

    if(!error){
        skills.value = data;
    } else {
        console.log(error)
    }

}

fetchSkills()

</script>

<template>
    <div class="container-fluid py-20 bg-dark items-center flex flex-col gap-12 md:gap-8 justify-center">
        <h2 class="font-semibold text-2xl sm:text-4xl text-white w-fit">My Skills</h2>

        <div class="grid gap-4 md:gap-6 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 w-full" >
            <div v-for="item in skills" :key="item?.id">
                <NuxtLink :to="item?.link ? item?.link : '#'" class="flex flex-col gap-2 items-center justify-center">
                    <div class="[&_svg]:w-8 [&_svg]:h-8 sm:[&_svg]:w-10 sm:[&_svg]:h-10" v-html="item?.image"></div>
                    <p class="text-white text-center">{{ item?.name }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>