<template>
  <div class="logo-container">
    <RouterLink to="/">
      <AppLogo />
    </RouterLink>
  </div>
</template>

<script>
  import AppLogo from '@/components/AppLogo';

  export default {
    components: {
      AppLogo,
    },
  }
</script>