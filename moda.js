const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {};
  
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];
  





let marcas =["BAOFENG", "BELDEN", "BOTAFOGO", "BRASFORMA", "CAMBIUM", "CAME", "CDP", "CENTURY", "COFEM", "CONTEC", "DAHUA", "DIMAX", "DORTEC", "DSPPA", "EVERSPRING",
"EXCELLTEL", "FIBERHOME", "FITCONN-SALUD", "GAREN", "GENERICO-SALUD", "GET FIT PRO", "GRANDSTREAM", "HID GLOBAL", "HONEYWELL", "HUBSAN", "HYTERA", "HYUNDAI",
"IGECAST", "INSKAM", "INTELBRAS", "ITC", "JFL", "JWM", "KOCOM", "KONCARE", "KUWES", "LENKENG", "MCDI", "MEITRACK", "MERCUSYS", "MIKROTIK", "MIMOSA", "MIRCOM",
"OPTEX", "ORIENTEK", "ORVIBO", "PANDUIT", "PARADOX", "POLYGARD", "QNAP", "QUECLINK", "SAFEWELL", "SAMSUNG", "SANDISK", "SASO", "SEAGATE", "SENTEK", "TAKEX",
"TOLSEN", "TP-LINK", "TRAM BROWNING", "TRENDNET", "TYSSO", "UBIQUITI", "UNI-T", "V-SOL", "VICOM", "VIVOTEK", "VT", "WEJOIN", "WESTERN DIGITAL", "XIAOMI", "YEALINK",
"YEASTAR", "YLI", "ZKTECO", "#",

];

let acumulador = marcas.map(function(marca)
{

   return marca[0];
  
});


const resultado = acumulador.filter((item, index)=>
{
    return acumulador.indexOf(item) === index;
}
);




















