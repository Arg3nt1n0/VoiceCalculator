document.addEventListener("deviceready", function()
{
	capturador = navigator.device.capture;
}, false);

function CapturarAudio()
{
	capturador.captureAudio(capturaOK, capturaError);
}

function capturaError()
{
	alert("Error al capturar");
}

function capturaOK(archivos)
{
	for(var i=0; i<archivos.length; i++)
	{
		var ruta = archivos[i].fullPath;
		$("#resultado_calculadora").append(ruta.text());
	}
}
