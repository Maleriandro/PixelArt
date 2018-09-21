var paleta = $("#paleta");

var clickApretado = false;

var color = "rgb(255, 255, 255)";

var grillaPixeles = $("#grilla-pixeles");

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

function agregarColoresPaleta() {
  for (let i = 0; i < nombreColores.length; i++) {
    var colorDePaleta = nombreColores[i];
    
    var div = $('<div>');
    div.addClass('color-paleta').css('background-color', colorDePaleta);

    paleta.append(div);
  }
}

function crearGrillaPixelArt() {
    for (let i = 0; i < 1750; i++) {
        var div = $('<div>');
        
        grillaPixeles.append(div);
    }
}

function elegirColorDeRuedaColores() {
  color = colorPersonalizado.value;

  $('#indicador-de-color').css('background-color', color);
}

function cambiarColorSeleccionado() {
    color = $(this).css('background-color');

    $('#indicador-de-color').css('background-color', color);
}

function pintarPixel() {
    $(this).css('background-color', color);        
}

function pintar() {
  if (clickApretado) {
    $(this).css('background-color', color);
  }       
}

function borrarTodo() {
    $('#grilla-pixeles div').animate({
        'background-color': '#ffffff'
    }, 3000);
}

function seleccionarSuperheroe() {
    var superheroe = $(this).attr('id');
    
    switch (superheroe) {
        case 'batman':
            cargarSuperheroe(batman);
            break;
        
        case 'wonder':
            cargarSuperheroe(wonder);
            break;
        
        case 'flash':
            cargarSuperheroe(flash);
            break;
        
        case 'invisible':
            cargarSuperheroe(invisible);
            break;
        
        
        default:
            break;
    }
}

////////////////////////////////////////////////////////////////////////////

agregarColoresPaleta();
crearGrillaPixelArt();

$('.color-paleta').on('click', cambiarColorSeleccionado);
$('#grilla-pixeles div').on('click', pintarPixel);
$('#color-personalizado').on('change', elegirColorDeRuedaColores);

$('html').mousedown(function() {
    clickApretado = true;

}).mouseup(function() {
    clickApretado = false;
});

$('#grilla-pixeles div').mousemove(pintar);

$('#borrar').click(borrarTodo);

$('.imgs img').click(seleccionarSuperheroe)

$('#guardar').click(guardarPixelArt);