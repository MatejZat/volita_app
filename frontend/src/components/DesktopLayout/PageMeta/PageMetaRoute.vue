<template>
    <div class="meta-page-route">
        <h3>{{ pageTitle }}</h3>

        <AppBreadcrumbs>
            <BreadcrumbsItem v-for="item in breadcrumbs" :key="item.id">
                {{ item.meta.title }}
            </BreadcrumbsItem>
        </AppBreadcrumbs>
    </div>
</template>

<script>
import AppBreadcrumbs from '@/components/Breadcrumbs/AppBreadcrumbs';
import BreadcrumbsItem from "@/components/Breadcrumbs/BreadcrumbsItem";

export default {
    props: {
        pageTitle: String,
        breadcrumbs: Object,
    },

    components: {
        AppBreadcrumbs,
        BreadcrumbsItem
    },
}
</script>

<style lang="scss" scoped>
.meta-page-route h3 {
    margin-bottom: rem(4);
}
</style>