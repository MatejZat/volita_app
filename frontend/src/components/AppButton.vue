<template>
  <button v-if="ripple" @click="rippleEffect" ref="rippleButton" class="custom-button">
    <slot/>
  </button>

  <button v-else-if="submit" class="font-nunito" :class="[buttonType, buttonStretch]" type="submit">
    <slot/>
  </button>

  <RouterLink v-else :to="{ name: hrefName }" class="font-nunito" :class="[buttonType, buttonStretch]">
    <slot/>
  </RouterLink>
</template>

<script>
export default {
  props: {
    href: String,
    type: String,
    rippleColor: String,
    hrefName: String,
    ripple: Boolean,
    ghost: Boolean,
    stretch: Boolean,
    submit: Boolean
  },

  computed: {
    buttonStretch() {
      return this.stretch ? 'button-stretch' : 'button';
    },

    buttonType() {
      return this.type + '-button' + this.isGhost;
    },

    isGhost() {
      return this.ghost ? '-ghost' : '';
    }
  },

  methods: {
    rippleEffect(event) {
      const button = this.$refs.rippleButton;
      const circle = document.createElement('span');
      const diameter = Math.max(circle.clientWidth, circle.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${circle}px`;
      circle.style.left = `${event.clientX - (button.getBoundingClientRect().left + radius)}px`;
      circle.style.top = `${event.clientY - (button.getBoundingClientRect().top + radius)}px`;
      circle.classList.add('ripple');

      const ripple = button.querySelector('.ripple');

      if( ripple ) ripple.remove();

      button.appendChild(circle);
    }
  },
}
</script>

<style lang="scss">
  .custom-button {
    padding: rem(1);
    position: relative;
    display: block;
    border-radius: 4px;
    overflow: hidden;

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .ripple {
      width: 10px;
      height: 10px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 10px;
      transform: scale(0);
      background: rgba($primary, 0.3);

      animation: ripple 500ms ease-out;
    }

    @keyframes ripple {
      to {
        transform: scale(20);
        opacity: 0;
      }
    }
  }

  .button {
    padding: rem(8) rem(22);
    display: inline-block;
    position: relative;
    z-index: 1;
    overflow: hidden;
    color: $white;
    border-radius: 6px;
    transition: background-color $defaultSpeed;

    &-stretch {
      @extend .button;
      width: 100%;
      text-align: center;
    }
  }

  // Generate from mixin
  .primary-button {
    @include buttonGenerator($primary);
  }

  .alert-button {
    @include buttonGenerator($alert);
  }

  .error-button {
    @include buttonGenerator($error);
  }
</style>