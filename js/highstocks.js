function highstocks(dataset, idCat, idVar){
  suffixporcentual = "";
  if (jsondata[idCat].variables[idVar].serie.variacionPorcentual) {
    suffixporcentual = "%"
  }




  Highcharts.setOptions({
    lang: {
      weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      decimalPoint: ',',
      thousandsSep: '.'
    },
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
      text: "Fuente: " + jsondata[idCat].variables[idVar].serie.fuente,  //PONER FUENTE
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
      text: jsondata[idCat].variables[idVar].serie.titulo
    }

  })

  if ( jsondata[idCat].variables[idVar].serie.variacion ) {
    Highcharts.stockChart('chart', {
      yAxis: [{
        lineWidth: 2,
        opposite: false,
        labels: {
          align: 'left',
          x: 2
        },
        title: {
          text: jsondata[idCat].variables[idVar].serie.ejeY
        },
        height: '60%'
      },{
        lineWidth: 2,
        opposite: false,
        labels: {
          align: 'left',
          x: 2,
          enabled: false
        },
        title: {
          text: 'Variación anual'
        },
        top: '65%',
        height: '35%',
        offset: 0
      }],

      series: [{
        type: 'line',
        name: jsondata[idCat].variables[idVar].serie.titulo,
        data: jsondata[idCat].variables[idVar].serie.dataValor,
        tooltip: {
          valueDecimals: 2,
          valueSuffix: jsondata[idCat].variables[idVar].serie.simboloUnidad,
          xDateFormat: '%B, %Y',
        }
      }, {
        type: 'column',
        name: 'Variación anual',
        data: jsondata[idCat].variables[idVar].serie.dataVariacion,
        yAxis: 1,
        color: '#00b9f1',
        negativeColor: '#767676',
        tooltip: {valueSuffix: suffixporcentual}
      }]
    })
  }

  else {
    Highcharts.stockChart('chart', {
      yAxis: [{
        lineWidth: 2,
        opposite: false,
        labels: {
          align: 'left',
          x: 2
        },
        title: {
          text: jsondata[idCat].variables[idVar].serie.ejeY
        },
        height: '100%'
      }],

      series: [{
        name: jsondata[idCat].variables[idVar].serie.titulo,
        data: jsondata[idCat].variables[idVar].serie.dataValor,
        tooltip: {
          valueDecimals: 2,
          valueSuffix: jsondata[idCat].variables[idVar].serie.simboloUnidad,
          xDateFormat: '%B, %Y',
        }
      }]
    })
  }


};
