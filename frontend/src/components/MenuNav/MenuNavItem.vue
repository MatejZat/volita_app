<template>
    <li ref="menuNavItem" :class="[ textSizeClass, hasDropdownClass ]">
        <AppButton @click="handleClick" no-style ripple-white>
            <span class="link-wrapper">
                <span class="link-icon">
                    <AppIcon :icon-name="iconName"/>
                </span>

                <transition name="fade">
                    <span class="link-text" v-show="canBeExpanded">{{ text }}</span>
                </transition>

                <transition name="fade">
                    <span v-if="hasDropdown && canBeExpanded" class="icon-dropdown">
                        <AppIcon icon-name="ChevDown"/>
                    </span>
                </transition>
            </span>
        </AppButton>

        <ul v-if="hasDropdown" ref="menuDropdown" class="item-dropdown-menu">
            <slot :closeDropdown="handleClick"/>
        </ul>
    </li>
</template>

<script>
import AppButton from '@/components/AppButton';
import AppIcon from '@/components/AppIcon';

export default {
    props: {
        text: String,
        iconName: String,
        routeName: String,
        menuExpansion: String,
        textSmall: Boolean,
        hasDropdown: Boolean,
    },

    components: {
        AppButton,
        AppIcon
    },

    computed: {
        hasDropdownClass() {
            return this.hasDropdown ? ['nav-item-dropdown', this.menuExpansionClass] : 'nav-item';
        },

        menuExpansionClass() {
            return this.menuExpansion ? `menu-${ this.menuExpansion }` : '';
        },

        textSizeClass() {
            return this.textSmall ? 'text-small' : '';
        },

        canBeExpanded() {
            return this.menuExpansion === 'expanded' || window.innerWidth <= 1024 ? true : false;
        }
    },

    methods: {
        handleClick() {
            if ( this.hasDropdown ) {
                window.requestAnimationFrame( this.toggleDropdown );
            } else {
                this.routeAndCloseMenu();
            }
        },

        toggleDropdown() {
            const menuDropdown = this.$refs.menuDropdown;
            const menuNavItem = this.$refs.menuNavItem;
            const menuDropdowns = document.querySelectorAll( '.item-dropdown-menu' );
            const menuDropdownHeight = menuDropdown.scrollHeight;

            function closeDropdowns() {
                menuDropdowns.forEach( ( item ) => {
                    const parent = item.parentElement;

                    item.style.maxHeight = '';
                    parent.classList.remove( 'dropdown-menu-open' );
                    menuNavItem.classList.add( 'dropdown-menu-open' );
                } );
            }

            if ( this.menuExpansion === 'expanded' || window.innerWidth <= 1024 ) {
                if ( menuDropdown.style.maxHeight ) {
                    menuDropdown.style.maxHeight = '';
                    menuNavItem.classList.remove( 'dropdown-menu-open' );
                } else if ( menuDropdownHeight > 250 ) {
                    const deviceAdjust = window.innerWidth > 1024 ? `${ menuDropdownHeight }px` : '250px';
                    const deviceOverflow = window.innerWidth > 1024 ? 'none' : 'auto';

                    closeDropdowns();
                    menuDropdown.style.maxHeight = deviceAdjust;
                    menuDropdown.style.overflowY = deviceOverflow;
                } else {
                    closeDropdowns();
                    menuDropdown.style.maxHeight = `${ menuDropdownHeight }px`;
                }
            }
        },

        routeAndCloseMenu() {
            this.$store.commit( 'toggleMobileMenu' );
            this.$router.push( { name: this.routeName } );
        }
    },

    watch: {
        menuExpansion() {
            if ( this.hasDropdown ) {
                const menuDropdown = this.$refs.menuDropdown;

                if ( this.menuExpansion === 'hidden' ) {
                    menuDropdown.style.maxHeight = 'none';
                } else {
                    menuDropdown.style.maxHeight = '';
                }
            }
        }
    },
}
</script>

<style lang="scss">
.nav-item {
    max-width: rem(210);

    @include breakpointUp($xs) {
        max-width: none;
    }

    .ripple-button {
        width: 100%;
        white-space: nowrap;
    }

    .link-wrapper {
        width: 100%;
        padding: rem(10) rem(20);
        display: flex;
        align-items: center;

        .link-icon svg {
            @include breakpointDown($lg) {
                width: rem(32);
            }

            @include breakpointDown($md) {
                width: rem(22);
            }
        }

        .link-text {
            width: 100%;
            margin-left: rem(10);
            text-align: left;
            font-size: rem(20);

            @include breakpointUp($md) {
                font-size: rem(24);
            }

            @include breakpointUp($lg) {
                font-size: rem(16);
            }
        }
    }

    &-dropdown {
        @extend .nav-item;

        .link-wrapper .icon-dropdown {
            transition: transform $mobileBarSpeed;

            svg {
                width: rem(18);

                @include breakpointUp($md) {
                    width: rem(28);
                }

                @include breakpointUp($lg) {
                    width: rem(18);
                }
            }
        }

        .item-dropdown-menu {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            will-change: max-height;
            transition: all $mobileBarSpeed;

            .ripple-button {
                padding-left: rem(53);
            }
        }

    }
}

.dropdown-menu-open {
    .item-dropdown-menu {
        opacity: 1;
    }

    .icon-dropdown {
        transform: rotate(-90deg) !important;
    }
}

.menu-hidden {
    position: relative;

    &:hover .item-dropdown-menu {
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
    }

    .item-dropdown-menu {
        max-height: none;
        position: absolute;
        top: 0;
        left: 100%;
        transform: translateY(10px);
        pointer-events: none;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background: $primary;

        @include breakpointUp($lg) {
            padding-left: 0;
            padding-right: 0;
        }

        .ripple-button {
            padding: rem(3) rem(16);
        }
    }
}

.text-small {
    .link-wrapper {
        padding: 0;

        .link-icon svg {
            width: rem(16);

            @include breakpointUp($md) {
                width: rem(20);
            }
        }

        .link-text {
            font-size: rem(10);

            @include breakpointUp($md) {
                font-size: rem(13);
            }
        }
    }

}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: all $defaultSpeed;
}
</style>