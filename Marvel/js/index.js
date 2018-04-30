var Marvel = function()
{
	var Buscar = function()
	{
		var Personaje = $("#txtPersonaje").val();
		var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=";
		var cantidadComics = 0;
		var cantidadStories =0;
		var cantidadSeries =0;
		var comics = "";
		var stories="";
		var series = "";
		url = url + Personaje;
		$.ajax({
			url: url,
			dataType: "json",
			success: function(response)
			{
				if(response.code == 200)//OK Todo salio bien
				{
					$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);
					$("#nombre").html(response.data.results[0].name);
					cantidadComics=response.data.results[0].comics.returned;
					for (var i = 0;i<cantidadComics;i++) {
						comics+=response.data.results[0].comics.items[i].name+"<br>";
					}
					$("#comics").html("Comics:<br>"+comics);

					cantidadStories=response.data.results[0].stories.returned;
					for (var i = 0;i<cantidadStories;i++) {
						stories+=response.data.results[0].stories.items[i].name+"<br>";
					}
					$("#stories").html("stories:<br>"+stories);

					cantidadSeries=response.data.results[0].series.returned;
					for (var i = 0;i<cantidadSeries;i++) {
						series+=response.data.results[0].series.items[i].name+"<br>";
					}
					$("#series").html("series:<br>"+series);
				}
			}
		});
	}
	var teclaPersonaje = function(tecla)
	{
		// Enter = 10 + 13
		//Retortno de carro y avance de linea
		if(tecla.which == 13)//Enter
		{
			Buscar();
		}
	}
	$("#btnBuscar").on("click",Buscar);
	$("#txtPersonaje").on("keypress", teclaPersonaje);
}
$(document).ready(Marvel);