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
}
</style>