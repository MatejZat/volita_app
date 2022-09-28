<template>
  <MobileBarTop />
  <slot />
  <MobileBarBottom />
</template>

<script>
import MobileBarTop from "@/components/MobileBar/MobileBarTop";
import MobileBarBottom from "@/components/MobileBar/MobileBarBottom";

export default {
  components: {
    MobileBarTop,
    MobileBarBottom
  },
}
</script>
