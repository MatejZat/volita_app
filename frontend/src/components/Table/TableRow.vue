<template>
    <tr class="app-table-row">
        <slot/>
    </tr>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.app-table-row {
    display: table-row;
    border-bottom: 2px solid $primaryContrast;

    @include breakpointDown($lg) {
        margin-bottom: rem(8);
        display: block;
        overflow: hidden;
        border: 2px solid $primaryContrast;
        border-radius: 8px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>