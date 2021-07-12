let  lista = [10, 20, 30, 25, 13];

let mitadlista = parseInt(lista.length /2) ;

function espar(numero)
{
    if( numero  % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}


let mediana;

if(espar(lista.length))
{


}
else
{
    mediana = lista[mitadlista];
}
