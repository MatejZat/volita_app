<template>
  <component :is="icon" />
</template>

<script>
  import IconHome from '@/components/Icons/IconHome';
  import IconCalendar from '@/components/Icons/IconCalendar';
  import IconBell from '@/components/Icons/IconBell';
  import IconSettings from '@/components/Icons/IconSettings';
  import IconLogout from '@/components/Icons/IconLogout';
  import IconPlus from '@/components/Icons/IconPlus';
  import IconChevRight from '@/components/Icons/IconChevRight';
  import IconChevLeft from '@/components/Icons/IconChevLeft';
  import IconMenu from '@/components/Icons/IconMenu';
  import IconSearch from '@/components/Icons/IconSearch';

  export default {
    props: {
      iconName: String,
    },

    components: {
      IconHome,
      IconCalendar,
      IconBell,
      IconSettings,
      IconLogout,
      IconPlus,
      IconChevRight,
      IconChevLeft,
      IconMenu,
      IconSearch
    },

    computed: {
      icon() {
        return 'Icon' + this.iconName;
      },
    },
  }
</script>
