import * as vscode from 'vscode';
// import ColorThief from 'color-thief';
// import getColors from 'get-image-colors';
// import { join } from 'path';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "skin-maker" is now active!');

  let disposable = vscode.commands.registerCommand(
    'extension.createSkin',
    async () => {
      vscode.commands.executeCommand('vscode.open');

      const file = await vscode.window.showOpenDialog({
        filters: {
          Images: ['png', 'jpg'],
        },
      });

      // console.log(file);

      // console.log(join);

      // getColors(file![0].path).then((colors: any) => {
      //   console.log(colors);
      // });

      // vscode.window.showInformationMessage(JSON.stringify(file));

      // console.log(ColorThief);

      // ColorThief.getPalette(file![0].path, 5)
      //   .then((palette: any) => {
      //     // vscode.window.showInformationMessage('Hello World!');
      //     vscode.window.showInformationMessage(palette);
      //   })
      //   .catch((err: any) => {
      //     vscode.window.showInformationMessage(err);
      //   });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
