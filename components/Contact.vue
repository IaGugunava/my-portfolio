<script setup lang="ts">
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const supabaseClient = useSupabaseClient();

const form = reactive({
  name: "",
  email: "",
  body: "",
});

const formRules = {
  name: { required },
  email: { required, email },
  body: { required }
};

const formDataStatus = ref(false);

const v$ = useVuelidate(formRules, form, { $lazy: true });

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

    try{
        // @ts-ignore
        const { error } = await supabaseClient.from("contacts").insert({
            name: form.name,
            email: form.email,
            body: form.body
        });

        if(error) throw error;
    } catch(err){
        console.log(err)
    }

}
</script>

<template>
  <div class="py-20">
    <div class="container-fluid">
        <div class="w-full flex justify-center">
          <h2 class="text-4xl font-bold text-primary">Contact me</h2>
        </div>
        <div class="flex flex-wrap mt-8 gap-6">
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
            placeholder="body"
            @update:model-value="(e: any) => form.body = e"
          />

          <CusotmButton text="submit" @click="submitForm"/>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
se
