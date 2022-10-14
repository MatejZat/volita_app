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
    position: relative;
    box-shadow: 0 -4px 0 -2px $primaryContrast inset;
    background: $white;

    &:hover {
        box-shadow: 0 0 0 2px $primary inset;

        .app-table-data-edit a {
            opacity: 1;
        }
    }

    @include breakpointUp($lg) {
        &:nth-child(even) {
            background: #F9F9F9;
        }
    }

    @include breakpointDown($lg) {
        margin: rem(8) 0;
        display: flex;
        align-items: center;
        box-shadow: 0 0 0 2px $primaryContrast inset;
        border-radius: 8px;

        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    @include breakpointDown($md) {
        padding: rem(14) rem(20);
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>