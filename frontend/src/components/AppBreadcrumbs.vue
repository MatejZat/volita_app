<template>
    <div class="app-breadcrumbs font-nunito">
        <div v-for="breadcrumb in breadcrumbs" :key="breadcrumb.id">
            <span v-if="breadcrumb.meta.title">
                {{ breadcrumb.meta.title }}
            </span>
        </div>
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

    div {
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
}
</style>