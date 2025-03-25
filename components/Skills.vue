<script setup lang="ts">

const supabase = useSupabaseClient();

const skills = ref();

const fetchSkills = async () => {
    const { data, error } = await supabase.from('technologies').select('*');

    if(!error){
        skills.value = data;
    } else {
        console.log(error)
    }

    console.log(skills.value, '~~~~~~~~~~~~~~~~~~~~')
}

</script>

<template>
    <div class="container-fluid py-20 bg-dark flex items-center justify-center">
        <h2 class="font-semibold text-4xl text-white w-fit">My Skills</h2>

        <!-- <div class="flex flex-wrap "></div> -->
    </div>
</template>

<style scoped>

</style>