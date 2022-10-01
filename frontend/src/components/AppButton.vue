<template>
    <button class="app-button" :class="{ 'app-button-icon': icon }">
        <figure v-if="icon" class="icon-wrapper">
            <VueFeather :type="icon"/>
        </figure>

        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        href: String,
        icon: String
    },
}
</script>

<style lang="scss" scoped>
.app-button {
    padding: rem(4);
    border-radius: 4px;

    &:active {
        background: red;
    }

    &-icon {
        display: flex;
        align-items: center;

        .icon-wrapper {
            margin-right: rem(10);
            border-radius: 100%;
            color: $white;
            background: $primary;
        }
    }
}

</style>