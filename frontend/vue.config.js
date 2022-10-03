module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/sass/global/utils/_mixins.scss";
                    @import "@/assets/sass/global/utils/_functions.scss";
                    @import "@/assets/sass/global/utils/_variables.scss";
                `
            }
        }
    }
};