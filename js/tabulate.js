function displayMenu(dataset) {
  tableData = '<tbody>';
  for (var i = 0; i < dataset.length; i++) {
    tableData += "s<tr class='bg-info'><td colspan='8' class='desktopCategoria'>" + dataset[i].categoria + "</td></tr>";
    for (var j = 0; j < dataset[i].variables.length; j++) {
      tableData += "<tr class='rowTablero'><td class='colIndicador'>" + dataset[i].variables[j].tablero.indicador + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.unidad + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.ultimoDato.periodo + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.ultimoDato.valor + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.ultimoDato.variacion + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.acumulado.periodo + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.acumulado.valor + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.acumulado.variacion + "</td></tr>";
    }
  }
  $('#desktopTable').append(tableData);
}
