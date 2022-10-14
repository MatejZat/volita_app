<template>
    <section>
        <AppLogo />

        <AppForm @submit.prevent="fajne">
            <InputGroup :cols="2">
                <AppInput type="text" placeholder="Meno"/>
                <AppInput type="text" placeholder="Daco"/>
            </InputGroup>

            <InputGroup :cols="3">
                <AppInput type="text" placeholder="Krajina"/>
                <AppInput type="text" placeholder="Mesto"/>
                <AppInput type="text" placeholder="Adresa"/>
            </InputGroup>

            <InputGroup :cols="2">
                <AppInput type="email" placeholder="Email"/>
                <AppInput type="password" placeholder="Heslo"/>
            </InputGroup>

            <InputGroup :cols="2">
                <AppInput type="text" placeholder="Zle nedobre" color="error"/>
                <AppInput type="text" placeholder="Trochu zle" color="alert"/>
            </InputGroup>

            <AppButton color="primary" submit ripple-white>SUBMIT</AppButton>
        </AppForm>
    </section>
</template>

<script>
import AppForm from "@/components/Form/AppForm";
import AppInput from "@/components/Form/AppInput";
import AppButton from "@/components/AppButton";
import AppLogo from "@/components/AppLogo";
import InputGroup from "@/components/Form/InputGroup";

export default {
    components: {
        AppForm,
        AppInput,
        AppButton,
        AppLogo,
        InputGroup
    },

    methods: {
        fajne() {
           console.log('fajne')
        }
    },
}
</script>

<style lang="scss" scoped>
section {
    width: 100%;
    height: calc(100vh - 218px);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
