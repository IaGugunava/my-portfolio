<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const socials = ref();

const fetchSocials = async () => {
  const { data, error } = await supabaseClient.from("socials").select("*");

  if (!error) {
    socials.value = data;
  } else {
    console.log(error);
  }
};

fetchSocials();
</script>

<template>
  <div>
    <div class="flex gap-4 items-center text-white">
      <div v-for="item in socials" :key="item.id">
        <NuxtLink :to="item?.link">
          <div
            class="[&_svg]:w-6 [&_svg]:h-6 [&_path]:fill-white"
            v-html="item?.image"
          ></div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
