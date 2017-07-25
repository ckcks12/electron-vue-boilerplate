const electron = require('electron')
const path = require('path')
const url = require('url')

let mainWindow = null

function createMainWindow() {
	mainWindow = new electron.BrowserWindow({width: 800, height: 800})

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, '../index.html'),
		protocol: 'file:',
		slashes: true
	}))

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

electron.app.on('ready', () => {
	createMainWindow()
})

electron.app.on('window-all-closed', () => {
	if( process.platform !== 'darwin' ) {
		electron.app.quit()
	}
})

electron.app.on('activate', () => {
	if( mainWindow === null ) {
		createMainWindow()
	}
})