// JavaScript Document

$(document).ready(function() { // Reproductor
	$("#select").change(function(){
		var indice=$("#select option:selected").index();
		var valor=$("#select").val();
		var texto=$("#select option:selected").text();

	if(indice==0||indice==1||indice==2||indice==9||indice==11||indice==12||indice==13||indice==15||indice==18||indice==20||indice==22||indice==23||indice==26||indice==27){

		$("#valorSeleccionado").attr("src",valor).attr("type","audio/mpeg");
		audio.load();
		audio.play();

	}
	else if($("#valorSeleccionado").removeAttr("type","audio/mpeg").attr("src",valor)){
		audio.load();
		audio.play();

	}

	var ListaEmisoras=[
	"Lista de emisoras",
	
	'<img src="img/Onda_Brava_175x100.png" alt="Compu Parrita Radio" />',

	'<img src="img/wao.png" alt="Compu Parrita Radio" />',

	'<img src="img/Omega.png" alt="Compu Parrita Radio" />',

'<img src="img/radio-teletica.png" alt="Compu Parrita Radio" />',

	'<img src="img/Columbia.png" alt="Compu Parrita Radio" />',

	'<img src="img/radio-musical.png" alt="Compu Parrita Radio" />',

	'<img src="img/Conexion_Urbana.png" alt="Compu Parrita Radio" />',
	
	'<img src="img/Radio_America.png" alt="Compu Parrita Radio" />',
	
	'<img src="img/Sinfonola.png" alt="Compu Parrita Radio" />',
	
	'<img src="img/Sinai.png" alt="Compu Parrita Radio" />',
	
	'<img src="img/Besame.png" alt="Compu Parrita Radio" />',
	
	'<img src="img/mroc.gif" alt="Compu Parrita Radio" />',
	
		"separador13",

	'<img src="img/notasm.gif" alt="Compu Parrita Radio" />',
	
	'<img src="img/la-sandino-am.png" alt="Compu Parrita Radio" />',
	
	'<img src="img/notasm.gif" alt="Compu Parrita Radio" />',
	
	'<img src="img/notasm.gif" alt="Compu Parrita Radio" />',
	
	"18",
	
	"",
	
	"",
	
	"21",
	
	"separador22",
	
	'<img src="img/notasm.gif" alt="Compu Parrita Radio" />',

	];

	$("#SubTituloEmisora").html(ListaEmisoras[indice]);
	
	});
});



// Efecto Titulo emisora
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3)
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
};



/* add remove clase */
function ocultar() {
  var cambiarClase = document.getElementById("MostrarAqui");
  cambiarClase.classList.add("ocultar");
};

function ocultarTituloEmisora() {
  var cambiarClase = document.getElementById("TituloEmisora");
  cambiarClase.classList.add("ocultar");
  cambiarClase.remove("ocultar");

};

/* FIN add remove clase */