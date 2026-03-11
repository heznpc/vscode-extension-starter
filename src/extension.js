const vscode = require('vscode');
const { registerHelloWorld } = require('./commands/helloWorld');

/**
 * Called when the extension is activated.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  registerHelloWorld(context);
}

/**
 * Called when the extension is deactivated.
 */
function deactivate() {}

module.exports = { activate, deactivate };
