// `@import "@/assets/style/_variables";`
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/assets/style/_variables";`
            }
        }
    }
};