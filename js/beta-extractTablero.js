var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/13_26_pkyl0VRr23fR3Hl3MQHBTd2_3N9bg35ZoNm-Zo/pubhtml';
var dataColumns = ['indicador', 'unidad', 'periodo_ud', 'valor', 'variacion_ia', 'periodo_ac', 'val_2016', 'var_16_15'];

function renderSpreadsheetData() {
  Tabletop.init( { key: public_spreadsheet_url,
                  debug: true,
                  callback: draw,
                  simpleSheet: true } )
}

function draw(dataTablero, tabletop) {
  $('#wrap').toggleClass('dissapear');
	// draw chart
	console.log("Data Tablero:");
	console.log(dataTablero);

  datasetTablero = dataTablero;
  tabulate();
  mobileTabulate();
  flechitas();
}

function tabulate() {
  tableData = '';
  for (var i = 0; i < datasetTablero.length-1; i++) {
    if (datasetTablero[i].indicador != "CATEGORIA") {
      tableRow = "<tr class='rowTablero'>";
      tableRow += "<td class='colIndicador'>" + datasetTablero[i].indicador + "</td>";
      tableRow += "<td class='colUnidad'>" + datasetTablero[i].unidad + "</td>";
      tableRow += "<td class='colPeriodo'>" + datasetTablero[i].periodo_ud + "</td>";
      tableRow += "<td class='colValor'>" + datasetTablero[i].valor + "</td>";
      tableRow += "<td class='colIA'>" + datasetTablero[i].variacion_ia + "</td>";
      tableRow += "<td class='colPeriodo'>" + datasetTablero[i].periodo_ac + "</td>";
      tableRow += "<td class='colValor'>" + datasetTablero[i].val_2016 + "</td>";
      tableRow += "<td class='colIA'>" + datasetTablero[i].var_16_15 + "</td></tr>";
    } else {
      tableRow = "</tbody><tbody id='"+ datasetTablero[i].periodo_ud +"'><tr class=''><td class='desktopCategoria' colspan='8'>" + datasetTablero[i].unidad + "</td></tr>";
    }
    tableData += tableRow
  }
  $('#desktopTable').append(tableData);
  //ULTIMA ACTUALIZACION en datasetTablero[length].unidad
}

function mobileTabulate() {
  tableData = '<table>';
  // for (var i = 0; i < datasetTablero.length-1; i++) {
  for (var i = 0; i < datasetTablero.length-1; i++) {
    if (datasetTablero[i].indicador != "CATEGORIA") {
      tableRow = "<tbody class='mobileSerie'>";
      tableRow += "<tr class='mobileIndicador'><td class='fullwidth'>" + datasetTablero[i].indicador + "</td></tr>";
      tableRow += "<tr class='mobileData'><td class='halfwidth'>Unidad</td><td class='halfwidth'>" + datasetTablero[i].unidad + "</td></tr>";
      tableRow += "<tr class='mobileTitulo'><td class='fullwidth'>Últimos datos</td></tr>";
      tableRow += "<tr class='mobileData'><td class='halfwidth'>Período</td><td class='halfwidth'>" + datasetTablero[i].periodo_ud + "</td></tr>";
      tableRow += "<tr class='mobileData'><td class='halfwidth'>Valor</td><td class='halfwidth'>" + datasetTablero[i].valor + "</td></tr>";
      tableRow += "<tr class='mobileData'><td class='halfwidth'>Variación IA</td><td class='halfwidth'>" + datasetTablero[i].variacion_ia + "</td></tr>";
      tableRow += "<tr class='mobileTitulo'><td class='fullwidth'>Acumulado</td></tr>";
      tableRow += "<tr class='mobileData'><td class='halfwidth'>Período</td><td class='halfwidth'>" + datasetTablero[i].periodo_ac + "</td></tr>";
      tableRow += "<tr class='mobileData'><td class='halfwidth'>Valor</td><td class='halfwidth'>" + datasetTablero[i].val_2016 + "</td></tr>";
      tableRow += "<tr class='mobileData'><td class='halfwidth'>Variación IA</td><td class='halfwidth'>" + datasetTablero[i].var_16_15 + "</td></tr></tbody>";
    } else {
      tableRow = "</table><table id='"+ datasetTablero[i].periodo_ud +"'><tr class='mobileCategoria'><td>" + datasetTablero[i].unidad + "</td></tr>";
    }
    tableData += tableRow;
  }
  $('#mobileTable').append(tableData);
  //ULTIMA ACTUALIZACION en datasetTablero[length].unidad
}


$(document).on('click touch', '#mobileTable tbody',function() {
	$(this).toggleClass('mobileSerieActive');
});
renderSpreadsheetData();
