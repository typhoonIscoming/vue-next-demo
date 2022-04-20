const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const resolve = (dir) => path.join(__dirname, dir);

const projectName = 'Tse-vue-next-demo'

module.exports = defineConfig({
    runtimeCompiler: true,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。
    // 你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖
    transpileDependencies: true,
    // 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
    // 但是 Vue CLI 在一些其他地方也需要用到这个值
    publicPath: process.env.NODE_ENV === 'development' ? './' : '',
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    outputDir: 'dist',
    assetsDir: 'static',
    configureWebpack: {
        name: projectName,
        resolve: {
            alias: {
                '@': resolve('src'),
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
        plugins: [
            new CopyWebpackPlugin({
                patterns:[{
                    from: resolve('static'),
                    to: 'static'
                }]
            }),
        ]
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions = {
                    ...options.compilerOptions,
                    isCustomElement: tag => {
                        tag.startsWith('define-')
                    }
                }
                return options
            })
    },
    // css: {
    //     // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
    //     // 设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?)
    //     // 文件视为 CSS Modules 模块。
    //     requireModuleExtension: true,
    // },
    // 是否为 Babel 或 TypeScript 使用 thread-loader
    // 该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: require('os').cpus().length > 1,

})
