// Desafio 11 - Crie a função generatePhoneNumber
function generatePhoneNumber(numeros) {
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    let contador = 0;
    for (let index2 = 0; index2 < numeros.length; index2 += 1) {
      if (numeros[index] === numeros[index2]) {
        contador += 1;
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  const DDD = numeros.slice(0, 2).join('');
  const comeco = numeros.slice(2, 7).join('');
  const fim = numeros.slice(7).join('');

  return `(${DDD}) ${comeco}-${fim}`;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 8]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));
console.log(generatePhoneNumber([1, 2, 8, 4, 5, 8, 7, 8, 9, 8, 11]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12 -  Crie a função triangleCheck
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {    
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
      return true; 
    }
  }
  return false; 
}

console.log(triangleCheck(10, 4, 5));
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(10, 14, 8));

// Desafio 13 - Crie a função hydrate
function hydrate(string) {
  const numeros = string.match(/\d+/g);
  const soma = numeros.reduce((total, number) => total + parseInt(number), 0);
  const suggestion = soma === 1 ? 'copo de água' : 'copos de água';

  return `${soma} ${suggestion}`;
}
console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};
