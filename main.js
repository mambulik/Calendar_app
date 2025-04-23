const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
/* 
importing two Electron modules with CommonJS module syntax
app, which controls your application's event lifecycle.
BrowserWindow, which creates and manages app windows.

importing preoads
*/
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        //preload: path.join(__dirname, 'preload.js')
        nodeIntegration: true,
      }
  })

  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.openDevTools({ mode: 'detach' });
}


/* 
The createWindow() function loads your web page into a new BrowserWindow instance.

The __dirname string points to the path of the currently executing script (in this case, your project's root folder).
The path.join API joins multiple path segments together, creating a combined path string that works across all platforms.
*/

app.whenReady().then(() => {
    //ipcMain.handle('ping', () => 'pong')
    createWindow()
})
/* 
Calling your function when the app is ready
*/

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
/* 
Closing the app when all bindows are closed. darwin  = macOS
*/

