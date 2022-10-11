<template>
    <ul class="menu-nav" :class="{ 'menu-nav-vertical' : vertical }">
        <slot/>
    </ul>
</template>

<script>
export default {
    props: {
        vertical: Boolean,
    },
}
</script>

<style lang="scss">
.menu-nav {
    display: flex;
    flex-direction: column;

    &-vertical {
        flex-direction: row;

        > li:not(:last-child) {
            margin-right: rem(20);
            margin-bottom: 0;
        }
    }

    .menu-nav-item {
        max-width: rem(210);

        @include breakpointUp($xs) {
            max-width: none;
        }

        .link-wrapper {
            padding: 0 rem(20);
            display: inline-flex;
            align-items: center;
            white-space: nowrap;

            @include breakpointDown($lg) {
                padding: 0;
            }

            .link {
                padding: rem(10) 0;
                display: flex;
                align-items: center;

                span {
                    margin-left: rem(10);
                }
            }
        }

        .icon-wrapper svg {
            @include breakpointDown($lg) {
                width: rem(32);
            }

            @include breakpointDown($xs) {
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
            will-change: max-height;

            .link-wrapper {
                display: flex;
                justify-content: space-between;

                .icon-dropdown {
                    margin-left: rem(20);
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
            }

            .menu-nav-dropdown {
                padding-left: rem(36);
                padding-right: rem(20);
                max-height: 0;
                overflow: hidden;
                transition: max-height $mobileBarSpeed;

                @include breakpointUp($md) {
                    padding-left: rem(42);
                }

                @include breakpointUp($lg) {
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
            opacity: 0;
            pointer-events: none;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            background: $primary;
            transition: all $defaultSpeed;

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

    .dropdown-open .icon-dropdown {
        transform: rotate(-90deg) !important;
    }

    .text-small {
        .link-wrapper {
            padding: 0;

            .link {
                padding: 0;
            }
        }

        .icon-wrapper svg {
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