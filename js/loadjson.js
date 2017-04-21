var testAPI = "js/test.json";

$.getJSON(testAPI, function(data) {
  alert(data.name);
  alert(data.categoria);
});
