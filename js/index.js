var capturador;

document.addEventListener("deviceready", function()
{
	capturador = navigator.device.capture;
}, false);

function audio(){
	capturador.captureAudio(capturoOK, capturoError);
}

function capturoOK(archivos){
	for(var i=0; i<archivos.length; i++){
		var ruta = archivos[i].fullPath;
		$("#resultado_calculadora").append(ruta);
		$("#resultado_calculadora").append(ruta).text();
	}
}

function capturoError(){
	alert("Error al capturar");
		$("#resultado_calculadora").append("ERROR CAPTURANDO");
		$("#resultado_calculadora").append("ERROR CAPTURANDO").text();
}