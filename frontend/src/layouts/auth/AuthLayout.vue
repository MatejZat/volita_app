<template>
  <main>
    <router-view />
  </main>
</template>

<script>
  import "@/assets/sass/auth/auth.scss";

  export default {
    name: "AuthLayout",
    created() {
      document.querySelector('body').classList.add('auth');
    },

    unmounted() {
      document.body.classList.remove('auth')
    },
  }
</script>