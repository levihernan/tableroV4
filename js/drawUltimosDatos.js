function drawUltimosDatos(dataset, idCat, idVar){
  month = new Array(12);
  month[0] = "Ene";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Abr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Ago";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dic";

  $('#ultimosDatosTable').html('');

  tempDataset =  dataset[idCat].variables[idVar].serie.data.slice(-12);

  tableTitle = "";

  tableHead = "<thead class='tableHead'><tr><td class='center-align'>Período</td><td class='center-align'>" + dataset[idCat].variables[idVar].serie.titulo + "</td>";

  if ( dataset[idCat].variables[idVar].serie.variacion) {
    tableHead += "<td class='center-align'>Variación</td>"
    tableHead += "</tr></thead>"
    tableRow = "";
    for (var i = 0; i < tempDataset.length; i++) {
      tempDate = new Date(tempDataset[i][0]);
      tableRow += "<tr class='rowTablero";
      if (dataset[idCat].variables[idVar].tablero.flecha) { tableRow += " showArrow";};
      if (dataset[idCat].variables[idVar].tablero.invertirFlecha) { tableRow += " invertirArrow";};

      tableRow += "'><td>" + month[tempDate.getUTCMonth()] + " " + tempDate.getUTCFullYear() + "</td><td>" + tempDataset[i][1] + "</td>";

      if (tempDataset[i][2]>0) {
        tableRow +=  "<td class='upValue'>"
      }
      else if (tempDataset[i][2]<0) {
        tableRow +=  "<td class='downValue'>"
      }
      tableRow += tempDataset[i][2];
      if (dataset[idCat].variables[idVar].tablero.variacionPorcentual) {
        tableRow += "%";
      }
      tableRow += "</tr>"
    }

  }

  else{
    tableHead += "</tr></thead>"
    tableRow = "";
    for (var i = 0; i < tempDataset.length; i++) {
      tempDate = new Date(tempDataset[i][0]);
      tableRow += "<tr class='rowTablero'><td>" + month[tempDate.getUTCMonth()] + " " + tempDate.getUTCFullYear() + "</td><td>" + tempDataset[i][1] + "</td></tr>"
    }
  }

  tableBody = "<tbody>" + tableRow + "</tbody>"

  $('#ultimosDatosTable').append(tableHead);
  $('#ultimosDatosTable').append(tableBody);


}
