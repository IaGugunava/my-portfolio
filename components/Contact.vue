<script setup lang="ts">
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const supabaseClient = useSupabaseClient();

const runtimeConfig = useRuntimeConfig();

const form = reactive({
  name: "",
  email: "",
  body: "",
});

const formRules = {
  name: { required },
  email: { required, email },
  body: { required },
};

const formDataStatus = ref(false);
const token = ref()
// const captchaKey = ;

const v$ = useVuelidate(formRules, form, { $lazy: true });


// async function verifyCaptcha(token: string): Promise<boolean> {
//   const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body: new URLSearchParams({
//       response: token
//     })
//   })

//   const data = await response.json()
//   return data.success === true
// }


const resetForm = () => {
  formDataStatus.value = true;
  setTimeout(() => {
    form.name = "";
    form.email = "";
    form.body = "";
    v$.value.$reset();
    formDataStatus.value = false;
  }, 3000);
};

const submitForm = async () => {
  const valid = await v$.value.$validate();

  if (!valid) return;

  // const captchaToken = token.value;

  // const verified = await verifyCaptcha(captchaToken)

  // if (!verified) {
  // throw new Error("CAPTCHA failed")
  // }


  try {
    // @ts-ignore
    const { error } = await supabaseClient.from("contact_form").insert({
      name: form.name,
      email: form.email,
      body: form.body,
    });

    if (error) throw error;

    resetForm()
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <div class="">
    <div class="flex flex-wrap mt-14 gap-6">
      <CustomInput
        class="w-[calc(50%-12px)]"
        :error="v$.name?.$errors?.[0]?.$message.toString()"
        :model-value="form.name"
        placeholder="name"
        @update:model-value="(e: any) => form.name = e"
      />
      <CustomInput
        class="w-[calc(50%-12px)]"
        :error="v$.email?.$errors?.[0]?.$message.toString()"
        :model-value="form.email"
        placeholder="email"
        @update:model-value="(e: any) => form.email = e"
      />

      <CustomTextArea
        class="w-full"
        :error="v$.body?.$errors?.[0]?.$message.toString()"
        :model-value="form.body"
        placeholder="message"
        @update:model-value="(e: any) => form.body = e"
      />

      <NuxtTurnstile v-model="token" :site-key="runtimeConfig?.turnstileKey?.toString()"/>

      <div class="flex w-full justify-center items-center">
        <CusotmButton text="submit" @click="submitForm" />
      </div>

      <div>
        <NuxtLink/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

