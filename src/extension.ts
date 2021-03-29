import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vscode-extension-starter" is now active!');

  let disposable = vscode.commands.registerCommand(
    'extension.exampleCommand',
    async () => {
      vscode.commands.executeCommand('vscode.open');

      // Do something
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
