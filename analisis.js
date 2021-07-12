const salariocom = colombia.map( 
    
    function(persona){
    return persona.salary; 
});

const nombrecom = colombia.map(function(persona){


   return persona.name;
})


const ordensalario = salariocom.sort( function(salarioa, Salariob){


    return salarioa - Salariob;


})


function espar(numero)
{
    return (numero % 2 === 0);
 }



 function mediasalarial(lista){
    const mitad = parseInt(lista.length / 2)

    if(espar(lista.length))
    {
        const personamitad1 = lista[mitad -1];
        const personamitad2 = lista[mitad];

        const mediana= calcularMediaAritmetica([personamitad1, personamitad2]);
        return mediana;

    }else
    {

        const personamitad = lista[mitad];

    }
 }

 function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
console.log(calcularMediaAritmetica(ordensalario))



const start =  (ordensalario.length * 90) /100;
const end = ordensalario.length - start;

const saliriotop10 = ordensalario.splice(start, end)

const medianaTop10 = (calcularMediaAritmetica(saliriotop10));








