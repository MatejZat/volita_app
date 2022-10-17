<template>
    <div class="form-button-group">
        <slot/>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form-button-group {
    margin-top: rem(20);
    display: grid;
    gap: rem(10);

    @include breakpointUp($md) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include breakpointUp($lg) {
        display: flex;
        justify-content: flex-end;
    }
}
</style>e