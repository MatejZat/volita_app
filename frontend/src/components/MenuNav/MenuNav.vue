<template>
    <ul class="menu-nav" :class="{ 'menu-nav-vertical' : vertical }">
        <slot />
    </ul>
</template>

<script>
export default {
    props: {
        vertical: Boolean,
        spaceBetween: Number
    },
}
</script>

<style lang="scss">
.menu-nav {
    display: flex;
    flex-direction: column;

    > li {
        margin-bottom: rem(20);

        &:last-child {
            margin-bottom: 0;
        }

        @include breakpointUp($md) {
            margin-bottom: rem(30);
        }
    }

    &-vertical {
        flex-direction: row;

        > li {
            margin-right: rem(20);
            margin-bottom: rem(0);

            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>