/*This file is for your custom js.  All yours*/

// Calls input from form-input.html

$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = ($("#blank").val());

    var output = "";

    $('#output').text(output);

  });
});
