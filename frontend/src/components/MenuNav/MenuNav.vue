<template>
    <ul class="menu-nav" :class="{ 'menu-nav-horizontal' : horizontal }">
        <slot/>
    </ul>
</template>

<script>
export default {
    props: {
        horizontal: Boolean,
    },
}
</script>

<style lang="scss">
.menu-nav {
    display: flex;
    flex-direction: column;

    &-horizontal {
        flex-direction: row;

        > li:not(:last-child) {
            margin-right: rem(20);
            margin-bottom: 0;
        }
    }

    &-item {
        max-width: rem(210);

        @include breakpointUp($xs) {
            max-width: none;
        }

        .link-wrapper {
            padding: rem(10) rem(20);
            display: flex;
            align-items: center;
            white-space: nowrap;

            .link-text {
                margin-left: rem(10);
            }
        }

        .link-icon svg {
            @include breakpointDown($lg) {
                width: rem(32);
            }

            @include breakpointDown($md) {
                width: rem(22);
            }
        }


        span {
            font-size: rem(20);
            white-space: nowrap;

            @include breakpointUp($md) {
                font-size: rem(24);
            }

            @include breakpointUp($lg) {
                font-size: rem(16);
            }
        }

        &-dropdown {
            @extend .menu-nav-item;

            .link-wrapper {
                .icon-dropdown {
                    margin-left: rem(20);
                    position: absolute;
                    right: rem(10);
                    transition: transform $mobileBarSpeed;

                    @include breakpointUp($lg) {
                        right: rem(20);
                    }

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
            }


            .menu-nav-dropdown {
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

    .is-hidden {
        position: relative;

        &:hover .menu-nav-dropdown {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }

        .menu-nav-dropdown {
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
                color: $dark;
            }
        }
    }

    .dropdown-open {
        .menu-nav-dropdown {
            opacity: 1;
        }

        .icon-dropdown {
            transform: rotate(-90deg) !important;
        }
    }

    .text-small {
        .link-wrapper {
            padding: 0;
        }

        .link-icon svg {
            width: rem(16);

            @include breakpointUp($md) {
                width: rem(20);
            }
        }


        span {
            font-size: rem(10);

            @include breakpointUp($md) {
                font-size: rem(13);
            }
        }
    }
}
</style>