module.exports = {
    chainWebpack: config => {
        config.module.rule('docs').test(/\.docs$/).use('doc-loader').loader('doc-loader').end()
    },
    configureWebpack: {
        resolveLoader: {
            modules: ['node_modules', './loaders/']
        }
    }
}