<template>
  <section>
    <AppLogo />

    <AppForm @submit.prevent="submit" cols="1">
      <AppInput label="Label" placeholder="asdasd" required />
      <AppInput label="Fajne" placeholder="Input..." type="primary" />
      <AppInput label="gud" placeholder="Input..." type="alert" />
      <AppInput label="daco" placeholder="Input..." type="error" required />

      <AppButton type="primary" stretch submit>Submit</AppButton>
    </AppForm>
  </section>
</template>

<script>
import AppLogo from '@/components/AppLogo';
import AppForm from "@/components/Form/AppForm";
import AppInput from '@/components/Form/AppInput';
import AppButton from "@/components/AppButton";

export default {
  components: {
    AppLogo,
    AppForm,
    AppInput,
    AppButton
  },

  methods: {
    submit() {
      console.log('asdasdasd')
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
