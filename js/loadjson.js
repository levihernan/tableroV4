var testAPI = "js/test.json";

// $.getJSON(testAPI, function(data) {
//   // dataset = data
// }, dataset = data);
// alert(dataset.name)


jQuery.ajax({
    url: testAPI,
    type: "GET",
    dataType: "json",
    contentType: "application/text; charset=utf-8",
    success: function (data) {
      alert('lalala')
    },
    error: function (response) {
        console.log("failed API load");
    }
}).done(function(){
    console.log(provincias_general_data);
    load_map();
    // loadDonutData();
});
