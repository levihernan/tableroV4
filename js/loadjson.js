var testAPI = "js/test.json";
var dataset ="";

jQuery.ajax({
    url: testAPI,
    type: "GET",
    dataType: "json",
    contentType: "application/text; charset=utf-8",
    success: function (data) {
      $.each(data, function(index, element) {
            $('body').append($('<div>', {
                text: element.name
            }));
        });
    },
    error: function (response) {
        console.log("failed API load");
    }
}).done(function(){

//Aqui dentro debe ser trabajada toda la DATA

});

// Nono, te pido disculpas 24/04/17 //
