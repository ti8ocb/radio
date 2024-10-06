// JavaScript Document

$(document).ready(function () { // Reproductor
  $('select').change(function () {
    var indice = $('option:selected', this).index();
    var texto = $('option:selected', this).text();
//    var valor = $('option:selected', this).val();
    //var url = document.getElementById('select').value;


    var ListaEmisoras = ["Cristiana divulgación del mensaje cristiano", "Música en español 90s, para volver a vivir...!", "Música en inglés", "Emisora que te ENAMORA!!! desde el Volcán Irazú", "Éxt tropicales, plancha, ranchera, cumbias, puro “chiqui chiqui”", "Musica, reportes de tránsito y más.", "Lo mejor de los 80's y 90's", "Romántica, éxitos de los 70s", "Emisora del Grupo Radiofónico Omega", "Emisora de música latina las 24 horas.", "Orotina Online", "Para el mundo, 24 horas de música y entretenimiento.", "Columbia 98.7 FM", "Conexión Urbana urbano y pop latino.", "Liberia, variada, recuerdos y contemporánea 80s 90s", "Radio Musical 97.5FM, la compañera romántica.", "Radio Sinfonola 90.3 FM, Música para recordar", "♡ Éxitos que fueron de uno y ahora son de 2.", "Radio Sinaí, Pz.", "La radio romántica y moderna de Costa Rica", "Aeropuerto Internacional Juan Santamaría", "Separador", "Radio Corporación, Nicaragua", "La Sandino, Nicaragua", "La Nueva Radio ya!, Nicaragua", "La Chinandegana, Nicaragua", "Siuna La Poderosa, Nicaragua", "Radio Bonanza...", "Separador", "Omega Stereo Panamá", "", "Actualidad 90.3 FM, Venezuela", "Caracol Radio 100.9 FM, Venezuela", "Radio La Voz de Carabobo 1040 AM", "Tamá Stereo 103.9 FM / San Cristóbal"];

    $("#contador").html([indice]);
    $("#TituloEmisoras").html([texto]);
    $("#TituloEmisora").html(ListaEmisoras[indice]);
    //$("#repro").html([valor]);

  });
});
