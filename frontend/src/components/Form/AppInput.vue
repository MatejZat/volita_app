<template>
    <div class="app-input">
        <label v-if="label" class="font-nunito" :class="{ 'required' : required }">{{ label }}</label>

        <div v-if="textarea" class="input-container">
            <textarea :rows="rows"></textarea>
        </div>

        <div v-else class="input-container">
            <figure v-if="iconName" class="input-icon">
                <AppIcon :icon-name="iconName"/>
            </figure>

            <input
                @input="emitValue($event)"
                v-model="inputText"
                :type="type"
                :placeholder="placeholder"
                :required="required"
                class="font-nunito"
                :class="[ inputTypeClass, inputHasIcon ]"
            >

            <figure v-if="removeButton" v-show="inputText" @click="removeValue" class="input-icon-remove">
                <AppIcon icon-name="X"/>
            </figure>
        </div>
    </div>
</template>

<script>
import AppIcon from '@/components/AppIcon';

export default {
    props: {
        label: String,
        type: String,
        placeholder: String,
        color: String,
        iconName: String,
        rows: Number,
        required: Boolean,
        textarea: Boolean,
        removeButton: Boolean
    },

    data() {
        return {
            inputText: ''
        }
    },

    components: {
        AppIcon
    },

    computed: {
        inputTypeClass() {
            return `${ this.color }-input`;
        },

        inputHasIcon() {
            return this.iconName ? 'border-icon' : '';
        }
    },

    methods: {
        emitValue( event ) {
            this.$emit( 'inputFill', event.target.value );
        },

        removeValue() {
            if ( this.inputText ) {
                this.inputText = '';
                this.$emit( 'inputFill', '' );
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.app-input {
    width: 100%;

    label {
        margin-left: rem(6);
        margin-bottom: rem(4);
        display: block;
        font-size: $fontLittle;
    }

    input,
    textarea {
        padding: rem(10);
        width: 100%;
        font-size: $font12;
        border: 2px solid $primaryContrast;
        border-radius: 6px;
        transition: border-color $inputSpeed;

        ::placeholder {
            color: $lowContrast;
        }

        &:hover {
            border-color: rgba($primary, 0.5);
        }

        &:focus {
            border-color: $primary;
        }
    }

    .alert-input {
        border-color: $alert;

        &:hover,
        &:focus {
            border-color: $alert;
        }
    }

    .error-input {
        border-color: $error;
        color: $error;

        &:hover,
        &:focus {
            border-color: $error;
        }
    }

    .required:before {
        content: "*";
        margin-right: rem(4);
        color: $primary;
    }

    .border-icon {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .input-container {
        display: flex;
        position: relative;
        border-radius: 6px;
        overflow: hidden;

        .input-icon {
            min-width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $white;
            background: $primary;

            svg {
                width: 22px;
            }

            &-remove {
                position: absolute;
                top: 50%;
                right: rem(10);
                transform: translateY(-50%);
                cursor: pointer;
                color: $lowContrast;
            }
        }
    }
}
</style>