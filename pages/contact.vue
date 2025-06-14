<script setup lang="ts">
const supabaseClient = useSupabaseClient();

const { data, error } = await useAsyncData(
  "contacts",
  async () => await supabaseClient.from("contacts").select("*")
);

const contacts: Ref<any> = computed(() => data?.value?.data?.[0]);
</script>

<template>
  <div class="container-fluid flex py-20 gap-20">
    <div class="w-[calc(50%-40px)]">
      <Contact />
    </div>
    <div class="w-[calc(50%-40px)] flex flex-col items-start gap-4 justify-center">
      <p>
        Have a project in mind, want to collaborate, or just want to say hello?
        I’d love to hear from you. Reach out via the email or connect through
        one of the platforms listed.
      </p>
      <NuxtLink class="flex gap-2 items-center" :to="contacts?.url">
        <div class="flex-shrink-0 w-8 h-8 [&_svg]:w-full [&_svg]:h-full [&_path]:fill-primary" v-html="contacts?.icon"></div>
        <p>
          {{ contacts?.field }}
        </p>
      </NuxtLink>
      <Socials :is-colored="true"/>
    </div>
  </div>
</template>

<style scoped></style>
