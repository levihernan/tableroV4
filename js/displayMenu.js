function displayMenu(dataset) {
  tableData = '';
  for (var i = 0; i < dataset.length; i++) {
    tableData += '<ul class="collapsible collapsible-accordion"><li><a class="collapsible-header">' + dataset[i].categoria + '<i class="material-icons">arrow_drop_down</i></a><div class="collapsible-body"><ul>'
    for (var j = 0; j < dataset[i].variables.length; j++) {
      tableData += '<li><a class="waves-effect" href="#" onclick="">' + dataset[i].variables[j].nombre + '</a></li>'
    }
    tableData += '</ul></li></ul>'
  }
  $('#menuContent').append(tableData);
}
