'use strict'
const { app, BrowserWindow } = require('electron')
const loadIniFile = require('read-ini-file')
const path = require('path')
const { protocol } = require('electron')

const configFile = path.join(process.cwd(), '/conf/bec.ini')
const config = loadIniFile.sync(configFile)
const url = config.app.url
console.log('version: ' + config.app.version)
console.log('url: ' + url)

protocol.registerSchemesAsPrivileged([
  {
    scheme: 'http',
    privileges: {
      bypassCSP: true,
      standard: true,
      secure: true,
      supportFetchAPI: true,
      coresEnabled: true
    }
  }
])

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
// const winURL = process.env.NODE_ENV === 'development'
//   ? `https://mp.weixin.qq.com/s?__biz=MzA4MDg1MjgxNw==&amp;mid=2247484207&amp;idx=1&amp;sn=175d386840699a8e02029619128f7269&amp;chksm=9f9ca111a8eb2807637ec33bc72e7c231b314eb4a20a73937dc473768e385655d2b294b2ec3c&token=612950746&lang=zh_CN#rd`
//   : `file://${__dirname}/index.html`
const winURL = url

const createWindow = () => {
    /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    // height: 563,
    useContentSize: true,
    frame: false,
    resizable: false,
    // width: 1000,
    icon: path.join(__dirname, '/logo.ico'),
    webPreferences: {
      // solve: electron require is not defined
      nodeIntegration: true
    }
  })

  // remove default menu
  mainWindow.setMenu(null)

  // close dev tools.
  mainWindow.webContents.closeDevTools()

  // maximize
  mainWindow.maximize()

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

