<template>
    <form class="app-form">
        <slot/>
    </form>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-form {
    width: 100%;

    .form-input-group {
        margin-bottom: rem(10);

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>