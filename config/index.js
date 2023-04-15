import ComponentsPlugin from 'unplugin-vue-components/webpack'
import NutUIResolver from '@nutui/nutui-taro/dist/resolver'
import path from 'path'

const config = {
    projectName: 'taro-express-cxapp',
    
    date: '2023-3-28',

    // designWidth: 750,
    designWidth(input) {

        // 配置 NutUI 尺寸
        if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
            return 750
        }

        // 全局使用 Taro 默认的 750 尺寸
        return 750
    },    

    deviceRatio: { 
        640: 2.34 / 2, 750: 1, 828: 1.81 / 2
    },

    sourceRoot: 'src',
    outputRoot: 'dist',

    plugins: [
        '@tarojs/plugin-html', 
        'taro-plugin-pinia',
    ],

    sass: {
        data: `
            @import "@nutui/nutui-taro/dist/styles/variables-jdt.scss";
        `,
    },

    alias: {
        "@": path.resolve(__dirname, "..", "src"),
    },


    framework: 'vue3',

    compiler: 'webpack5',

    cache: {
        // Webpack 持久化缓存配置，建议开启
        enable: true
    },


    // 小程序端配置
    mini: {

        postcss: {
            pxtransform: {
                enable: true,
                config: {

                }
            },

            // 图片传base64
            url: {
                enable: true,
                config: {
                    limit: 10240 // 转换尺寸上限10kb
                }
            },

            cssModules: {
                // 默认为 false，如需使用 css modules 功能，则设为 true
                enable: false, 
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        },


        webpackChain(chain) {
            chain.plugin('unplugin-vue-components').use(ComponentsPlugin({
                resolvers: [NutUIResolver({ taro: true })]
            }))
        },    
        
        miniCssExtractPluginOption: {
            // ignoreOrder: false,
            ignoreOrder: true,
        },        

    },


    // h5端配置
    h5: {
        publicPath: '/',

        staticDirectory: 'static',

        postcss: {
            autoprefixer: {
                enable: true,
                config: {
                }
            },

            cssModules: {
                enable: false, 
                // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        },

        webpackChain(chain) {
            chain.plugin('unplugin-vue-components').use(ComponentsPlugin({
                resolvers: [NutUIResolver({ taro: true })]
            }))
        },        
    },

    
    rn: {
        appName: 'taroDemo',
        postcss: {
            cssModules: {
                enable: false, 
                // 默认为 false，如需使用 css modules 功能，则设为 true
            }
        }
    }
}

module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'))
    }
    return merge({}, config, require('./prod'))
}
