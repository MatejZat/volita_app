<template>
    <TransitionGroup name="table-animation" :tag="wrapper">
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

<style lang="scss" scoped>
.table-animation-enter-active,
.table-animation-leave-active {
    transition: opacity $defaultSpeed;
}

.table-animation-enter-from,
.table-animation-leave-to {
    opacity: 0;
}

.table-animation-leave-active {
    position: absolute;
}
</style>