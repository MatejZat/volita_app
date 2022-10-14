<template>
    <div class="app-breadcrumbs font-nunito">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        routeName: String,
        breadcrumbs: Object
    },

}
</script>

<style lang="scss" scoped>
.app-breadcrumbs {
    display: flex;
    font-size: $font12;
    color: $lowContrast;
}
</style>