<template>
  <li class="menu-nav-item" :class="{ 'text-small' : small }">
    <AppButton ripple rippleWhite>
      <a @click.prevent="handleClick" href="#" class="link-wrapper">
        <figure class="icon-wrapper">
            <component :is="icon" />
        </figure>

        <span class="font-nunito">{{ title }}</span>
      </a>
    </AppButton>
  </li>
</template>

<script>
  import AppButton from '@/components/AppButton';
  import IconHome from '@/components/Icons/IconHome';
  import IconCalendar from '@/components/Icons/IconCalendar';
  import IconBell from '@/components/Icons/IconBell';
  import IconSettings from '@/components/Icons/IconSettings';
  import IconLogout from '@/components/Icons/IconLogout';

  export default {
    props: {
      title: String,
      iconName: String,
      routeName: String,
      small: Boolean
    },

    components: {
      AppButton,
      IconHome,
      IconCalendar,
      IconBell,
      IconSettings,
      IconLogout
    },

    computed: {
      icon() {
        return 'Icon' + this.iconName;
      },
    },

    methods: {
      handleClick() {
        this.$store.commit('toggleMenuOpen');
        return this.$router.push({ name: this.routeName });
      },
    },
  }
</script>