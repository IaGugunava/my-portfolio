<script setup lang="ts">
/**
 * @author Luka Tchigladze
 */

const props = withDefaults(
  defineProps<{
    error?: string | null | Ref<string>;
    modelValue?: any;
    placeholder?: string | null;
    required?: boolean;
  }>(),
  {
    error: "",
    modelValue: "",
    placeholder: "",
    required: false
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", param: typeof props.modelValue): void;
}>();

const errorText = computed(() => {
  if (props.error !== "") {
    return props.error?.toString().toLowerCase();
  } else {
    return "";
  }
});

const inputModel = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  }
});
</script>

<template>
  <div>
    <div
      class="relative overflow-hidden rounded-lg bg-white p-4 border-primary"
    >
      <textarea
        v-model="inputModel"
        class="h-40 w-full resize-none text-dark outline-none"
        :placeholder="required ? placeholder + ' *' : placeholder || ''"
      />
      <div v-if="error" class="absolute right-4 top-1">
        <base-icon :width="24" :height="24" icon="warning" color="#E34935" />
      </div>
    </div>

    <transition name="fade">
      <p v-if="error" class="absolute px-4 pt-1 text-color-text-danger">
        {{ errorText }}
      </p>
    </transition>
  </div>
</template>
