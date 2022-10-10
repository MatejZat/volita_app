<template>
    <div class="app-breadcrumbs font-nunito">
        <span v-for="breadcrumb in breadcrumbs" :key="breadcrumb.id">{{ breadcrumb.title }}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        routeName: String
    },

    data() {
        return {
            breadcrumbs: [
                {
                    id: 1,
                    title: 'Pigi'
                },
                {
                    id: 2,
                    title: 'Pigi 2'
                },
                {
                    id: 3,
                    title: 'Pigi 3'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.app-breadcrumbs {
    display: flex;
    font-size: $font12;
    color: $lowContrast;


    span {
        &:first-child {
            padding-right: rem(14);
        }

        &:not(:first-child) {
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

        &:last-child {
            padding-right: 0;
        }
    }
}
</style>