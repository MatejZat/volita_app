<template>
  <component v-bind:is="layout"></component>
</template>

<script>
  import AuthLayout from "@/layouts/auth/AuthLayout";
  import AppLayout from "@/layouts/app/AppLayout";

export default {
  components: {
    auth: AuthLayout,
    app: AppLayout
  },
  computed: {
    layout() {
      return this.$store.getters.layout;
    }
  },
}
</script>
