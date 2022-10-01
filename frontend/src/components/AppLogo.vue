<template>
    <div class="logo-wrapper">
        <img src="@/assets/img/logo.svg" alt="Volita servis logo">
    </div>
</template>

<style lang="scss" scoped>
.logo-wrapper {
    width: rem(100);

    @include breakpointUp($md) {
        width: rem(160)
    }
}
</style>