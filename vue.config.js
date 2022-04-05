const path = require('path');
const { defineConfig } = require('@vue/cli-service');

const resolve = (dir) => path.join(__dirname, dir);

const projectName = 'Tse-vue-next-demo'

module.exports = defineConfig({
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
    // 你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖
    transpileDependencies: true,
    // 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
    // 但是 Vue CLI 在一些其他地方也需要用到这个值
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    outputDir: 'dist',
    configureWebpack: {
        name: projectName,
        resolve: {
            alias: {
                '@': resolve('src')
            },
            extensions: ['.js', '.vue', '.json', '.ts'],
        },
        output: {
            library: `${projectName}-[name]`,
            libraryTarget: 'umd',
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        transpileOnly: true,
                        appendTsSuffixTo: [/\.vue$/],
                    },
                },
            ],
        },
    },
})
