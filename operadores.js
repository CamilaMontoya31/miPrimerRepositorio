//operador de adición +
var operandoN1 = 5000;
var operandoN2 = 10000;
var resultado = operandoN1 + operandoN2;
console.log( resultado );

//operador de multiplicación *
var operandoN3 = 3;
var operandoN4 = 5;
var resultado2 = 3*5;
console.log( resultado2 );

//operandor /
var resultado3 = operandoN2 / operandoN4;
console.log( "El resultado de tu división es:" + resultado3 );

//operador de incremento ++
resultado3++;
console.log("Incrementando la variable resultado3:" + resultado3);

//Operadores de asignación
//Operador =
operandoN1 = operandoN2;
console.log( operandoN1 );

//Operador de suma y asignación +=
//Versión completa operandoN3=operando + operandoN4
operandoN3 += operandoN4;
console.log( operandoN3 );

//Operador de comparación
var nComparacion1 = 5;
var nComparacion2 = 10;
var resultadoComparacion = ( nComparacion1 < nComparacion2 )
console.log(resultadoComparacion);

//Operadores lógicos
var oplN1 = 8;
var oplN2 = 50; 
var oplN3 = 30;

// operador && (AND o Y)
var resultadoOperadorLY = ( oplN1 < oplN2 ) && ( oplN2 < oplN3 ); 
console.log( "El resultado del operador  AND, es:" + resultadoOperadorLY );

//Operador || ("OR")
var resultadoOperadorLO = ( oplN1 < oplN2 ) || ( oplN2 < oplN3); 
console.log( "El resultado del operador OR, es:" + resultadoOperadorLO );

//Operación negación !
var resultadoOperadorLN = !resultadoOperadorLO;
console.log( "El resultado del operador de Negación es:" + resultadoOperadorLN );
