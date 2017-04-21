// $.getJSON("js/data.json", function(json) {
// dataset = json;
//     console.log(dataset); // this will show the info it in firebug consol
//
// });

// $.getJSON('http://revistasandia.com/misc/test.json', function(data) {
//     document.getElementById("demo").innerHTML = data["categoria"];
// });

var jsonTest = $.getJSON('http://revistasandia.com/misc/test.json');
document.getElementById('id').innerHTML += jsonTest.catergoria;
