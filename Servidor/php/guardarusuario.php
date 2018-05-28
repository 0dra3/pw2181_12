<?php 
include 'conexiones.php';
 function guardarusuario(){
 	//Conectarnos al servidor de BD
 	$respuesta=false;
 	$usuario=GetSQLValueString($_POST["usuario"],"text");
 	$nombre=GetSQLValueString($_POST["nombre"],"text");
 	$clave=GetSQLValueString(md5($_POST["clave"]),"text");
 	$con=conecta();
 	//$consulta="select usuario from usuarios where usuario= '".$usuario."' limit 1";
 	$consulta=sprintf("select usuario from usuarios where usuario = %s",$usuario);
 	
 	//echo $consulta;
 	$resConsulta=mysqli_query($con,$consulta);
 	//Si ya existe ne la tabla
 	if(mysqli_num_rows($resConsulta) > 0){
 		$consultaGuarda = sprintf("update usuarios set nombre = %s,clave = %s where usuario = %s where usuario =%s",$nombre,$clave,$usuario);

 		}else {
 			$consultaGuarda=sprintf
 			("insert into usuarios values(default,usuario,nombre,clave) values(default,%s,%s,%s)",$usuario,$nombre,$clave);
 		}

 		mysqli_query($con,$consultaGuarda);
 		if(mysqli_affected_rows($con) >0 )
 		{
 			$respuesta=true;
 		}
 	$salidaJSON = array('respuesta' => $respuesta);

 	print json_encode($salidaJSON);
 }
 $opc = $_POST["opc"];
 switch ($opc) {
 	case 'guardarUsuario':
 		guardarusuario();
 		break;
 	
 	default:
 		# code...
 		break;
 }
?>