const themeConfig = require('./config/themeConfig.js');
const plugins = require('./config/plugins.js');
module.exports = {
	/*
	GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，
	那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
	*/
	base: '/vuepress/',

	/*
	网站的标题
	它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
	*/
	title: '散装代码', // 博客标题

	/*
	网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
	*/
	description: '散装代码',

	/*
	浏览器网页标签logo
	*/
	head: [
		['link', { rel: 'icon', href: '/img/userImg.jpg' }]
	],

	/*
	指定用于 dev server 的主机名。
	*/
	host: '0.0.0.0',

	/*
	指定 dev server 的端口
	*/
	port: 8080,

	/*
	打包输出目录，默认值: .vuepress/dist
	*/
	dest: 'dist',

	themeConfig,

	plugins,

	extraWatchFiles: [
		'./config/nav.js', // 使用相对路径
		'./config/sidebar.js', // 使用相对路径
		'./config/themeConfig.js', // 使用相对路径
	]
}