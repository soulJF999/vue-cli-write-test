module.exports = {
    chainWebpack: config => {
        config.module.rule('docs').test(/\.docs$/).use('doc-loader').loader('doc-loader').end()
    },
    productionSourceMap: true,
    configureWebpack: {
        devtool: 'source-map',
        resolveLoader: {
            modules: ['node_modules', './loaders/']
        }
    }
}