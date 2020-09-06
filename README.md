# Getting Started

1. webpack and webpack-cli 安装webpack和webpack脚手架

    lodash js原生库,提供很多方法
    
    ```
    yarn add webpack webpaci-cli lodash @types/lodash--dev
    ```
2. 加入typescript同时需要添加ts-loader用于webpack
   
    ```
    yarn add typescript ts-loader --dev
    ```
3. 在package.json中新增script方法进行ts初始化
    
    ```
    "init-ts": "tsc --init",
    ```
4. 修改生成的tsconfig.json
   
   ```
    {
        "compilerOptions": {
            "target": "es5",
            "lib": [
                "dom",
                "esnext"
            ],
            "allowJs": true,
            "skipLibCheck": true,
            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "strict": true,
            "forceConsistentCasingInFileNames": true,
            "module": "esnext",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "jsx": "react",
            "noImplicitAny": false
        },
        "include": [
            "src"
        ]
    }
   ```
5. 加入react相关插件 及相关types
   ```
   yarn add react react-dom
   ```
   ```
   yarn add @types/react @types/react-dom --dev
   ```
   要使用react需要使用babel进行编译,同时webpack与babel协同使用，需要使用babel-loader。同时，ant design要做到按需加载需要使用babel-plugin-import。
   ```
   yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader babel-plugin-import --dev
   ```
   在根目录创建.babelrc文件用于配置babel
   ```
   {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
   }
   ```
6. webpack common/dev/prod
   
   webpack要进行环境分离需要使用webpack-merge来进行不同环境的配置分离  
   相同配置项卸载webpack.common.js中，不同配置项在其不同环境的文件中分别配置  
   本项目中暂时公用配置项如下  
    plugin:  
  
    **html-webpack-plugin**。运行的时候以我们写的html文件作为模板生成新的html文件作为入口
    ```
    yarn add html-webpack-plugin --dev
    ```
    创建属于自己的html模板文件,并在webpack中加入对应配置
    ```
    plugins: [
          new HtmlWebpackPlugin({
              title: 'Output Management',
              template: './index.html' //你的html模板路径
          }),
      ],
    ```
    loader:  
    解析编译js文件使用：**ts-loader**以及**babel-loader**。加载资源文件使用：**file-loader**
    ```
      module: {
        rules: [
            {
                test: /\.ts(x?)|js(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                }, {
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
        ]
    },
    ```
    无需配置css相关loader，因为开发环境和生产环境需要的表现形式不同。
7. 使用webpack时候会用到的插件
   
   webpack-dev-server dev环境下本地起服务,可以配置代理解决本地开发跨域问题。

   webpack-merge 用于合并三个webpack配置文件

   clean-webpack-plugin 打包时清空对应的输出目录

   webpack-bundle-analyzer 打包完成后生成文件目录及大小查看

   mini-css-extract-plugin 打包时生成css文件
   ```
   yanr add webpack-dev-server webpack-merge clean-webpack-plugin webpack-bundle-analyzer mini-css-extract-plugin --dev
   ```
8. 在项目中使用css/scss/less
   
   style-loader 用于将处理好的css文件生成style标签

   css-loader  用于解析import、require()、@import、url()

   sass-loader or less-loader 用于处理对应的less和sass文件
   ```
   yarn add style-loader css-loader sass sass-loader --dev
   ```
   此环节注意，根据**6**所写，开发环境以及生产环境不同，开发环境没有严格性能要求，可以直接使用如下形式
   ```
   module: {
            rules: [
                {
                    test: /\.(sass|scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ],
        },
   ```
   生产环境一般需要将css分离成css文件，所以会使用mini-css-extract-plugin，loader如下所示
   ```
    module: {
            rules: [
                {
                    test: /\.(sass|scss|css)$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                    ]
                },
            ]
        },
   ```
9.  postcss-loader css预处理插件
    
    在根目录下创建postcss.config.js

    ```
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('postcss-nested')
        ]
    }
    ```
    autoprefixer 用于处理css的浏览器兼容(增加前缀)
    
    postcss-nested 用于展开嵌套规则的插件

    ```
    yarn add postcss-loader autoprefixer postcss-nested --dev
    ```
10. 添加antd及对应types
    
    ```
    yarn add antd
    ```
    按需加载css样式(用到上文提到的babel-plugin-import)
    
    这样就不需要在根文件引入antd的全部css样式

    在.babelrc文件中增加对应相应的plugins配置

    ```
    "plugins": [
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": "css"
            }
        ]
    ]
    ```
11. 单元测试  
    react为了方便测试UI，单元测试推荐使用[jest](https://www.baidu.com/link?url=sE9X8dAZOeZkJlVSBAYC3YsXdbeCh3e1Eat2QwjWVhG&wd=&eqid=bac65e2e00036f48000000055f54e00b)加[enzyme](https://github.com/enzymejs/enzyme)组合，如果对断言有特别需要，可以使用[Chai](https://www.chaijs.com/)。  
    由于使用了babel，typescript，enzyme，除了jest和enzyme之外，还需要适配库进行配置
    ```
    yarn add jest babel-jest ts-jest jest-enzyme enzyme @types/enzyme @types/jest enzyme-adapter-react-16 --dev
    ```
    其中enzyme-adapter-react-16根据具体react版本号选择安装。  
    在src文件夹下新建setupTests.ts，填入以下内容
    ```
    import 'jest-enzyme';
    import { configure } from 'enzyme'
    import Adapter from 'enzyme-adapter-react-16'

    configure({ adapter: new Adapter() })
    ```
    在根目录下新建jest.config.js。填入以下内容
    ```

    module.exports = {
      clearMocks: true,
      coverageDirectory: "coverage",
      preset: 'ts-jest',
      transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
      },
      setupFilesAfterEnv: ["./src/setupTests.ts"],
    };

    ```