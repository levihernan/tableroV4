function highstocks(dataset){
  // Create the chart
  Highcharts.setOptions({
    lang: {
      weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      decimalPoint: ',',
      thousandsSep: '.'
    }
  })
  Highcharts.stockChart('chart', {
    rangeSelector: {
      buttons: [{
        type: 'month',
        count: 6,
        text: '6m'
      },
      {
        type: 'year',
        count: 1,
        text: '1y'
      },
      {
        type: 'year',
        count: 2,
        text: '2y'
      },
      {
        type: 'all',
        text: 'All'
      }],
      selected: 2,
      inputEnabled: false,
    },
    credits: {
      enabled: true,
      text: "Fuente: " + jsondata[0].variables[1].serie.fuente,  //PONER FUENTE
      href: '',
      style: { "cursor": "default", "color": "#999999", "fontSize": "12px" },
      position: {
           align: 'right'
       }
     },

     plotOptions: {
         series: {
             connectNulls: true
         }
     },

    title: {
      text: jsondata[0].variables[1].serie.titulo
    },

    yAxis: [{
       lineWidth: 2,
       opposite: false,
       labels: {
           align: 'left',
           x: 2
       },
       title: {
           text: jsondata[0].variables[1].serie.ejeY
       },
       height: '100%'
   }],

    series: [{
      name: jsondata[0].variables[1].serie.titulo,
      data: jsondata[0].variables[1].serie.serie,
      tooltip: {
        valueDecimals: 2,
        valueSuffix: jsondata[0].variables[1].serie.simboloUnidad,
        xDateFormat: '%B, %Y',
      }
    }]
  });
};
