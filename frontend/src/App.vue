<template>
  <MobileLayout v-if="isMobile">
    <router-view />
  </MobileLayout>

  <DesktopLayout v-else>
    <router-view />
  </DesktopLayout>
</template>

<script>
import MobileLayout from "@/layouts/MobileLayout";
import DesktopLayout from "@/layouts/DesktopLayout";

export default {
  components: {
    MobileLayout,
    DesktopLayout
  },

  data() {
    return {
      isMobile: true
    }
  },

  mounted() {
    window.addEventListener('resize', this.switchLayout)
  },

  methods: {
    switchLayout() {
      window.innerWidth < 1024 ? this.isMobile = true : this.isMobile = false
    }
  },
}
</script>