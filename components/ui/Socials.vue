<script setup lang="ts">
defineProps<{
  isColored?: boolean;
}>();

const supabaseClient = useSupabaseClient();

const socials: Ref<any> = computed(() => data?.value?.data);

const { data, error } = await useAsyncData(
  'socials',
  async () => await supabaseClient.from('socials').select('*')
)

</script>

<template>
  <div>
    <div class="flex gap-4 items-center text-white">
      <div v-for="item in socials" :key="item.id">
        <NuxtLink :to="item?.link">
          <div
            class="[&_svg]:w-6 [&_svg]:h-6 "
            :class="{'[&_path]:fill-white': !isColored, '[&_path]:fill-primary': isColored}"
            v-html="item?.image"
          ></div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
