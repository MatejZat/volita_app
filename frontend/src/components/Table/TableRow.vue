<template>
    <tr class="app-table-row">
        <slot/>
    </tr>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app-table-row {
    display: table-row;
    box-sizing: content-box;
    box-shadow: 0 -4px 0 -2px $primaryContrast inset;

    &:hover {
        box-shadow: 0 0 0 2px $primary inset;

        .app-table-data-edit a {
            opacity: 1;
        }
    }

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