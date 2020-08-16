# common loader

1. css-loader && style-loader

&emsp;&emsp; css-loader can resolve import css file in js and  style-loader can inject style tag to html 

```
new HtmlWebpackPlugin({
        title: 'Output Management',
        template:'./public/index.html'
    }),

```

```
new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
```
```
"moduleResolution": "node",
```
