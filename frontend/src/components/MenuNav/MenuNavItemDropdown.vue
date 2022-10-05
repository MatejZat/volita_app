<template>
  <li ref="dropdownWrapper" class="menu-nav-item-dropdown" :class="{ 'text-small' : small }">
    <AppButton ripple rippleWhite>
      <a @click.prevent="toggleDropdown" href="#" class="link-wrapper">
        <div class="link">
          <figure class="icon-wrapper">
            <component :is="icon" />
          </figure>

          <span class="font-nunito">{{ title }}</span>
        </div>

        <figure class="icon-dropdown">
          <IconChevRight />
        </figure>
      </a>
    </AppButton>

    <ul ref="dropdownMenu" class="menu-nav-dropdown">
      <slot :closeDropdown="toggleDropdown" />
    </ul>
  </li>
</template>

<script>
  import AppButton from "@/components/AppButton";
  import IconHome from '@/components/Icons/IconHome';
  import IconCalendar from '@/components/Icons/IconCalendar';
  import IconBell from '@/components/Icons/IconBell';
  import IconSettings from '@/components/Icons/IconSettings';
  import IconLogout from '@/components/Icons/IconLogout';
  import IconChevRight from '@/components/Icons/IconChevRight';

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
      IconLogout,
      IconChevRight
    },

    computed: {
      icon() {
        return 'Icon' + this.iconName;
      },
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
