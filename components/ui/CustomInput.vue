<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string | number | undefined;
    placeholder?: string;
    type?: string;
    borderStyle?: "Default" | "Underlined";
    required?: boolean;
    error?: string | null;
    transparentBg?: boolean;
  }>(),
  {
    placeholder: "",
    type: "text",
    borderStyle: "Default",
    required: false,
    error: "",
    transparentBg: false
  }
);


const errorText = computed(() => {
  return props.error ? props.error?.toString().toLowerCase() : "";
});

const emit = defineEmits<{
  (e: "update:modelValue", params: typeof props.modelValue): void;
  (e: "change", params: InputEvent): void;
}>();

const input = ref(null);
const isFocused = ref(false);

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
  <div class="bg-white">
    <div
      class="group relative flex items-center overflow-hidden rounded-lg transition-all border border-primary"
    >

      <input
        :id="placeholder"
        ref="input"
        v-model="inputModel"
        class="text-color-text-primary peer h-full w-full p-4 outline-none"
        :class="{
          'pr-0': errorText,
        }"
        :type="type"
        :name="placeholder"
        autocomplete="off"
        :placeholder="placeholder"
        v-bind="$attrs"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="(e) => emit('change', e as InputEvent)"
      />
    </div>

    <transition name="fade-in-out">
      <p v-if="errorText" class="upper absolute px-4 pt-1 text-[12px] text-[#FC5A40]">
        {{ errorText }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
input::placeholder {
  color: #626f86;
  font-size: 16px;
}
</style>
