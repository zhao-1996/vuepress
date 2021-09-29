const nav = require('./nav.js');
const sidebar = require('./sidebar.js');
module.exports = {
	nav,
	sidebar,
	sidebarDepth: 3, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
	logo: '/img/userImg.jpg', // 导航栏logo
	repo: 'https://github.com/zhao-1996', // 导航栏右侧生成Github链接
	searchMaxSuggestions: 10, // 搜索结果显示最大数
	lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
	docsDir: 'docs', // 编辑的文件夹
	editLinks: false, // 启用编辑
	editLinkText: '编辑',
	sidebar: 'structuring', // 侧边栏 
}