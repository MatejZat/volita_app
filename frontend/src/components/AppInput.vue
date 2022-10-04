<template>
  <div class="app-input">
    <label v-if="label" class="font-nunito" :class="{ 'required' : required }">{{ label }}</label>

    <div class="input-container">
      <div class="input-icon">
        <IconChevLeft />
      </div>

      <input type="text" :placeholder="placeholder" required="required" class="font-nunito" >
    </div>
  </div>
</template>

<script>
  import IconChevLeft from '@/components/Icons/IconChevLeft';

  export default {
    props: {
      label: String,
      placeholder: String,
      required: Boolean
    },

    components: {
      IconChevLeft,
    },
  }
</script>

<style lang="scss" scoped>
.app-input {
  width: 100%;

  label {
    margin-bottom: rem(4);
    display: block;
    font-size: $fontLittle;
  }

  input {
    padding: rem(10);
    width: 100%;
    font-size: $font12;
    border: 2px solid $primaryContrast;
    border-left: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    ::placeholder {
      color: $lowContrast;
    }
  }

  .required:before {
    content: "*";
    margin-right: rem(4);
    color: $primary;
  }

  .input-container {
    display: flex;
    border-radius: 6px;
    overflow: hidden;

    .input-icon {
      min-width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      background: $primary;

      .vue-feather {
        width: 14px;
      }
    }
  }
}
</style>