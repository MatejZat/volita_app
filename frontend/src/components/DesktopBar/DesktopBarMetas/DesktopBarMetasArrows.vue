<template>
  <div class="desktop-bar-metas-arrows">
    <AppButton @click="goBack" ripple>
      <AppIcon icon-name="ArrowLeft" />
    </AppButton>

    <AppButton @click="goForward" ripple>
      <AppIcon icon-name="ArrowRight" />
    </AppButton>
  </div>
</template>

<script>
  import AppButton from "@/components/AppButton";
  import AppIcon from '@/components/AppIcon';

  export default {
    components: {
      AppButton,
      AppIcon,
    },

    methods: {
      goForward() {
        return this.$router.go(1);
      },

      goBack() {
        return this.$router.go(-1);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .desktop-bar-metas-arrows {
    display: flex;

    button:first-child {
      margin-right: rem(10);
    }
  }
</style>