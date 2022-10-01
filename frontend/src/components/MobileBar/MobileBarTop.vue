<template>
    <header class="top-bar">
        <div class="top-bar-content">
            <RouterLink to="/">
                <VueFeather type="chevron-left"/>
            </RouterLink>

            <h3>Objednávky</h3>

            <div @click="openMenu">
                <VueFeather type="menu"/>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        openMenu() {
            this.$emit( 'menuIconClick' );
        }
    },
}
</script>

<style lang="scss" scoped>
.top-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    backdrop-filter: blur(8px);
    z-index: 1000;
    background: rgba($white, 0.6);

    .top-bar-content {
        padding: rem(20);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>