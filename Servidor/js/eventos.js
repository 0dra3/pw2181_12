var inicioApp = function(){
	var Aceptar = function(){
		var usuario=$("#txtUsuario").val();
		var clave =$("#txtClave").val();
		var parametros="opc=validaentrada"+
		"&usuario="+usuario+
		"&clave="+clave+
		"&aleatorio="+Math.random();

		$.ajax({
			cache:false,
			type: "POST",
			dataType:"json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					//ocultamos el inicio
					$("#secInicio").hide("slow");
					//aparecemos usuarios
					$("#frmUsuarios").show("slow")
					//Cursor en el primer cuadro de texto
					$("#txtNombreUsuario").focus();
				} else {
					alert("Usuario o Clave incorrecta(s)")
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log(xhr);
			}
		});
	} 

	var buscarUsuarios = function() {
		var usuario=$("txtNombreUsuario").val();
		var parametros = "opc=buscarUsuario"+
		"&usuario"+usuario+"&aleatorio="+Math.random();
		if(usuario =! "")
		{
			$.ajax({
			cache:false,
			type: "POST",
			dataType:"json",
			url: "php/buscarusuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					$("#txtNombre").val(response.nombre);
					$("#txtClaveUsuario").val(response.clave);
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log(xhr);
			}
		});
		}
	}

	var teclaNombreUsuario = function(tecla){
		if(tecla.which == 13){
			buscarUsuarios();
		}
	}
	var Guardar = function(){
		var usuario =$("#txtNombreUsuario").val();
		var nombre =$("#txtNombre").val();
		var clave =$("#txtClaveUsuario").val();
		if(usuario !="" && nombre !="" & clave!=""){
			$.ajax({
			cache:false,
			type: "POST",
			dataType:"json",
			url: "php/guardarusuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					alert("Datos guardads crrectamente")
					$("#frmUsuarios > input").val=("")
					}
			},
			error: function(xhr,ajaxOptions,thrownError){
				alert ("Ocurrio un error")
			}
		});}
			else {
			alert("Llene todos los campos")
		}
	}
	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario)
	$("#btnGuardar").on("click",Guardar)
}

$(document).ready(inicioApp);