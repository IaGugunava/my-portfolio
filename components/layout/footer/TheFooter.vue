<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const socials = ref();

const fetchSocials = async () => {
    const { data, error } = await supabaseClient.from('socials').select('*');

    if(!error){
        socials.value = data;
    } else {
        console.log(error)
    }

}

fetchSocials()
</script>

<template>
  <div class="mt-20 bg-dark mx-auto py-20">
    <div class="container-fluid flex flex-col gap-8 justify-center items-center">
      <h2 class="text-white max-w-[800px] text-center text-xl">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </h2>

      <div class="flex gap-4 items-center text-white">
        <div v-for="item in socials" :key="item.id">
          <NuxtLink :to="item?.link">
            <div class="[&_svg]:w-6 [&_svg]:h-6 [&_path]:fill-white" v-html="item?.image"></div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
