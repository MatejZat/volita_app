<template>
    <li ref="menuNavItem" :class="[ textSizeClass, isDropdownClass ]">
        <AppButton @click.stop="handleClick" class="link-wrapper" ripple ripple-white>
            <div class="link">
                <figure class="icon-wrapper">
                    <AppIcon :icon-name="iconName"/>
                </figure>

                <transition name="fade">
                    <span v-show="checkMenuExpanded" class="font-nunito">{{ title }}</span>
                </transition>
            </div>

            <transition name="fade">
                <figure v-if="isDropdown && checkMenuExpanded" class="icon-dropdown">
                    <AppIcon icon-name="ChevDown"/>
                </figure>
            </transition>
        </AppButton>

        <ul v-if="isDropdown" ref="menuDropdown" class="menu-nav-dropdown">
            <slot :closeDropdown="handleClick"/>
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
            return `is-${ this.isMenuExpanded }`;
        },

        textSizeClass() {
            return this.small ? 'text-small' : '';
        },

        checkMenuExpanded() {
            return this.isMenuExpanded === 'expanded' || window.innerWidth <= 1024 ? true : false;
        }
    },

    methods: {
        handleClick() {
            if ( this.isDropdown ) {
                window.requestAnimationFrame( this.toggleDropdown );
            } else {
                this.$store.commit( 'toggleMobileMenu' );
                this.$router.push( { name: this.routeName } );
            }
        },

        toggleDropdown() {
            const menuDropdown = this.$refs.menuDropdown;
            const menuNavItem = this.$refs.menuNavItem;
            const menuDropdowns = document.querySelectorAll( '.menu-nav-dropdown' );
            const menuDropdownHeight = menuDropdown.scrollHeight;

            function closeDropdowns() {
                menuDropdowns.forEach( ( item ) => {
                    const parent = item.parentElement;

                    item.style.maxHeight = '';
                    parent.classList.remove( 'dropdown-open' );
                    menuNavItem.classList.add( 'dropdown-open' );
                } );
            }

            if ( this.isMenuExpanded === 'expanded' || window.innerWidth <= 1024 ) {
                if ( menuDropdown.style.maxHeight ) {
                    menuDropdown.style.maxHeight = '';
                    menuNavItem.classList.remove( 'dropdown-open' );
                } else if ( menuDropdownHeight > 200 ) {
                    const deviceAdjust = window.innerWidth > 1024 ? `${ menuDropdownHeight }px` : '200px';
                    const deviceOverflow = window.innerWidth > 1024 ? 'none' : 'auto';

                    closeDropdowns();
                    menuDropdown.style.maxHeight = deviceAdjust;
                    menuDropdown.style.overflowY = deviceOverflow;
                } else {
                    closeDropdowns();
                    menuDropdown.style.maxHeight = `${ menuDropdownHeight }px`;
                }
            }
        }
    },

    watch: {
        isMenuExpanded() {
            const menuDropdown = this.$refs.menuDropdown;

            if ( this.isDropdown ) {
                if ( this.isMenuExpanded === 'hidden' ) {
                    menuDropdown.style.maxHeight = 'none';
                } else {
                    menuDropdown.style.maxHeight = '';
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