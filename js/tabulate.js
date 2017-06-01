function tabulate(dataset) {
  tableData = '<tbody>';
  for (var i = 0; i < dataset.length; i++) {
    tableData += "<tr class='bg-info'><td colspan='8' class='desktopCategoria'>" + dataset[i].categoria + "</td></tr>";
    for (var j = 0; j < dataset[i].variables.length; j++) {
      tableData += "<tr class='rowTablero ";
      if (dataset[i].variables[j].tablero.flecha){ tableData += "showArrow " };
      if (dataset[i].variables[j].tablero.invertirFlecha){ tableData += "invertirArrow " };
      tableData += "'>";
      tableData += "<td class='colIndicador'>" + dataset[i].variables[j].tablero.indicador + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.unidad + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.ultimoDato.periodo + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.ultimoDato.valor + "</td>";
      tableData += "<td class='";
      if (dataset[i].variables[j].tablero.ultimoDato.variacion > 0) {
        tableData += "upValue ";
      }
      else if (dataset[i].variables[j].tablero.ultimoDato.variacion < 0) {
        tableData += "downValue ";
      };
      tableData += "'>" + dataset[i].variables[j].tablero.ultimoDato.variacion;
      if(dataset[i].variables[j].tablero.variacionPorcentual){
        tableData += "%";
      };
      tableData += "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.acumulado.periodo + "</td>";
      tableData += "<td>" + dataset[i].variables[j].tablero.acumulado.valor + "</td>";
      tableData += "<td class='";
      if (dataset[i].variables[j].tablero.ultimoDato.variacion > 0) {
        tableData += "upValue ";
      }
      else if (dataset[i].variables[j].tablero.ultimoDato.variacion < 0) {
        tableData += "downValue ";
      };
      tableData += "'>" + dataset[i].variables[j].tablero.acumulado.variacion;
      if(dataset[i].variables[j].tablero.variacionPorcentual){
        tableData += "%";
      };
      tableData += "</td></tr>";
    }
  }
  $('#desktopTable').append(tableData);

  $('#aclaraciones').append("<!-- FALTAN ACLARACIONES -->")
}

function mobileTabulate(dataset) {
  tableData = '';
  tableRow = '';
  for (var i = 0; i < dataset.length; i++) {
    tableRow = "<table class='mobileTable' id='"+ dataset[i].categoria +"'><tr class='mobileCategoria'><td>" + dataset[i].categoria + "</td></tr>";
    for (var j = 0; j < dataset[i].variables.length; j++) {
      tableRow += "<tbody class='mobileSerie "
      if (dataset[i].variables[j].tablero.flecha){
        tableRow += "showArrow ";
        if (dataset[i].variables[j].tablero.invertirFlecha){
          tableRow += "invertirArrow "
        };
      };
    tableRow += "' onclick='toggleTableActive()'>";
    tableRow += "<tr class='mobileIndicador'><td class='fullwidth'>" + dataset[i].variables[j].tablero.indicador + "</td></tr>";

    tableRow += "<tr class='mobileData'><td class='halfwidth'>Unidad</td><td class='halfwidth'>" + dataset[i].variables[j].tablero.unidad + "</td></tr>";
    tableRow += "<tr class='mobileTitulo'><td class='fullwidth'>Últimos datos</td></tr>";
    tableRow += "<tr class='mobileData'><td class='halfwidth'>Período</td><td class='halfwidth'>" + dataset[i].variables[j].tablero.ultimoDato.periodo + "</td></tr>";
    tableRow += "<tr class='mobileData'><td class='halfwidth'>Valor</td><td class='halfwidth'>" + dataset[i].variables[j].tablero.ultimoDato.valor + "</td></tr>";
    tableRow += "<tr class='mobileData'><td class='halfwidth'>Variación IA</td><td class='halfwidth ";
    if (dataset[i].variables[j].tablero.ultimoDato.variacion > 0) {
      tableRow += "upValue ";
    }
    else if (dataset[i].variables[j].tablero.ultimoDato.variacion < 0) {
      tableRow += "downValue ";
    };
    tableRow += "'>" + dataset[i].variables[j].tablero.ultimoDato.variacion;
    if(dataset[i].variables[j].tablero.variacionPorcentual){
      tableRow += "%";
    };
    tableRow += "</td></tr>";
    tableRow += "<tr class='mobileTitulo'><td class='fullwidth'>Acumulado</td></tr>";
    tableRow += "<tr class='mobileData'><td class='halfwidth'>Período</td><td class='halfwidth'>" + dataset[i].variables[j].tablero.acumulado.periodo + "</td></tr>";
    tableRow += "<tr class='mobileData'><td class='halfwidth'>Valor</td><td class='halfwidth'>" + dataset[i].variables[j].tablero.acumulado.valor + "</td></tr>";
    tableRow += "<tr class='mobileData'><td class='halfwidth'>Variación IA</td><td class='halfwidth "
    if (dataset[i].variables[j].tablero.acumulado.variacion > 0) {
      tableRow += "upValue ";
    }
    else if (dataset[i].variables[j].tablero.acumulado.variacion < 0) {
      tableRow += "downValue ";
    };
    tableRow += "'>" + dataset[i].variables[j].tablero.acumulado.variacion;
    if(dataset[i].variables[j].tablero.variacionPorcentual){
      tableRow += "%";
    };
    tableRow += "</td></tr></tbody>";
  }
  tableData += tableRow;
}
$('#mobileTable').append(tableData);
$('.mobileSerie').on('click', function(){$(this).toggleClass('mobileSerieActive')})
}



function toggleTablero(){
  if($('#tableroContainer').hasClass('hideContainer')){
    $('#chartContainer').toggleClass('hideContainer');
    $('#tableroContainer').toggleClass('hideContainer');
  }
};
