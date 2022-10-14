<template>
    <button
        v-if="noStyle"
        @click="rippleEffect"
        ref="rippleButton"
        class="font-nunito ripple-button"
        :class="rippleEffectColor"
    >
        <slot/>
    </button>

    <button
        v-else-if="submit"
        @click="rippleEffect"
        ref="rippleButton"
        class="font-nunito ripple-button"
        :class="[ buttonTypeClass, buttonStretchClass, buttonIconClass, rippleEffectColor ]"
        type="submit"
    >
        <AppIcon v-if="iconName" :icon-name="iconName"/>

        <span>
            <slot/>
        </span>
    </button>

    <RouterLink
        v-else
        @click="rippleEffect"
        ref="rippleButton"
        :to="{ name: routeName }"
        class="font-nunito ripple-button"
        :class="[ buttonTypeClass, buttonStretchClass, buttonIconClass, rippleEffectColor ]"
    >
        <AppIcon v-if="iconName" :icon-name="iconName"/>

        <span>
            <slot/>
        </span>
    </RouterLink>
</template>

<script>
import AppIcon from '@/components/AppIcon';

export default {
    props: {
        href: String,
        color: String,
        routeName: String,
        iconName: String,
        submit: Boolean,
        noStyle: Boolean,
        rippleWhite: Boolean,
        ghost: Boolean,
        stretch: Boolean,
    },

    components: {
        AppIcon,
    },

    computed: {
        buttonStretchClass() {
            return this.stretch ? 'button-stretch' : 'button';
        },

        buttonTypeClass() {
            return `${ this.color }-button${ this.isGhost }`;
        },

        buttonIconClass() {
            return this.iconName ? 'button-icon' : '';
        },

        rippleEffectColor() {
            return this.rippleWhite ? 'ripple-color-white' : 'ripple-color-blue';
        },

        isGhost() {
            return this.ghost ? '-ghost' : '';
        },
    },

    methods: {
        rippleEffect( event ) {
            const button = this.$refs.rippleButton.$el || this.$refs.rippleButton;
            const circle = document.createElement( 'span' );
            const diameter = Math.max( circle.clientWidth, circle.clientHeight );
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${ circle }px`;
            circle.style.left = `${ event.clientX - ( button.getBoundingClientRect().left + radius ) }px`;
            circle.style.top = `${ event.clientY - ( button.getBoundingClientRect().top + radius ) }px`;
            circle.classList.add( 'ripple' );

            circle.addEventListener( 'animationend', () => circle.remove() );

            button.appendChild( circle );
        }
    },
}
</script>

<style lang="scss">
.ripple-button {
    position: relative;
    display: block;
    border-radius: 4px;
    overflow: hidden;
    transition: background-color $defaultSpeed;

    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
        background-color: rgba($white, 0.15);
    }

    .ripple {
        width: 10px;
        height: 10px;
        position: absolute;
        border-radius: 10px;
        transform: scale(0);
        z-index: 1;

        animation: ripple 400ms ease-out;
    }

    @keyframes ripple {
        to {
            transform: scale(20);
            opacity: 0;
        }
    }
}

.ripple-color-white .ripple {
    background: rgba($white, 0.3);
}

.ripple-color-blue .ripple {
    background: rgba($primary, 0.3);
}

.button {
    padding: rem(10) rem(16);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    font-size: $fontLittle;
    color: $white;
    border-radius: 6px;
    transition: background-color $defaultSpeed;

    &-stretch {
        @extend .button;
        width: 100%;
        text-align: center;
    }
}

.button-icon {
    @include breakpointUp($md) {
        padding: rem(8) rem(14);

        svg {
            margin-right: rem(10);
        }
    }

    span {
        @include breakpointDown($md) {
            display: none;
        }
    }
}

// Generate from mixin
.primary-button {
    @include buttonGenerator($primary);
}

.alert-button {
    @include buttonGenerator($alert);
}

.error-button {
    @include buttonGenerator($error);
}
</style>