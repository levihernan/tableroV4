function highstocks(dataset){
  // Create the chart
  Highcharts.stockChart('chart', {


    rangeSelector: {
      selected: 1
    },

    title: {
      text: jsondata[0].variables[1].serie.titulo
    },

    series: [{
      name: jsondata[0].variables[1].serie.titulo,
      data: jsondata[0].variables[1].serie.serie,
      tooltip: {
        valueDecimals: 2,
        valueSuffix: jsondata[0].variables[1].serie.simboloUnidad
      }
    }]
  });
};
