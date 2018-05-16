const $ = require('jquery');
const {BrowserWindow} = require('electron').remote
const app = require('electron').app
const url = require('url')
const path = require('path')

let pantallaDetalle;
var usuarios = new Array(20);

function datos(nombre,genero,foto,direccion,telefono){
	this.nombre=nombre;
	this.genero=genero;
	this.foto=foto;
	this.direccion=direccion;
	this.telefono=telefono;

}

function inicia(){
	var nombre="";
	var resultado = "";
	var foto = "";
	var genero ="";
	var direccion = "";
	var telefono = "";
	$.ajax({
		url:'https://randomuser.me/api/?results=20',
		dataType: 'json',
		success:function(data){
			for(var i = 0;i<20;i++){
				nombre = data.results[i].name.first+" "+data.results[i].name.last;
				foto = data.results[i].picture.medium;
				genero = data.results[i].gender;
				direccion = data.results[i].location.street;
				telefono=data.results[i].phone;
				resultado = "<li><img src="+foto+">"+nombre+"<button id="+i+">Detalle</button>"
				$("#lstUsuarios").append(resultado);
				usuarios[i] = new datos(nombre,genero,foto,direccion,telefono);

			}
		}
	})
}


function botonDetalle(){
	//alert(this.id);
	//alert(usuarios[this.id].nombre);
	require('electron').remote.getGlobal('infoUsuarios').nombre=usuarios[this.id]
	require('electron').remote.getGlobal('infoUsuarios').genero=usuarios[this.id]
	require('electron').remote.getGlobal('infoUsuarios').foto=usuarios[this.id]
	require('electron').remote.getGlobal('infoUsuarios').direccion=usuarios[this.id]
	require('electron').remote.getGlobal('infoUsuarios').telefono=usuarios[this.id]
	pantallaDetalle = new BrowserWindow({width:320,height:425});
	pantallaDetalle.loadURL(url.format(
	{
		pathname:path.join(__dirname,'detalleUsuarios.html'),
		protocol:'file',
		slashes:true
	}))
}

$("body").on("click","li > button",botonDetalle);
inicia();
