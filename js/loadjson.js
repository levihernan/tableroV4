var testAPI = "js/data.json";
var dataset ="";

jQuery.ajax({
    url: testAPI,
    type: "GET",
    dataType: "json",
    contentType: "application/text; charset=utf-8",
    success: function (data) {

      jsondata = data

    },
    error: function (response) {
        alert("failed API load");
    }
}).done(function(){

  //Aqui dentro debe ser trabajada toda la DATA
  tabulate(jsondata);


});

// Nono, te pido disculpas 24/04/17 //
