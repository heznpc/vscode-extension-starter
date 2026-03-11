const vscode = require('vscode');

/**
 * Registers the helloWorld command.
 * @param {vscode.ExtensionContext} context
 */
function registerHelloWorld(context) {
  const disposable = vscode.commands.registerCommand(
    'my-extension.helloWorld',
    () => {
      vscode.window.showInformationMessage('Hello World from My Extension!');
    }
  );

  context.subscriptions.push(disposable);
}

module.exports = { registerHelloWorld };
