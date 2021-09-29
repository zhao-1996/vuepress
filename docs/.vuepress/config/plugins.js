module.exports = [
	[
		'one-click-copy',
		{
			// 代码块复制按钮
			copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
			copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
			duration: 1000, // prompt message display time.
			showInMobile: false, // whether to display on the mobile side, default: false.
		},
	],
	true
]