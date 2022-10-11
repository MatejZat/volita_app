<template>
    <div class="app-table-wrapper">
        <table class="app-table font-nunito">
            <slot/>
        </table>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-table-wrapper {
    .app-table {
        width: 100%;
        display: table;
        overflow: hidden;
        font-size: $font12;
        text-align: left;

        @include breakpointUp($lg) {
            border-radius: 12px;
        }
    }
}
</style>