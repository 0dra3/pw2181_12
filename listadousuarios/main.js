const {app,BrowserWindow} = require('electron')
//app = require('electron').app
//BowserWindow = require('electron').BowserWindow
const url = require('url');
const path = require('path');
let pantallaPrincipal;
//objeto global para compartir datos entre pantallas
global.infoUsuarios={
	nombre: '',
	genero: '',
	foto: '',
	direccion:'',
	telefono:''
}

function muestraPantallaPrincipal(){
	pantallaPrincipal=new BrowserWindow({width:320,heigth:425});
	pantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes:true
	}))
	
	pantallaPrincipal.show();
	pantallaPrincipal.webContents.openDevTools();
}

app.on('ready',muestraPantallaPrincipal)