<template>
  <li ref="itemWrapper" :class="[textSizeClass, isDropdownClass]">
    <AppButton @click.stop="handleClick" class="link-wrapper" ripple ripple-white>
      <div class="link">
        <figure class="icon-wrapper">
            <AppIcon :icon-name="iconName" />
        </figure>

        <transition name="fade">
          <span v-show="checkExpansion" class="font-nunito">{{ title }}</span>
        </transition>
      </div>

      <transition name="fade">
        <figure v-if="isDropdown && checkExpansion" class="icon-dropdown">
          <AppIcon icon-name="ChevDown" />
        </figure>
      </transition>
    </AppButton>

    <ul v-if="isDropdown" ref="dropdownMenu" class="menu-nav-dropdown">
      <slot :closeDropdown="handleClick" />
    </ul>
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
      isMenuExpanded: String,
      small: Boolean,
      isDropdown: Boolean,
    },

    components: {
      AppButton,
      AppIcon
    },

    computed: {
      isDropdownClass() {
        return this.isDropdown ? ['menu-nav-item-dropdown', this.isMenuExpandedClass] : 'menu-nav-item';
      },

      isMenuExpandedClass() {
        return 'is-' + this.isMenuExpanded;
      },

      textSizeClass() {
        return this.small ? 'text-small' : '';
      },

      checkExpansion() {
        return this.isMenuExpanded === 'expanded' || window.innerWidth <= 1024 ? true : false;
      }
    },

    methods: {
      handleClick() {
        if( this.isDropdown ) {
          requestAnimationFrame(this.toggleDropdown);
        } else {
          this.$store.commit('toggleMenuOpen');
          return this.$router.push({ name: this.routeName });
        }
      },

      toggleDropdown() {
        const dropdownMenu = this.$refs.dropdownMenu;
        const itemWrapper = this.$refs.itemWrapper;
        const dropdownMenus = document.querySelectorAll('.menu-nav-dropdown');
        const dropdownMenuHeight = dropdownMenu.scrollHeight;

        function closeDropdowns() {
          dropdownMenus.forEach((item) => {
            const parent = item.parentElement;

            item.style.maxHeight = '';
            parent.classList.remove('dropdown-open');
            itemWrapper.classList.add('dropdown-open');
          });
        }

        if( this.isMenuExpanded === 'expanded' || window.innerWidth <= 1024 ) {
          if( dropdownMenu.style.maxHeight ) {
            dropdownMenu.style.maxHeight = '';
            itemWrapper.classList.remove('dropdown-open');
          } else if( dropdownMenuHeight > 200 ) {
            const deviceAdjust = window.innerWidth > 1024 ? dropdownMenuHeight + 'px' : '200px';
            const deviceOverflow = window.innerWidth > 1024 ? 'none' : 'auto';

            closeDropdowns();
            dropdownMenu.style.maxHeight = deviceAdjust;
            dropdownMenu.style.overflowY = deviceOverflow;
          } else {
            closeDropdowns();
            dropdownMenu.style.maxHeight = dropdownMenuHeight + 'px';
          }
        }
      }
    },

    watch: {
      isMenuExpanded() {
        const dropdownMenu = this.$refs.dropdownMenu;

        if( this.isDropdown ) {
          if( this.isMenuExpanded === 'hidden' ) {
            dropdownMenu.style.maxHeight = 'none';
          } else {
            dropdownMenu.style.maxHeight = '';
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all $defaultSpeed;
  }
</style>