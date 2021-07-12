console.group("Grupo de descuentos y porcentajes")

function descuentos ( precio, descuento)
{

    const totalagagar = ( precio  - (precio * descuento)   / 100)  ;
    return totalagagar;

}

function calcular(){
  const inputprecio =  document.getElementById("precio");
  const valorinputprecio = inputprecio.value;

  const inputdescuento =  document.getElementById("descuento");
  const valorinputdescuento = inputdescuento.value;

   

   const resultadofuncion = descuentos(valorinputprecio, valorinputdescuento);

  const resultadop =  document.getElementById("resultadofinal");
  resultadop.innerText = "Precio con descuento es : " + resultadofuncion;


}


console.groupEnd