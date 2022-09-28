module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/sass/utils/_mixins.scss";
                    @import "@/assets/sass/utils/_functions.scss";
                    @import "@/assets/sass/utils/_variables.scss";
                `
            }
        }
    }
};