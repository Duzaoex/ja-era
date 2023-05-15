// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(parametro1, parametro2) {
  if (parametro1 && parametro2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(girafa, elefante));
// Desafio 2 - Crie a função splitSentence
const splitSentence = (palavrasMotivacao) => palavrasMotivacao.split(' ');

console.log('go Trybe');
console.log('vamo que vamo');
console.log('foguete');
// Desafio 3 - Crie a função concatName
function concatName(array) {
  const primeiroNome = array[0];
  const ultimoNome = array[array.length - 1];
  return `${ultimoNome}, ${primeiroNome}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  const ponrotsPorVitoria = 3;
  const pontosPorEmpate = 1;

  const pontuacao = wins * ponrotsPorVitoria + ties * pontosPorEmpate;
  return pontuacao;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  let maiorNumero = Math.max(...array); // Encontra o maior número no array
  let contador = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      contador += 1;
    }
  }

  return contador;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
// nao vimos spread nem math.max mas pesquisando no google vi que
// A função Math.max() é uma função embutida em JavaScript que retorna
//  o maior valor entre dois ou mais números passados como argumentos.
// Ela pode ser utilizada para encontrar o maior número em um array.

// O operador de spread (...) dentro de um parâmetro de uma função em
// JavaScript é chamado de "rest parameter" ou "parâmetro de rest".
// Ele permite que você passe um número indefinido de argumentos para uma
// função e os agrupe em um array.
// Ao utilizar o operador ... antes de um parâmetro de função, ele irá coletar 
// todos os argumentos passados para a função e agrupá-los em um array dentro desse
// parâmetro. Dessa forma, você pode lidar com uma quantidade variável de argumentos de forma conveniente.

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

function calcAllAreas(base, height, form) {
  if (form === "triângulo") {
    const triangleArea = calcTriangleArea(base, height);
    return `O valor da área do triângulo é de: ${triangleArea}`;
  } else if (form === "retângulo") {
    const rectangleArea = calcRectangleArea(base, height);
    return `O valor da área do retângulo é de: ${rectangleArea}`;
  } else {
    return "Não foi possível fazer o cálculo, insira uma forma geométrica válida";
  }
}
console.log(calcTriangleArea(10, 50));
console.log(calcRectangleArea(10, 50));
console.log(calcAllAreas(10, 50, "triângulo"));
console.log(calcAllAreas(10, 50, "retângulo"));
console.log(calcAllAreas(10, 50, "círculo"));

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  const distancia1 = Math.abs(mouse - cat1);
  const distancia2 = Math.abs(mouse - cat2);

  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia1) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(2, 3, 5));
console.log(catAndMouse(10, 6, 12));
console.log(catAndMouse(8, 5, 5));
// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(numeros) {
  const resultado = [];

  for (let numero of numeros) {
    if(numero % 3 === 0 && numero % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numero % 3 === 0) {
      resultado.push('fizz');
    } else if (numero % 5 === 0) {
      resultado.push('buzz')
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));
// Desafio 9 - Crie a função encode e a função decode
function encode (string) {
  let trocaLPN = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };
  let recebeOsNumerosDasLetras = '';

  for (let index = 0; index < string.length; index += 1) {
    const letras = string[index].toLowerCase();
    if (letras in trocaLPN) {
      recebeOsNumerosDasLetras += trocaLPN[letras];
    } else {
      recebeOsNumerosDasLetras += string[index];
    }
  }
  return recebeOsNumerosDasLetras;
}
function decode (reverso) {
  let trocaNPL = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let recebeAsLetrasDosNumeros = '';

  for (let index = 0; index < reverso.length; index += 1) {
    const numeros = reverso[index];
    if (numeros in trocaNPL) {
      recebeAsLetrasDosNumeros += trocaNPL[numeros];
    } else {
      recebeAsLetrasDosNumeros += reverso[index];
    }
}
return recebeAsLetrasDosNumeros;
}
console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test'));
console.log(encode('go Trybe!'));
console.log(decode('h2ll4'));
console.log(decode('H4w 1r2 y45 t4d1y?'));
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st'));
console.log(decode('g4 Tryb2!'));
// Desafio 10 - Crie a função techList
function techList(tech, name) {
  if (tech.length === 0) {
    return [];
  }

  tech.sort();

  const techList = [];

  for (let index = 0; index < tech.length; index += 1) {
    techList.push({ tech: tech[index], name });
  }

  return techList;
}

let technologias = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let addName = 'Lucas';

let resultado = techList(technologias, addName);
console.log(resultado);

module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
