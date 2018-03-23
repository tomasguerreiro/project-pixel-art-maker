// Select color input
// Select size input

const pixelCanvas =  $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid(height, weight) {
    //Cria o GRID
    for (let h = 0; h < height; h++) {
        pixelCanvas.append('<tr></tr>');      
        for (let w = 0; w < weight; w++) {
            $('tr:last-child').append('<td></td>');           
        }       
    }

}

$(pixelCanvas).on('click', 'td', function(){
    $(this).css("background-color", $("#colorPicker").val());
});


$('#sizePicker').submit(function(e){
    e.preventDefault();
    let inputHeight = $('#inputHeight').val();
    let inputWeight = $('#inputWeight').val();
    makeGrid(inputHeight, inputWeight);
});