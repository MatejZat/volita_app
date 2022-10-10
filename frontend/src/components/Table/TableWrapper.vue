<template>
    <TransitionGroup name="table" :tag="wrapper">
        <slot/>
    </TransitionGroup>
</template>

<script>
export default {
    props: {
        wrapper: String,
    },
}
</script>

<style lang="scss">
thead {
    display: table-header-group;
    background: $primaryContrast;

    @include breakpointDown($lg) {
        display: none;
    }
}

tbody {
    display: table-row-group;

    tr {
        background: $white;

        @include breakpointUp($lg) {
            &:nth-child(even) {
                background: #F9F9F9;
            }
        }
    }
}

.table-enter-active,
.table-leave-active {
    transition: opacity $defaultSpeed;
}

.table-enter-from,
.table-leave-to {
    opacity: 0;
}

.table-leave-active {
    position: absolute;
}
</style>