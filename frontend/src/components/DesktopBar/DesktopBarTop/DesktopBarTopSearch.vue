<template>
    <div class="search-input-container">
        <AppInput icon-name="Search" placeholder="Vyhľadávajte..."/>
    </div>
</template>

<script>
import AppInput from '@/components/Form/AppInput';

export default {
    components: {
        AppInput,
    },
}
</script>

<style lang="scss" scoped>
.search-input-container {
    width: 380px;
}
</style>