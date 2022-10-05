<template>
  <li class="menu-nav-item" :class="{ 'text-small' : small }">
    <AppButton ripple rippleWhite>
      <a @click.prevent="handleClick" href="#" class="link-wrapper">
        <figure class="icon-wrapper">
            <AppIcon :iconName="iconName" />
        </figure>

        <span class="font-nunito">{{ title }}</span>
      </a>
    </AppButton>
  </li>
</template>

<script>
  import AppButton from '@/components/AppButton';
  import AppIcon from '@/components/AppIcon';

  export default {
    props: {
      title: String,
      iconName: String,
      routeName: String,
      small: Boolean
    },

    components: {
      AppButton,
      AppIcon
    },

    methods: {
      handleClick() {
        this.$store.commit('toggleMenuOpen');
        return this.$router.push({ name: this.routeName });
      },
    },
  }
</script>