// // Select color input
// // Select size input

// // When size is submitted by the user, call makeGrid()


$("input[type='submit']").on("click", function(event){
    event.preventDefault();
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    $("#pixelCanvas").empty();
    makeGrid(height, width);    
});

$("#pixelCanvas").on("click", "td", function(){
    $(this).css("background-color", $("#colorPicker").val());
});


function makeGrid(height, width) {
    for (var i = 0; i < height; i++) {
        $("#pixelCanvas").append($("<tr></tr>"));
        
        for (var j = 0; j < width; j++) {
            $("tr").last().append($("<td></td>"));
        }
    }
}
