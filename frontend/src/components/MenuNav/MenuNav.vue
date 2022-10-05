<template>
  <ul class="menu-nav" :class="{ 'menu-nav-vertical' : vertical }">
    <slot />
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

    > li:not(:last-child) {
      margin-bottom: rem(20);
    }

    &-vertical {
      flex-direction: row;

      > li:not(:last-child) {
        margin-right: rem(20);
        margin-bottom: 0;
      }
    }

    .menu-nav-item {
      max-width: 200px;

      @include breakpointUp($md) {
        max-width: none;
      }

      .link-wrapper {
        display: inline-flex;
        align-items: center;
      }

      .icon-wrapper {
        margin-right: rem(10);

        svg {
          width: rem(26);

          @include breakpointUp($md) {
            width: rem(32);
          }
        }
      }


      a {
        font-size: rem(20);

        @include breakpointUp($md) {
          font-size: rem(24);
        }
      }

      &-dropdown {
        @extend .menu-nav-item;

        > .ripple-button {
          width: 100%;
        }

        .link-wrapper {
          display: flex;
          justify-content: space-between;

          .link {
            display: flex;
            align-items: center;
          }

          .icon-dropdown {
            transition: transform $mobileBarSpeed;

            svg {
              width: rem(18);

              @include breakpointUp($md) {
                width: rem(24);
              }
            }
          }
        }

        .menu-nav-dropdown {
          padding-left: rem(36);
          max-height: 0;
          overflow: hidden;
          transition: max-height $mobileBarSpeed;

          @include breakpointUp($md) {
            padding-left: rem(42);
          }
        }
      }
    }

    .dropdown-open .icon-dropdown {
      transform: rotate(90deg) !important;
    }

    .text-small {
      .icon-wrapper {
        margin-right: rem(6);

        svg {
          width: rem(16);

          @include breakpointUp($md) {
            width: rem(20);
          }
        }
      }


      a {
        font-size: rem(10) !important;

        @include breakpointUp($md) {
          font-size: rem(13) !important;
        }
      }
    }
  }
</style>