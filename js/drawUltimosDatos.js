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

tempDataset =  dataset[idCat].variables[idVar].serie.data.slice(-12);

tableTitle = "";

tableHead = "<thead><tr><td>Período</td><td>" + dataset[idCat].variables[idVar].serie.titulo + "</td>";

if ( dataset[idCat].variables[idVar].serie.variacion) {
    tableHead += "<td>Variación</td>"
tableHead += "</tr></thead>"
tableRow = "";
for (var i = 0; i < tempDataset.length; i++) {
  tempDate = new Date(tempDataset[i][0]);
  tableRow += "<tr><td>" + month[tempDate.getUTCMonth() - 1] + " " + tempDate.getUTCFullYear() + "</td><td>" + tempDataset[i][1] + "</td><td>" + tempDataset[i][2] +"</tr>"
}
}

else{
tableHead += "</tr></thead>"
tableRow = "";
for (var i = 0; i < tempDataset.length; i++) {
  tempDate = new Date(tempDataset[i][0]);
  tableRow += "<tr><td>" + month[tempDate.getUTCMonth() - 1] + " " + tempDate.getUTCFullYear() + "</td><td>" + tempDataset[i][1] + "</td></tr>"
}
}

tableBody = "<tbody>" + tableRow + "</tbody>"

$('#ultimosDatosTable').append(tableHead);
$('#ultimosDatosTable').append(tableBody);


}
