function drawUltimosDatos(dataset, idCat, idVar){
  var month = new Array(12);
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

  tempDataValor = dataset[0].variables[1].serie.dataValor.slice(-12)
  tempDataVariacion = dataset[0].variables[1].serie.dataVariacion.slice(-12)
}
