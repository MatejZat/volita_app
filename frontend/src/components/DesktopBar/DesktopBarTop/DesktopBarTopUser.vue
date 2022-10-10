<template>
    <div class="user-container">
        <a href="#" class="user-icon user-theme">
            <AppIcon icon-name="Sun"/>
        </a>

        <a href="#" class="user-icon user-notifications">
            <AppIcon icon-name="Bell"/>
        </a>

        <a href="#" class="user-icon user-profile">
            <img
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/280114475_377986610954435_2742565413912255129_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=4de414&_nc_ohc=whXp1cwswdQAX9HhHah&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLHnfhoXiyiCaOwTfYvySWrZ1k9mzuCx9StNqXDfH6p1g&oe=635948FF"
                alt="User profile picture">
        </a>
    </div>
</template>

<script>
import AppIcon from '@/components/AppIcon';

export default {
    components: {
        AppIcon,
    },
}
</script>

<style lang="scss" scoped>
.user-container {
    display: flex;
    justify-content: flex-end;

    .user-icon {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid $primaryContrast;
        border-radius: 6px;
        overflow: hidden;
        background: $white;
        transition: border-color $defaultSpeed;

        &:hover {
            border-color: $primary;
        }

        &:nth-child(2) {
            margin: 0 rem(10);
        }
    }
}
</style>