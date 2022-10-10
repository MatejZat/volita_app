<template>
    <component :is="tag" class="app-table-data">
        <slot/>
    </component>
</template>

<script>
export default {
    props: {
        tag: String,
    },
}
</script>

<style lang="scss" scoped>
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

}
</style>