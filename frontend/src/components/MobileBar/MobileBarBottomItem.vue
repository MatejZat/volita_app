<template>
  <router-link to="/" class="mobile-bottom-bar-item" :class="{'mobile-bottom-bar-item-active': isActive, 'mobile-bottom-bar-item-expand': isExpanded}">
    <figure class="icon-wrapper">
      <img :src="iconPath" alt="Home icon">
    </figure>

    <h6>{{ title }}</h6>
  </router-link>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    isExpanded: Boolean,
    icon: String,
    title: String
  },

  computed: {
    iconPath() {
      return require(`@/assets/img/icons/${this.icon}`)
    }
  },
}
</script>

<style lang="scss" scoped>
.mobile-bottom-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-active {
    color: $primary;
  }

  &-expand {
    .icon-wrapper {
      padding: rem(10);
      border-radius: 100%;
      background: $primary;
    }
  }

  h6 {
    font-size: $font10;

    @include breakpointUp($md) {
      font-size: $font12;
    }
  }

  .icon-wrapper {
    margin-bottom: rem(4);

    @include breakpointUp($md) {
      img {
        width: 32px;
      }
    }
  }
}
</style>