const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	//打包配置，解决页面空白的配置方案。
	publicPath: process.env.NODE_ENV == 'production' ? './' : '/',
	lintOnSave: true,
	// 输出文件目录
	outputDir: 'dist',
	//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	assetsDir:'static',
	//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
	indexPath:'index.html',
	//webpack配置
	configureWebpack: {
		//关闭 webpack 的性能提示
		performance: {
			hints: false,
		}
	},
	pages: {
		index: {
			// 入口文件
			entry: 'src/main.ts' /*这个是根入口文件*/ ,
			// 模板文件
			template: 'public/index.html',
			// 输出文件
			filename: 'index.html',
			// 页面title
			title: 'leaf-3',
			assetsPublicPath: './'
		}
	},
	//配置跨域
	devServer: {
		/* open: true,
		host: '127.0.0.1',
		port: 8080,
		https: false ,
		hotOnly: true, // 是否开启热更新
		disableHostCheck: true, */
		//以上的ip和端口是我们本机的;下面为需要跨域的
		proxy: {
			//配置跨域
			'/api': {
				target: 'http://leaf.com/index.php?s=', //这里后台的地址模拟的;应该填写你们真实的后台接口
				ws: true,
				changOrigin: true,
				//允许跨域
				pathRewrite: {
					'^/api': '', //请求的时候使用这个api就可以
				}
			}
		}
	
	}
})
