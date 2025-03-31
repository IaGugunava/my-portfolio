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
    <div class="container-fluid py-20 bg-dark items-center flex flex-col gap-8 justify-center">
        <h2 class="font-semibold text-4xl text-white w-fit">My Skills</h2>

        <div class="grid gap-6 grid-cols-8 w-full" >
            <div v-for="item in skills" :key="item?.id">
                <NuxtLink :to="item?.link ? item?.link : '#'" class="flex flex-col gap-2 items-center justify-center">
                    <div class="[&_svg]:w-10 [&_svg]:h-10" v-html="item?.image"></div>
                    <p class="text-white">{{ item?.name }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>