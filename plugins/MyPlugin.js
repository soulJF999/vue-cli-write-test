class MyPlugin {
    apply (compiler) {
        /** 找到合适的事件钩子，实现自己的插件功能 */
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            /** compilation: 当前打包构建流程的上下文 */
            console.log(compilation)
        })
    }
}