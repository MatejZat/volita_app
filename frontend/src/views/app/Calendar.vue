<template>
  <section>
    <AppForm @submit.prevent="submit">
      <FormWrapper :cols="3">
        <AppInput label="Label" placeholder="asdasd" required />
        <AppInput label="Fajne" placeholder="Input..." type="primary" />
        <AppInput label="gud" placeholder="Input..." type="alert" />
        <AppInput label="Poznamka" :textareaRows="6" textarea />
        <AppInput label="daco" placeholder="Input..." type="error" required />
      </FormWrapper>

      <AppButton type="primary" submit>Submit</AppButton>
    </AppForm>
  </section>
</template>

<script>
  import AppForm from '@/components/Form/AppForm';
  import AppInput from '@/components/Form/AppInput';
  import AppButton from '@/components/AppButton';
  import FormWrapper from '@/components/Form/FormWrapper';

  export default {
    components: {
      AppForm,
      AppInput,
      AppButton,
      FormWrapper
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
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
