<template>
  <li ref="dropdownWrapper" class="menu-nav-item-dropdown" :class="{ 'text-small' : small }">
    <AppButton ripple rippleWhite>
      <a @click.prevent="toggleDropdown" href="#" class="link-wrapper">
        <div class="link">
          <figure class="icon-wrapper">
            <AppIcon :iconName="iconName" />
          </figure>

          <span class="font-nunito">{{ title }}</span>
        </div>

        <figure class="icon-dropdown">
          <AppIcon iconName="IconChevRight" />
        </figure>
      </a>
    </AppButton>

    <ul ref="dropdownMenu" class="menu-nav-dropdown">
      <slot :closeDropdown="toggleDropdown" />
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
      small: Boolean
    },

    components: {
      AppButton,
      AppIcon,
    },

    methods: {
      toggleDropdown() {
        const dropdown = this.$refs.dropdownMenu;
        const dropdownHeight = dropdown.scrollHeight;
        const dropdownWrapper = this.$refs.dropdownWrapper;

        let allDropdowns = document.querySelectorAll('.menu-nav-dropdown');

        function closeDropdowns() {
          allDropdowns.forEach((item) => {
            const parent = item.parentElement;

            item.style.maxHeight = '';
            parent.classList.remove('dropdown-open');
            dropdownWrapper.classList.add('dropdown-open');
          });
        }

        if( dropdown.style.maxHeight ) {
          dropdown.style.maxHeight = '';
          dropdownWrapper.classList.remove('dropdown-open');
        } else if( dropdownHeight > 200 ) {
          closeDropdowns();
          dropdown.style.maxHeight = '200px';
          dropdown.style.overflowY = 'auto';
        } else {
          closeDropdowns();
          dropdown.style.maxHeight = dropdownHeight + 'px';
        }
      }
    },
  }
</script>
