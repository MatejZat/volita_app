<template>
  <div class="app-input">
    <label v-if="label" class="font-nunito" :class="{ 'required' : required }">{{ label }}</label>

    <div class="input-container">
      <figure v-if="iconName" class="input-icon">
        <AppIcon :iconName="iconName" />
      </figure>

      <input type="text" :placeholder="placeholder" :required="required" class="font-nunito" :class="[inputTypeClass, inputHasIcon]" >
    </div>
  </div>
</template>

<script>
  import AppIcon from '@/components/AppIcon';

  export default {
    props: {
      label: String,
      placeholder: String,
      iconName: String,
      type: String,
      required: Boolean
    },

    components: {
      AppIcon
    },

    computed: {
      inputTypeClass() {
        return this.type + '-input';
      },

      inputHasIcon() {
        return this.iconName ? 'border-icon' : '';
      }
    },
  }
</script>

<style lang="scss" scoped>
.app-input {
  width: 100%;

  label {
    margin-left: rem(6);
    margin-bottom: rem(4);
    display: block;
    font-size: $fontLittle;
  }

  input {
    padding: rem(8);
    width: 100%;
    font-size: $fontLittle;
    border: 2px solid $primaryContrast;
    border-radius: 6px;
    transition: border-color $inputSpeed;

    @include breakpointUp($md) {
      padding: rem(10);
    }

    ::placeholder {
      color: $lowContrast;
    }

    &:hover {
      border-color: rgba($primary, 0.5);
    }

    &:focus {
      border-color: $primary;
    }
  }

  .alert-input {
    border-color: $alert;

    &:hover,
    &:focus {
      border-color: $alert;
    }
  }

  .error-input {
    border-color: $error;
    color: $error;

    &:hover,
    &:focus {
      border-color: $error;
    }
  }

  .required:before {
    content: "*";
    margin-right: rem(4);
    color: $primary;
  }

  .border-icon {
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .input-container {
    display: flex;
    border-radius: 6px;
    overflow: hidden;

    .input-icon {
      min-width: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white;
      background: $primary;

      svg {
        width: 18px;
      }

      @include breakpointUp($md) {
        min-width: 40px;

        svg {
          width: 22px;
        }
      }

    }
  }
}
</style>