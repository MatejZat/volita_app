<template>
    <component :is="icon"/>
</template>

<script>
import IconHome from '@/components/Icons/IconHome';
import IconCalendar from '@/components/Icons/IconCalendar';
import IconBell from '@/components/Icons/IconBell';
import IconSettings from '@/components/Icons/IconSettings';
import IconLogout from '@/components/Icons/IconLogout';
import IconPlus from '@/components/Icons/IconPlus';
import IconChevRight from '@/components/Icons/IconChevRight';
import IconChevLeft from '@/components/Icons/IconChevLeft';
import IconChevDown from '@/components/Icons/IconChevDown';
import IconMenu from '@/components/Icons/IconMenu';
import IconSearch from '@/components/Icons/IconSearch';
import IconSun from '@/components/Icons/IconSun';
import IconArrowLeft from '@/components/Icons/IconArrowLeft';
import IconArrowRight from '@/components/Icons/IconArrowRight';
import IconSliders from '@/components/Icons/IconSliders';
import IconTrash from '@/components/Icons/IconTrash';
import IconEdit from '@/components/Icons/IconEdit';
import IconX from '@/components/Icons/IconX';
import IconClipboard from '@/components/Icons/IconClipboard';
import IconDollar from '@/components/Icons/IconDollar';
import IconFolder from '@/components/Icons/IconFolder';

export default {
    props: {
        iconName: String,
    },

    components: {
        IconHome,
        IconCalendar,
        IconBell,
        IconSettings,
        IconLogout,
        IconPlus,
        IconChevRight,
        IconChevLeft,
        IconChevDown,
        IconMenu,
        IconSearch,
        IconSun,
        IconArrowLeft,
        IconArrowRight,
        IconSliders,
        IconTrash,
        IconEdit,
        IconX,
        IconClipboard,
        IconDollar,
        IconFolder

    },

    computed: {
        icon() {
            return `Icon${this.iconName}`;
        },
    },
}
</script>
