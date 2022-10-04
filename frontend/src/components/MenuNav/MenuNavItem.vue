<template>
  <li class="nav-item" :class="{ 'text-small' : small }">
    <a @click.prevent="handleClick" href="#" class="link-wrapper">
      <figure class="icon-wrapper">
          <component :is="icon" />
      </figure>

      <span class="font-nunito">{{ title }}</span>
    </a>

    <div v-show="isDropdownOpen">
      <slot />
    </div>
  </li>
</template>

<script>
  // Icons
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
      IconHome,
      IconCalendar,
      IconBell,
      IconSettings,
      IconLogout
    },

    data() {
      return {
        isDropdownOpen: false
      }
    },

    computed: {
      icon() {
        return 'Icon' + this.iconName;
      },
    },

    methods: {
      handleClick() {
        if( this.routeName ) {
          this.$store.commit('toggleMenuOpen');
          return this.$router.push({ name: this.routeName });
        } else {
          this.toggleDropdown();
        }
      },

      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      }
    },
  }
</script>

<style lang="scss">
  .nav-item {

    .link-wrapper {
      display: flex;
      align-items: center;
    }

    .icon-wrapper {
      margin-right: rem(10);
    }

    svg {
      width: rem(26);

      @include breakpointUp($md) {
        width: rem(32);
      }
    }

    a {
      font-size: rem(20);

      @include breakpointUp($md) {
        font-size: rem(24);
      }
    }
  }

  .text-small {
    .icon-wrapper {
      margin-right: rem(6);
    }

    svg {
      width: rem(16);

      @include breakpointUp($md) {
        width: rem(20);
      }
    }

    a {
      font-size: rem(10) !important;

      @include breakpointUp($md) {
        font-size: rem(13) !important;
      }
    }
  }
</style>