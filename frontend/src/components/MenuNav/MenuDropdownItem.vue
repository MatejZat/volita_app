<template>
  <li class="dropdown-item">
    <a @click.prevent="handleClick" href="#">
      <h3>
        <slot />
      </h3>
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      routeName: String,
    },

    methods: {
      handleClick() {
        this.$router.push({ name: this.routeName });
        this.$store.commit('toggleMenuOpen');
        this.$emit('routeChange');
      }
    },
  }
</script>

<style lang="scss" scoped>
  .dropdown-item {
    a {
      font-size: rem(16);
    }
  }
</style>