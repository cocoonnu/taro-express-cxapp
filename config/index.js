import ComponentsPlugin from 'unplugin-vue-components/webpack'
import NutUIResolver from '@nutui/nutui-taro/dist/resolver'
import path from 'path'

const config = {
    projectName: 'taro-express-cxapp',
    date: '2023-3-28',
    designWidth: 750,
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: ['@tarojs/plugin-html'],
    sass: {
        data: `@import "@nutui/nutui-taro/dist/styles/variables-jdt.scss";`,
    },
    alias: {
        "@": path.resolve(__dirname, "..", "src"),
    },
    defineConstants: {
    },
    copy: {
        patterns: [
        ],
        options: {
        }
    },
    framework: 'vue3',
    compiler: 'webpack5',
    cache: {
        enable: false 
        // Webpack 持久化缓存配置，建议开启
        // 默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    mini: {
        postcss: {
            pxtransform: {
                enable: true,
                config: {

                }
            },
            url: {
                enable: true,
                config: {
                    limit: 1024 // 设定转换尺寸上限
                }
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
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
