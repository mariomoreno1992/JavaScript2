let marcas =["BAOFENG","BELDEN", "BOTAFOGO", "BRASFORMA", "CAMBIUM", "CAME", "CDP", "CENTURY", "COFEM", "CONTEC", "DAHUA", "DIMAX", "DORTEC", "DSPPA", "EVERSPRING",
"EXCELLTEL", "FIBERHOME", "FITCONN-SALUD", "GAREN", "GENERICO-SALUD", "GET FIT PRO", "GRANDSTREAM", "HID GLOBAL", "HONEYWELL", "HUBSAN", "HYTERA", "HYUNDAI",
"IGECAST", "INSKAM", "INTELBRAS", "ITC", "JFL", "JWM", "KOCOM", "KONCARE", "KUWES", "LENKENG", "MCDI", "MEITRACK", "MERCUSYS", "MIKROTIK", "MIMOSA", "MIRCOM",
"OPTEX", "ORIENTEK", "ORVIBO", "PANDUIT", "PARADOX", "POLYGARD", "QNAP", "QUECLINK", "SAFEWELL", "SAMSUNG", "SANDISK", "SASO", "SEAGATE", "SENTEK", "TAKEX",
"TOLSEN", "TP-LINK", "TRAM BROWNING", "TRENDNET", "TYSSO", "UBIQUITI", "UNI-T", "V-SOL", "VICOM", "VIVOTEK", "VT", "WEJOIN", "WESTERN DIGITAL", "XIAOMI", "YEALINK",
"YEASTAR", "YLI", "ZKTECO", "#",

];

let  acumulador = [];

marcas.forEach(function(marca)
{

    acumulador = acumulador + marca[0];
    const container =  document.getElementById("container");




    container.innerHTML =  '<div>' + acumulador+  '</div>';

})




const resultado = Object.entries(acumulador).filter((item, index)=>
{
    return acumulador.indexOf(item) === index;
}
);

