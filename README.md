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
   要使用react需要经过babel,后两个是在webpack中使用(loader和按需加载import)
   ```
   yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader babel-plugin-import --dev
   ```
   在根目录创建.babelrc文件
   ```
   {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ]
   }
   ```
6. webpack common/dev/prod
   
   运行的时候以我们写的html文件作为模板生成新的html文件作为入口
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
7. 使用webpack时候会用到的插件
   
   webpack-dev-server dev环境下本地起服务

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