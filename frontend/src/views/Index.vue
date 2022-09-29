<template>
  <section>
    <AppLogo />
  </section>
</template>

<script>
import AppLogo from '@/components/AppLogo'

export default {
  components: {
    AppLogo,
  },
}
</script>

<style lang="scss" scoped>
  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
