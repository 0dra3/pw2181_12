<?php 
include 'conexiones.php';
 function valida(){
 	//Conectarnos al servidor de BD
 	$respuesta=false;
 	$usuario=$_POST["usuario"];
 	$clave	=md5($_POST["clave"]);
 	$con=conecta();
 	$consulta="select usuario,clave from usuarios where usuario= '".$usuario."' and clave= '".$clave."' limit 1";
 	//echo $consulta;
 	$resConsulta=mysqli_query($con,$consulta);
 	if(mysqli_num_rows($resConsulta) > 0){
 		$respuesta = true;
 	}

 	$salidaJSON = array('respuesta' => $respuesta);
 	print json_encode($salidaJSON);
 }
 $opc = $_POST["opc"];
 switch ($opc) {
 	case 'validaentrada':
 		valida();
 		break;
 	
 	default:
 		# code...
 		break;
 }
?>