dataset = [
  {
  categoria: "Sector Real" //Título de la categoría que se despliega en el menú max 30 char
  variables: [
    {
      nombre: "Producción Automotriz", //Nombre que irá en el Menú max 30 char
      tablero: {
        indicador: "Producción Automotriz (1)", //Nombre para el Tablero max 50 char
        unidad: "Índice <nobr>(Ene-2015=100)</nobr>" //Diferenciar non-breakable para que no salte de renglón (max 20 char por renglon)
        ultimoDato:[
          periodo: "Sep-16", //String max 20 char
          valor: 2330123, //Número
          variacion: -14 //Número que se le agregará el símbolo porcentual %
        ],
        acumulado:[
          periodo: "Anual", //String max 20 char
          valor: 2330123, //Número
          variacion: -7 //Número que se le agregará el símbolo porcentual %
        ],
        flecha: true, //Indicador de si la variación despliega flecha verde/roja o no
        invertirFlecha: false //Indicador de si flecha verde cuando valor decrece (como en Desempleo)
      },
      serie: {
        titulo: "Producción Automotriz", //Título para la pantalla de serie max 50 char
        unidad: "En miles de dólares", //Subtítulo para la sección Ultimos Datos max 50 char
        ejeY: "Miles de USD$", //Referencia para el eje Y max 20 char
        simboloUnidad: "k USD$" //Indicador para el mouseover del gráfico "134.5k USD$""
        variacion: true, //Si el gráfico cuenta con variacion o no
        variacionPorcentual: true //Si la variación lleva un valor porcentual o por unidades
        fuente: "INDEC", //String
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." //String max 400 char
        serie: [[/*tiempo*/],[/*valor*/],[/*variacion*/]]
        //3 arrays: tiempo debe venir en formato UTC; valor y variación en número (a variación se le agregará el %)
      }
    },
    {/*variable 2*/},
    {/*variable 3*/}
  ]
  },
  {/*categoria 2*/},
  {/*categoria 3*/}
];
misc = {
  ultimoUpdate: "20 de Junio",
  aclaraciones: [
    "(1) La variacion es en terminos reales",
    "(2) La variacion es en valores absolutos" //Array con aclaraciones en string, cada item será un renglón nuevo
  ],
  urlPortal: "http://www.produccion.gob.ar/portaldedatos" //Array con URL del portal de datos (por si cambia de lugar)
}
