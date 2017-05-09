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


// function flechitas() {
//   for (var i = 0; i < $('.ultimodatovar').length; i++) {
//     if ($('.ultimodatovar')[i].innerHTML < 0) {
//       $('.ultimodatovar')[i].classList.add("downValue");
//     }
//     if ($('.ultimodatovar')[i].innerHTML > 0) {
//       $('.ultimodatovar')[i].classList.add("upValue");
//     }
//   }
//   for (var i = 0; i < $('.acumuladovar').length; i++) {
//     if ($('.acumuladovar')[i].innerHTML < 0) {
//       $('.acumuladovar')[i].classList.add("downValue");
//     }
//     if ($('.acumuladovar')[i].innerHTML > 0) {
//       $('.acumuladovar')[i].classList.add("upValue");
//     }
//   }
// }
