<?php 
include 'conexiones.php';
 function buscarusuario(){
 	//Conectarnos al servidor de BD
 	$respuesta=false;
 	$usuario=$_POST["usuario"];
 	$con=conecta();
 	$consulta="select usuario,nombre,clave from usuarios where usuario= '".$usuario."' limit 1";
 	//echo $consulta;
 	$resConsulta=mysqli_query($con,$consulta);
 	$nombre = "";
 	$clave = "";
 	if(mysqli_num_rows($resConsulta) > 0){
 		$respuesta = true;
 		while($regConsulta=mysqli_fetch_array($resConsulta)){
 			$nombre=$regConsulta["nombre"];
 			$clave=$regConsulta["clave"];
 			
 		}
 	}

 	$salidaJSON = array('respuesta' => $respuesta);
 	print json_encode($salidaJSON);
 }
 $opc = $_POST["opc"];
 switch ($opc) {
 	case 'buscarUsuario':
 		buscarusuario();
 		break;
 	
 	default:
 		# code...
 		break;
 }
?>