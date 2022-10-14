<template>
    <div class="breadcrumb-item">
        <span>
            <slot />
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.breadcrumb-item {
    &:first-child span {
         padding-right: rem(14);
    }

    &:not(:first-child) {
        span {
            padding: 0 rem(14);
            position: relative;

            &:before {
                 content: '';
                 width: rem(4);
                 height: rem(4);
                 position: absolute;
                 top: 50%;
                 left: 0;
                 transform: translateY(-50%);
                 border-radius: 4px;
                 background: $primary;
            }
        }
    }

    &:last-child span {
         padding-right: 0;
    }
}
</style>