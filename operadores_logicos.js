 // Operadores lógicos

// v -> verdadeiro
// f -> Falso

/** 
v v -> v
f v -> f
v f -> f
f f -> f
*/

const media = (3.5 + 6 + 10 ) / 3
const presenca = 0.95

console.log(media >= 7 && presenca >= 0.8)

// operador ou

/**
 * vv -> v
 * fv -> v
 * vf -> v
 * ff -> f
 */

console.log(4 > 7 || 3 < 2) 
console.log(5 > 3.5 || 7> 8)



//const idade = 15

//console.log(idade >= 16 || idade > 60)


// Operador não

//** not v -> f
//**  not f -> v */

const resultado = 5 < 3

console.log(!resultado)  // representa o não
