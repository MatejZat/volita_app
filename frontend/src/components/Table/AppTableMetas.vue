<template>
    <header class="app-table-metas">
        <div class="app-table-metas-content">
            <div class="filter-input-container">
                <AppInput @inputFill="handleInput" placeholder="Prehľadávať výsledky" icon-name="Sliders"/>
            </div>

            <aside class="app-table-metas-buttons">
                <AppButton @click="handleClick" color="primary" icon-name="Plus" ripple-white>{{ buttonText }}</AppButton>
            </aside>
        </div>
    </header>
</template>

<script>
import AppInput from '@/components/Form/AppInput';
import AppButton from '@/components/AppButton';

export default {
    props: {
        buttonText: String,
    },

    components: {
        AppInput,
        AppButton
    },

    methods: {
        handleInput( text ) {
            this.$emit( 'filterData', text );
        },

        handleClick() {
            this.$emit('buttonClick');
        }
    },
}
</script>

<style lang="scss">
.app-table-metas {
    margin-bottom: rem(20);

    &-content {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;

        .filter-input-container {
            width: 280px;

            @include breakpointDown($md) {
                width: 100%;
            }
        }
    }

    &-buttons {
        margin-left: rem(10);
        display: flex;

        @include breakpointUp($md) {
            margin-left: 0;
        }
    }
}
</style>