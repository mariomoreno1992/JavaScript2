//const lista1= [500, 400, 600, 1000];
//let sumatotal = 0;
//for(i = 0 ; i< lista1.length; i++){

  //  sumatotal = sumatotal + lista1[i];
//}

//let promedio = sumatotal / lista1.length;

function mediaaritmetica(lista)
{
   let sumatotal =  lista.reduce(
       function(valoracomulado =0, nuevoelemento)
       {

        return valoracomulado + nuevoelemento
       }
   )
//   for(let i = 0; i < lista.length ; i++)
//   {
//     sumatotal = sumatotal + lista[i];
//    }


    const promedio = sumatotal / lista.length;
    return promedio;
}
