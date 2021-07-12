//codigo para calcular cuadrados 
console.group("Grupo cuadrado");

//const ladocuadrado= 5;
//console.log("los lados de un cuadrado miden  :" + ladocuadrado + " cm" );

function perimetrocuadrado(lado)
{

   return lado * 4;
} 


function areacuadra(lado)
{
    return lado * lado;
}

//const areacuadra= ladocuadrado * ladocuadrado;
//console.log("   area cuadra   :" + areacuadra +" cm2");

//console.log("El perimetro cuadrado es   :" + perimetrocuadrado + " cm");

console.groupEnd();


//codigo para calcular triangulos
console.group("Grupo Triangulo")
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;
//const alturatriangulo = 5.5;

//const areatriangulo = (basetriangulo * alturatriangulo) /2 ;


function perimetrotriangulo(ladotriangulo1, ladotriangulo2, basetriangulo)
{

     perimetro = ladotriangulo1 + ladotriangulo2 + basetriangulo;
     return console.log("El perimetro triangulo es de:  " + perimetro);
}

function areatriangulo (basetriangulo, alturatriangulo)
{

    area = (basetriangulo * alturatriangulo) /2;

    return console.log("El area de un triangulo es de:  " +area + "cm2");


}







//console.log("El lado triangulo  1 es de:  " + ladotriangulo1 + "cm");
//console.log("El lado triangulo 2 es de:  " +ladotriangulo2 + "cm");
//console.log("La base de el triangulo es de:  ",  + basetriangulo + "cm");
//console.log("La altura del triangulo es de:  " + alturatriangulo+ "cm");
//console.log("El perimetro triangulo es de:  " + perimetrotriangulo + "cm");
//console.log("El area de un triangulo es de:  " +areatriangulo + "cm2");


console.groupEnd();

// comienzo de la circunferencia 

console.group("Circulo")
//const radiocirculo = 4;
//const diametrocirculo = radiocirculo * 2 ;
//const PI = Math.PI;
//const perimetrocirculo = diametrocirculo * PI;
//const areacirculo = (radiocirculo * radiocirculo) * PI;
function diametrocirculo(radiocirculo)
{

    radio =    radiocirculo * 2
    console.log("El radio del circulo es :" + radio )
}

function perimetrocirculo(diametrocirculo)
{

    perimetro = diametrocirculo * Math.PI;
    console.log("El perimetro del circulo es : " + perimetro)

}

function areacirculo (radiocirculo)
{

    area = (radiocirculo * radiocirculo) * Math.PI;
    return console.log("area del Circulo es de  :" + area)

}


console.groupEnd();
// triangulo de isoceles


console.group("Triangulo de isoceles")



////////////////////////////
function calcularperimetrocuadrado()
{
    const inputcuadrado = document.getElementById("ladodeuncuadrado");

    const  valordeinput = inputcuadrado.value;
    const perimetro = perimetrocuadrado(valordeinput)

     alert("El perimetro de un cuadrado es de cm:  " + perimetro);
}

function calcularareacuadra()
{
    const inputcuadrado = document.getElementById("ladodeuncuadrado");

    const  valordeinput = inputcuadrado.value;

    const area = areacuadra(valordeinput)

     alert("El area cuadrada de tu cuadrado  es de cm2:  " + area);

}


