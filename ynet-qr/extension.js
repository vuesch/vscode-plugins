// 引入vscode模块
const tools = require('./utils')
const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('YNET-QR插件已激活');
	// 当前时间
	var currentTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
	// 本机IP
	console.log('IP：'+tools.getIPAdress())
	// 注册命令ynet-QR
	let disposable = vscode.commands.registerCommand('ynet-QR', function () {
		// 执行命令后右下角提示
		vscode.window.showInformationMessage('YNET-QR插件已启用，启用时间 ' + currentTime);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
