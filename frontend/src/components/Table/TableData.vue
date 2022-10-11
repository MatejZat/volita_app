<template>
    <component :is="tag" class="app-table-data" :class="{ 'app-table-data-edit': edit }">
        <slot/>
    </component>
</template>

<script>
export default {
    props: {
        tag: String,
        edit: Boolean
    },
}
</script>

<style lang="scss">
.app-table-data {
    padding: rem(12) rem(20);
    display: table-cell;

    @include breakpointDown($lg) {
        display: none;

        &-primary {
            display: table-cell;
            font-size: rem(20);
            color: $primary;
        }

        &-secondary {
            padding: 0;
            display: table-cell;
            font-size: $font12;
            color: $lowContrast;
        }
    }

    &-edit {
        text-align: right;
        color: $primary;

        a {
            opacity: 0;
        }
    }
}
</style>