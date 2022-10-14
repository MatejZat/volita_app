<template>
    <component :is="tag" class="app-table-data" :class="[ dataImportanceClass ]">
        <slot/>
    </component>
</template>

<script>
export default {
    props: {
        tag: String,
        primaryData: Boolean,
        secondaryData: Boolean,
        editData: Boolean,
    },

    computed: {
        dataImportanceClass() {
            return this.primaryData ? 'app-table-data-primary' : this.secondaryData ? 'app-table-data-secondary' : this.editData ? 'app-table-data-edit' : '';
        },
    },
}
</script>

<style lang="scss">
.app-table-data {
    padding: rem(8) rem(20);
    display: table-cell;
    
    @include breakpointDown($lg) {
        padding: rem(14) rem(20);

        &:not(&-primary, &-secondary, &-edit) {
            display: none;
        }
    }

    @include breakpointDown($md) {
        padding: 0;
    }

    &-primary {
        color: $primary;

        @include breakpointDown($lg) {
            font-size: $fontMedium;
        }
    }

    &-secondary {
        @include breakpointDown($lg) {
            color: $lowContrast;
        }

        @include breakpointDown($md) {
            padding-top: rem(6);
        }
    }

    &-edit {
        text-align: right;
        color: $primary;

        @include breakpointDown($lg) {
            position: absolute;
            top: 0;
            right: 0;
        }

        @include breakpointDown($md) {
            top: 50%;
            right: rem(20);
            transform: translateY(-50%);
        }

        a {
            opacity: 0;

            @include breakpointDown($lg) {
                opacity: 1;
            }
        }

        svg {
            width: rem(18);
        }
    }
}
</style>