# ### Introdução à Linguagem de Programação JavaScript

#### **História e Criação do JavaScript**
JavaScript foi criado por Brendan Eich em 1995, durante seu trabalho na Netscape Communications. Originalmente, a linguagem foi desenvolvida em apenas 10 dias e recebeu o nome de Mocha, que depois foi mudado para LiveScript, e finalmente para JavaScript. A escolha do nome "JavaScript" foi uma estratégia de marketing para capitalizar a popularidade da linguagem Java da Sun Microsystems na época.

#### **Motivação para a Criação**
A principal motivação para a criação do JavaScript foi a necessidade de uma linguagem de script que pudesse ser executada diretamente no navegador, permitindo a criação de páginas web dinâmicas e interativas. Até então, as páginas web eram estáticas, com conteúdo que só podia ser alterado através de atualizações manuais do HTML. JavaScript trouxe a capacidade de manipular o DOM (Document Object Model) diretamente no navegador, sem a necessidade de recarregar a página inteira.

#### **Evolução da Linguagem**
Desde a sua criação, JavaScript evoluiu significativamente. Em 1996, a Netscape submeteu JavaScript à ECMA International para padronização, resultando na criação do ECMAScript, a especificação padronizada para a linguagem. A primeira edição do ECMAScript foi publicada em 1997. Desde então, houve várias atualizações importantes, incluindo:

- **ECMAScript 3 (1999):** Introduziu melhorias na linguagem e novos recursos.
- **ECMAScript 5 (2009):** Adicionou métodos úteis para arrays, manipulação de objetos, e o modo estrito (`strict mode`).
- **ECMAScript 6 (2015):** Também conhecido como ES6 ou ECMAScript 2015, trouxe grandes melhorias, incluindo `let` e `const` para variáveis, classes, módulos, arrow functions, promises, e muito mais.

#### **Utilização do JavaScript Hoje em Dia**
Hoje em dia, JavaScript é uma das linguagens de programação mais populares e amplamente utilizadas no desenvolvimento web. Sua importância é destacada pelos seguintes pontos:

1. **Desenvolvimento Front-end:**
   - **Manipulação do DOM:** JavaScript permite a interação direta com elementos HTML, possibilitando a criação de experiências de usuário interativas.
   - **Frameworks e Bibliotecas:** Frameworks como Angular, React e Vue.js, e bibliotecas como jQuery, são amplamente utilizados para facilitar o desenvolvimento de aplicações web complexas.

2. **Desenvolvimento Back-end:**
   - **Node.js:** Um ambiente de execução JavaScript no lado do servidor que permite o uso de JavaScript para desenvolvimento back-end. Isso possibilita a criação de servidores web, APIs, e outras funcionalidades do lado do servidor com JavaScript.

3. **Desenvolvimento Full-Stack:**
   - Com a capacidade de usar JavaScript tanto no front-end quanto no back-end, muitos desenvolvedores adotam o JavaScript para o desenvolvimento full-stack, utilizando frameworks como MEAN (MongoDB, Express, Angular, Node.js) e MERN (MongoDB, Express, React, Node.js).

4. **Aplicações Móveis e Desktop:**
   - **React Native:** Permite o desenvolvimento de aplicativos móveis nativos para iOS e Android usando JavaScript.
   - **Electron:** Utilizado para criar aplicações desktop multiplataforma com JavaScript, HTML e CSS.

5. **Automação e Scripts:**
   - JavaScript é utilizado para automação de tarefas e scripts em ambientes de desenvolvimento web, testes automatizados e automação de processos.

#### **Conclusão**
JavaScript, foi criado por Brendan Eich em 1995, transformou-se de uma linguagem simples de script para uma poderosa e versátil ferramenta de desenvolvimento, fundamental para a web moderna. Sua evolução contínua e a adoção por desenvolvedores em todo o mundo destacam sua importância e relevância no cenário atual de desenvolvimento de software.

#### Mão na massa

### Comentários: 
## `//` => Comenta uma linha
## `/**/` => Comenta tudo que tiver dentro, podendo quebra de espaços
## `/**/` => 

### Variáveis: 
## Variáveis ​​são contêineres para armazenar dados. Variáveis ​​JavaScript podem ser declaradas de 4 maneiras:
# Usando var => Não é mais utilizado, mas é uma variável de escopo aberto, que pode ser alterada
# Usando let => Variável de escopo fechado que pode ser alterada
# Usando const => Variável de escopo fechado que não pode ser alterada

## Let e Const
# A let palavra-chave foi introduzida no ES6 (2015)
# Variáveis ​​declaradas com let têm escopo de bloco

Variáveis ​​declaradas com let devem ser declaradas antes do uso

Variáveis ​​declaradas com let não podem ser redeclaradas no mesmo escopo

Escopo do bloco
Antes do ES6 (2015), o JavaScript não tinha Block Scope .

JavaScript tinha Escopo Global e Escopo de Função .

O ES6 introduziu duas novas palavras-chave JavaScript: let e const.

Essas duas palavras-chave forneceram o Block Scope em JavaScript:

Exemplo
Variáveis ​​declaradas dentro de um bloco { } não podem ser acessadas de fora do bloco:

{
  let x = 2;
}
// x can NOT be used here
Âmbito global
Variáveis ​​declaradas com var sempre têm Escopo Global .

Variáveis ​​declaradas com a var palavra-chave NÃO podem ter escopo de bloco:

Exemplo
Variáveis ​​declaradas var dentro de um bloco { } podem ser acessadas de fora do bloco:

{
  var x = 2;
}
// x CAN be used here
Não pode ser redeclarado
Variáveis ​​definidas com let não podem ser declaradas novamente.

Você não pode redeclarar acidentalmente uma variável declarada com let.

Com let você não pode fazer isso:

let x = "John Doe";

let x = 0;
Variáveis ​​definidas com var podem ser redeclaradas.

Com var você você pode fazer isso:

var x = "John Doe";

var x = 0;
Redeclarando Variáveis
Redeclarar uma variável usando a var palavra-chave pode causar problemas.

Redeclarar uma variável dentro de um bloco também redeclarará a variável fora do bloco:

Exemplo
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
Redeclarar uma variável usando a let palavra-chave pode resolver esse problema.

Redeclarar uma variável dentro de um bloco não redeclarará a variável fora do bloco:

Exemplo
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

A const palavra-chave foi introduzida no ES6 (2015)

Variáveis ​​definidas com const não podem ser redeclaradas

Variáveis ​​definidas com const não podem ser reatribuídas

Variáveis ​​definidas com const têm escopo de bloco

Não pode ser reatribuído
Uma variável definida com a const palavra-chave não pode ser reatribuída:

Exemplo
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
Deve ser atribuído
Variáveis ​​JavaScript const devem receber um valor quando são declaradas:

Correto
const PI = 3.14159265359;
Incorreta
const PI;
PI = 3.14159265359;
Quando usar JavaScript const?
Sempre declare uma variável com const quando você sabe que o valor não deve ser alterado.

Use const quando você declarar:

Uma nova matriz
Um novo objeto
Uma nova função
Um novo RegExp
Objetos e matrizes constantes
A palavra-chave const é um pouco enganosa.

Não define um valor constante. Define uma referência constante a um valor.

Por isso você NÃO PODE:

Reatribuir um valor constante
Reatribuir uma matriz constante
Reatribuir um objeto constante
Mas você pode:

Alterar os elementos da matriz constante
Alterar as propriedades do objeto constante
Matrizes constantes
Você pode alterar os elementos de uma matriz constante:

Exemplo
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
Mas você NÃO pode reatribuir o array:

Exemplo
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
Objetos constantes
Você pode alterar as propriedades de um objeto constante:

Exemplo
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
Mas você NÃO pode reatribuir o objeto:

Exemplo
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

O que é bom?
let e const tem escopo de bloco .

let e const não pode ser redeclarado .

let e const deve ser declarado antes do uso.

let e const não se vincula a this.

let e não const são içados .

O que não é bom?
var não precisa ser declarado.

var é içado.

var vincula-se a isso.

Escopo do bloco
Declarar uma variável com consté semelhante ao let Block Scope .

O x declarado no bloco, neste exemplo, não é o mesmo que o x declarado fora do bloco:

Exemplo
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10
Você pode aprender mais sobre o escopo do bloco no capítulo Escopo do JavaScript .

Redeclarando
É permitido redeclarar uma var variável JavaScript em qualquer lugar de um programa:

Exemplo
var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed
Não é permitido redeclarar uma variável existente varou , no mesmo escopo:let const

Exemplo
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
Não é permitido reatribuir uma variável existente const, no mesmo escopo:

Exemplo
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
É permitido redeclarar uma variável com const, em outro escopo ou em outro bloco:

Exemplo
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

## Operadores
Operadores Javascript são usados ​​para executar diferentes tipos de cálculos matemáticos e lógicos.

Exemplos:
O Operador de Atribuição = atribui valores

O operador de adição + adiciona valores

O Operador de Multiplicação * multiplica valores

O Operador de Comparação > compara valores

O Operador de Atribuição ( =) atribui um valor a uma variável:

Exemplos de Tarefas
let x = 10;
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
Adição de JavaScript
O operador de adição ( +) soma números:

Adicionando
let x = 5;
let y = 2;
let z = x + y;
Multiplicação JavaScript
O Operador de Multiplicação ( *) multiplica números:

Multiplicando
let x = 5;
let y = 2;
let z = x * y;
Tipos de operadores JavaScript
Existem diferentes tipos de operadores JavaScript:

Operadores aritméticos
Operadores de Atribuição
Operadores de comparação
Operadores de String
Operadores lógicos
Operadores Bitwise
Operadores Ternários
Operadores de tipo
Operadores Aritméticos JavaScript
Operadores aritméticos são usados ​​para realizar operações aritméticas em números:

Exemplo de operadores aritméticos
let a = 3;
let x = (100 + 50) * a;
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

## Arimética 

Operadores Aritméticos JavaScript
Operadores aritméticos realizam operações aritméticas em números (literais ou variáveis).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
Operaçoes aritimeticas
Uma operação aritmética típica opera em dois números.

Os dois números podem ser literais:

Exemplo
let x = 100 + 50;
ou variáveis:

Exemplo
let x = a + b;
ou expressões:

Exemplo
let x = (100 + 50) * a;
Operadores e operandos
Os números (em uma operação aritmética) são chamados de operandos .

A operação (a ser realizada entre os dois operandos) é definida por um operador .

Operando	Operador	Operando
100	+	50

Adicionando
O operador de adição ( +) soma números:

Exemplo
let x = 5;
let y = 2;
let z = x + y;
Subtraindo
O operador de subtração ( -) subtrai números.

Exemplo
let x = 5;
let y = 2;
let z = x - y;
Multiplicando
O operador de multiplicação ( *) multiplica números.

Exemplo
let x = 5;
let y = 2;
let z = x * y;
Dividindo
O operador de divisão ( /) divide números.

Exemplo
let x = 5;
let y = 2;
let z = x / y;
Restante
O operador de módulo% ( ) retorna o resto da divisão.

Exemplo
let x = 5;
let y = 2;
let z = x % y;
Na aritmética, a divisão de dois números inteiros produz um quociente e um resto .

Em matemática, o resultado de uma operação de módulo é o resto de uma divisão aritmética.

Incrementando
O operador de incremento ( ++) incrementa números.

Exemplo
let x = 5;
x++;
let z = x;
Decrementando
O operador de decremento ( --) decrementa números.

Exemplo
let x = 5;
x--;
let z = x;
Exponenciação
O operador de exponenciação** ( ) eleva o primeiro operando à potência do segundo operando.

Exemplo
let x = 5;
let z = x ** 2;
x ** y produz o mesmo resultado que Math.pow(x,y):

Exemplo
let x = 5;
let z = Math.pow(x,2);
operador precedente
A precedência do operador descreve a ordem na qual as operações são executadas em uma expressão aritmética.

Exemplo
let x = 100 + 50 * 3;
O resultado do exemplo acima é o mesmo que 150 * 3 ou é o mesmo que 100 + 150?

A adição ou a multiplicação é feita primeiro?

Assim como na matemática escolar tradicional, a multiplicação é feita primeiro.

Multiplicação ( *) e divisão ( /) têm maior precedência do que adição ( +) e subtração ( -).

E (como na matemática escolar) a precedência pode ser alterada usando parênteses.

Ao usar parênteses, as operações dentro deles são computadas primeiro:

Exemplo
let x = (100 + 50) * 3;
Quando muitas operações têm a mesma precedência (como adição e subtração ou multiplicação e divisão), elas são calculadas da esquerda para a direita:

Exemplos
let x = 100 + 50 - 3;
let x = 100 / 50 * 3;

## Comparação: 

Operadores de comparação são usados ​​em instruções lógicas para determinar igualdade ou diferença entre variáveis ​​ou valores.

Dado que x = 5, a tabela abaixo explica os operadores de comparação:

Operator	
==	- Valor igual a - x == 8 -false	
  x == 5	true	
  x == "5"	true	

=== -	Igual em valor e em tipo- x === 5	true	
  x === "5"	false	

!=	- Não é igual em valor -	x != 8	true

!==	- Não é igual em valor e nem em tipo - type	x !== 5	false	
  x !== "5"	true	
  x !== 8	true	

>	Maior que -	x > 8	false	
<	Menor que	x < 8	true	
>=	Maior ou igual que -	x >= 8	false	
<=	Menor ou igual que -	x <= 8	true	

## Lógicos: Operadores lógicos são usados ​​para determinar a lógica entre variáveis ​​ou valores. Iguais as operações booleanas que vimos!

Considere que x = 6e y = 3

&& - 	and  
  (x < 10 && y > 1) is true
|| - 	or
	(x == 5 || y == 5) is false
! -  	not
	!(x == y) is true

## Atribuição 

Operadores de atribuição JavaScript
Operadores de atribuição atribuem valores a variáveis ​​JavaScript.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
Operadores de atribuição de turnos
Operator	Example	Same As
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y
Operadores de atribuição bit a bit
Operator	Example	Same As
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y
Operadores de Atribuição Lógica
Operator	Example	Same As
&&=	x &&= y	x = x && (x = y)
||=	x ||= y	x = x || (x = y)
??=	x ??= y	x = x ?? (x = y)
Observação
Os operadores de atribuição lógica são ES2020 .

O operador =
O Operador de Atribuição Simples atribui um valor a uma variável.

Exemplos de tarefas simples
let x = 10;
let x = 10 + y;
O operador +=
O Operador de Atribuição de Adição adiciona um valor a uma variável.

Exemplos de tarefas de adição
let x = 10;
x += 5;
let text = "Hello"; text += " World";
O operador -=
O Operador de Atribuição de Subtração subtrai um valor de uma variável.

Exemplo de tarefa de subtração
let x = 10;
x -= 5;
O operador *=
O operador de atribuição de multiplicação multiplica uma variável.

Exemplo de tarefa de multiplicação
let x = 10;
x *= 5;
O operador **=
O operador de atribuição de exponenciação eleva uma variável à potência do operando.

Exemplo de atribuição de exponenciação
let x = 10;
x **= 5;
O Operador /=
O Operador de Atribuição de Divisão divide uma variável.

Exemplo de atribuição de divisão
let x = 10;
x /= 5;
O operador %=
O Operador de Atribuição de Resto atribui um resto a uma variável.

Exemplo de atribuição de resto
let x = 10;
x %= 5;

O operador <<=
O operador de atribuição de deslocamento para a esquerda desloca uma variável para a esquerda.

Exemplo de atribuição de deslocamento para a esquerda
let x = -100;
x <<= 5;
O Operador >>=
O operador de atribuição de deslocamento para a direita desloca uma variável para a direita (com sinal).

Exemplo de atribuição de deslocamento para a direita
let x = -100;
x >>= 5;
O Operador >>>=
O operador de atribuição de deslocamento para a direita sem sinal desloca uma variável para a direita (sem sinal).

Exemplo de atribuição de deslocamento à direita sem sinal
let x = -100;
x >>>= 5;
O operador &=
O operador de atribuição AND bit a bit realiza uma operação AND bit a bit em dois operandos e atribui o resultado à variável.

Exemplo de atribuição AND bit a bit
let x = 10;
x &= 5;
O operador |=
O operador de atribuição OR bit a bit realiza uma operação OR bit a bit em dois operandos e atribui o resultado à variável.

Exemplo de atribuição de OR bit a bit
let x = 10;
x |= 5;
O operador ^=
O operador de atribuição XOR bit a bit realiza uma operação XOR bit a bit em dois operandos e atribui o resultado à variável.

Exemplo de atribuição XOR bit a bit
let x = 10;
x ^= 5;
O operador &&=
O operador de atribuição lógico AND é usado entre dois valores.

Se o primeiro valor for verdadeiro, o segundo valor será atribuído.

Exemplo de atribuição lógica AND
let x = 10;
x &&= 5;
O &&=operador é um recurso do ES2020 .

O operador ||=
O operador de atribuição lógico OR é usado entre dois valores.

Se o primeiro valor for falso, o segundo valor será atribuído.

Exemplo de atribuição lógica OR
let x = 10;
x ||= 5;
O ||=operador é um recurso do ES2020 .

O Operador ??=
O operador de atribuição de coalescência nula é usado entre dois valores.

Se o primeiro valor for indefinido ou nulo, o segundo valor será atribuído.

Exemplo de atribuição de coalescência nula
let x;
x ??= 5;

## Tipos de dados

avaScript tem 8 tipos de dados
String
Número
Bigint
Boolean
Indefinido
Nulo
Símbolo
Objeto

O tipo de dado do objeto
O tipo de dados do objeto pode conter objetos internos e objetos definidos pelo usuário :

Os tipos de objetos incorporados podem ser:

objetos, matrizes, datas, mapas, conjuntos, intarrays, floatarrays, promessas e muito mais.

Exemplos
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
Observação
Uma variável JavaScript pode conter qualquer tipo de dado.

O Conceito de Tipos de Dados
Na programação, tipos de dados são um conceito importante.

Para poder operar com variáveis, é importante saber algo sobre o tipo.

Sem tipos de dados, um computador não pode resolver isso com segurança:

let x = 16 + "Volvo";
Faz algum sentido adicionar "Volvo" a dezesseis? Isso produzirá um erro ou produzirá um resultado?

O JavaScript tratará o exemplo acima como:

let x = "16" + "Volvo";
Observação
Ao adicionar um número e uma string, o JavaScript tratará o número como uma string.

Exemplo
let x = 16 + "Volvo";
Exemplo
let x = "Volvo" + 16;
JavaScript avalia expressões da esquerda para a direita. Sequências diferentes podem produzir resultados diferentes:

JavaScript:
let x = 16 + 4 + "Volvo";
Resultado:

20Volvo
JavaScript:
let x = "Volvo" + 16 + 4;
Resultado:

Volvo164
No primeiro exemplo, o JavaScript trata 16 e 4 como números, até chegar a "Volvo".

No segundo exemplo, como o primeiro operando é uma string, todos os operandos são tratados como strings.

Os tipos de JavaScript são dinâmicos
JavaScript tem tipos dinâmicos. Isso significa que a mesma variável pode ser usada para armazenar diferentes tipos de dados:

Exemplo
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
Cadeias de caracteres JavaScript
Uma string (ou uma string de texto) é uma série de caracteres como "John Doe".

Strings são escritas com aspas. Você pode usar aspas simples ou duplas:
Exemplo
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';
Você pode usar aspas dentro de uma string, desde que elas não correspondam às aspas ao redor da string:

Exemplo
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
Você aprenderá mais sobre strings mais adiante neste tutorial.

Números JavaScript
Todos os números JavaScript são armazenados como números decimais (ponto flutuante).

Os números podem ser escritos com ou sem decimais:

Exemplo
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;
Notação exponêncial
Números extragrandes ou extrapequenos podem ser escritos com notação científica (exponencial):

Exemplo
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123
Observação
A maioria das linguagens de programação tem muitos tipos de números:

Números inteiros (inteiros):
byte (8 bits), short (16 bits), int (32 bits), long (64 bits)

Números reais (ponto flutuante):
float (32 bits), double (64 bits).

Os números Javascript são sempre de um tipo:
double (ponto flutuante de 64 bits).

Você aprenderá mais sobre números mais adiante neste tutorial.

JavaScript BigInt
Todos os números JavaScript são armazenados em um formato de ponto flutuante de 64 bits.

JavaScript BigInt é um novo tipo de dado ( ES2020 ) que pode ser usado para armazenar valores inteiros que são muito grandes para serem representados por um número JavaScript normal.

Exemplo
let x = BigInt("123456789012345678901234567890");
Você aprenderá mais sobre o BigInt mais adiante neste tutorial.

Booleanos JavaScript
Booleanos só podem ter dois valores: trueou false.

Exemplo
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
Booleanos são frequentemente usados ​​em testes condicionais.

Você aprenderá mais sobre booleanos mais adiante neste tutorial.

Matrizes JavaScript
Os arrays JavaScript são escritos com colchetes.

Os itens da matriz são separados por vírgulas.

O código a seguir declara (cria) uma matriz chamada cars, contendo três itens (nomes de carros):

Exemplo
const cars = ["Saab", "Volvo", "BMW"];
Os índices de matriz são baseados em zero, o que significa que o primeiro item é [0], o segundo é [1] e assim por diante.

Você aprenderá mais sobre matrizes mais adiante neste tutorial.

Objetos JavaScript
Objetos JavaScript são escritos com chaves {}.

As propriedades do objeto são escritas como pares nome:valor, separados por vírgulas.

Exemplo
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
O objeto (pessoa) no exemplo acima tem 4 propriedades: firstName, lastName, age e eyeColor.

Você aprenderá mais sobre objetos mais adiante neste tutorial.

O tipo de operador
Você pode usar o typeofoperador JavaScript para encontrar o tipo de uma variável JavaScript.

O typeofoperador retorna o tipo de uma variável ou expressão:

Exemplo
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
Exemplo
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
Você aprenderá mais sobre typeof mais adiante neste tutorial.

Indefinido
Em JavaScript, uma variável sem valor tem o valor undefined. O tipo também é undefined.

Exemplo
let car;    // Value is undefined, type is undefined
Qualquer variável pode ser esvaziada, definindo o valor para undefined. O tipo também será undefined.

Exemplo
car = undefined;    // Value is undefined, type is undefined
Valores Vazios
Um valor vazio não tem nada a ver com undefined.

Uma string vazia tem um valor legal e um tipo.

Exemplo
let car = "";    // The value is "", the typeof is "string"

### Laços de repetição: Os laços de repetição (ou loops) são estruturas de controle que permitem executar um bloco de código várias vezes. Em JavaScript, temos diversos tipos de laços de repetição, cada um com suas características e usos específicos. Nesta aula, abordaremos os seguintes laços:

1. `for`
2. `while`
3. `do...while`
4. `for...in`
5. `for...of`

#### **1. Laço `for`**

O laço `for` é um dos mais utilizados em JavaScript. Ele é composto por três expressões: inicialização, condição e incremento.

**Sintaxe:**
```javascript
for (inicialização; condição; incremento) {
    // bloco de código a ser executado
}
```

**Exemplo:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log("O valor de i é: " + i);
}
```
**Aplicação:**
```javascript
// Percorrer um array e imprimir seus elementos
let frutas = ["maçã", "banana", "laranja", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

#### **2. Laço `while`**

O laço `while` executa um bloco de código enquanto uma condição especificada for verdadeira.

**Sintaxe:**
```javascript
while (condição) {
    // bloco de código a ser executado
}
```

**Exemplo:**
```javascript
let contador = 0;
while (contador < 5) {
    console.log("Contador é: " + contador);
    contador++;
}
```

**Aplicação:**
```javascript
// Encontrar a soma dos números de 1 a 10
let soma = 0;
let numero = 1;
while (numero <= 10) {
    soma += numero;
    numero++;
}
console.log("A soma dos números de 1 a 10 é: " + soma);
```

#### **3. Laço `do...while`**

O laço `do...while` é similar ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, pois a condição é verificada após a execução do bloco.

**Sintaxe:**
```javascript
do {
    // bloco de código a ser executado
} while (condição);
```

**Exemplo:**
```javascript
let contador = 0;
do {
    console.log("Contador é: " + contador);
    contador++;
} while (contador < 5);
```

**Aplicação:**
```javascript
// Perguntar ao usuário até que ele insira um número positivo
let numero;
do {
    numero = prompt("Insira um número positivo:");
} while (numero <= 0);
console.log("Número positivo inserido: " + numero);
```

#### **4. Laço `for...in`**

O laço `for...in` é utilizado para percorrer as propriedades enumeráveis de um objeto.

**Sintaxe:**
```javascript
for (let propriedade in objeto) {
    // bloco de código a ser executado
}
```

**Exemplo:**
```javascript
let pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
```

**Aplicação:**
```javascript
// Percorrer um array de objetos e imprimir suas propriedades
let pessoas = [
    { nome: "Ana", idade: 22 },
    { nome: "Bruno", idade: 34 },
    { nome: "Clara", idade: 29 }
];

for (let i in pessoas) {
    console.log("Nome: " + pessoas[i].nome + ", Idade: " + pessoas[i].idade);
}
```

#### **5. Laço `for...of`**

O laço `for...of` é utilizado para percorrer iteráveis (arrays, strings, etc.).

**Sintaxe:**
```javascript
for (let valor of iteravel) {
    // bloco de código a ser executado
}
```

**Exemplo:**
```javascript
let frutas = ["maçã", "banana", "laranja", "uva"];
for (let fruta of frutas) {
    console.log(fruta);
}
```

**Aplicação:**
```javascript
// Percorrer uma string e imprimir seus caracteres
let palavra = "JavaScript";
for (let letra of palavra) {
    console.log(letra);
}
```

### Exercícios Práticos

1. **Exercício com `for`:**
   - Crie um programa que imprima os números de 1 a 10 e suas respectivas raízes quadradas.
   ```javascript
   for (let i = 1; i <= 10; i++) {
       console.log("Número: " + i + ", Raiz quadrada: " + Math.sqrt(i));
   }
   ```

2. **Exercício com `while`:**
   - Crie um programa que encontre e imprima os números pares entre 1 e 20.
   ```javascript
   let numero = 1;
   while (numero <= 20) {
       if (numero % 2 === 0) {
           console.log(numero);
       }
       numero++;
   }
   ```

3. **Exercício com `do...while`:**
   - Crie um programa que peça ao usuário para inserir um número entre 1 e 10. Se o número não estiver no intervalo, peça novamente até que esteja.
   ```javascript
   let numero;
   do {
       numero = parseInt(prompt("Insira um número entre 1 e 10:"));
   } while (numero < 1 || numero > 10);
   console.log("Número válido inserido: " + numero);
   ```

4. **Exercício com `for...in`:**
   - Crie um programa que percorra um objeto de produtos e seus preços, e imprima cada produto e seu respectivo preço.
   ```javascript
   let produtos = {
       arroz: 5.0,
       feijao: 7.5,
       macarrao: 4.2,
       leite: 3.3
   };

   for (let produto in produtos) {
       console.log(produto + ": R$" + produtos[produto].toFixed(2));
   }
   ```

5. **Exercício com `for...of`:**
   - Crie um programa que percorra um array de números e imprima apenas os números ímpares.
   ```javascript
   let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   for (let numero of numeros) {
       if (numero % 2 !== 0) {
           console.log(numero);
       }
   }
   ```

## Os laços de repetição são fundamentais para automatizar tarefas repetitivas e trabalhar eficientemente com coleções de dados. Cada tipo de laço tem suas próprias características e usos específicos. Compreender quando e como usar cada um deles é essencial para escrever código JavaScript eficaz e eficiente.

### Condicionais: Os condicionais em JavaScript são usados para executar diferentes blocos de código com base em condições específicas. Eles permitem que o programa tome decisões durante a execução. Os principais condicionais em JavaScript são:

1. `if`
2. `if...else`
3. `else if`
4. `switch`

#### **1. Condicional `if`**

A declaração `if` executa um bloco de código se a condição especificada for verdadeira.

**Sintaxe:**
```javascript
if (condição) {
    // bloco de código a ser executado se a condição for verdadeira
}
```

**Exemplo:**
```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}
```

#### **2. Condicional `if...else`**

A declaração `if...else` executa um bloco de código se a condição for verdadeira e outro bloco de código se a condição for falsa.

**Sintaxe:**
```javascript
if (condição) {
    // bloco de código a ser executado se a condição for verdadeira
} else {
    // bloco de código a ser executado se a condição for falsa
}
```

**Exemplo:**
```javascript
let idade = 16;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

#### **3. Condicional `else if`**

A declaração `else if` permite verificar múltiplas condições. Se a condição inicial for falsa, outras condições podem ser verificadas.

**Sintaxe:**
```javascript
if (condição1) {
    // bloco de código a ser executado se a condição1 for verdadeira
} else if (condição2) {
    // bloco de código a ser executado se a condição2 for verdadeira
} else {
    // bloco de código a ser executado se nenhuma das condições acima for verdadeira
}
```

**Exemplo:**
```javascript
let nota = 85;

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else {
    console.log("Nota D");
}
```

#### **4. Condicional `switch`**

A declaração `switch` é usada para executar um bloco de código entre múltiplas opções possíveis, comparando uma expressão com múltiplos casos.

**Sintaxe:**
```javascript
switch (expressão) {
    case valor1:
        // bloco de código a ser executado se expressão for igual a valor1
        break;
    case valor2:
        // bloco de código a ser executado se expressão for igual a valor2
        break;
    default:
        // bloco de código a ser executado se expressão não for igual a nenhum dos valores anteriores
}
```

**Exemplo:**
```javascript
let cor = "vermelho";

switch (cor) {
    case "azul":
        console.log("A cor é azul.");
        break;
    case "verde":
        console.log("A cor é verde.");
        break;
    case "vermelho":
        console.log("A cor é vermelho.");
        break;
    default:
        console.log("Cor não reconhecida.");
}
```

### Exercícios Práticos

1. **Exercício com `if`:**
   - Crie um programa que verifique se um número é positivo.
   ```javascript
   let numero = 10;

   if (numero > 0) {
       console.log("O número é positivo.");
   }
   ```

2. **Exercício com `if...else`:**
   - Crie um programa que verifique se um número é par ou ímpar.
   ```javascript
   let numero = 7;

   if (numero % 2 === 0) {
       console.log("O número é par.");
   } else {
       console.log("O número é ímpar.");
   }
   ```

3. **Exercício com `else if`:**
   - Crie um programa que classifique um número em uma faixa de valores (0-10, 11-20, 21-30).
   ```javascript
   let numero = 15;

   if (numero >= 0 && numero <= 10) {
       console.log("O número está entre 0 e 10.");
   } else if (numero >= 11 && numero <= 20) {
       console.log("O número está entre 11 e 20.");
   } else if (numero >= 21 && numero <= 30) {
       console.log("O número está entre 21 e 30.");
   } else {
       console.log("O número está fora da faixa.");
   }
   ```

4. **Exercício com `switch`:**
   - Crie um programa que imprima o dia da semana com base em um número (1-7).
   ```javascript
   let dia = 3;

   switch (dia) {
       case 1:
           console.log("Domingo");
           break;
       case 2:
           console.log("Segunda-feira");
           break;
       case 3:
           console.log("Terça-feira");
           break;
       case 4:
           console.log("Quarta-feira");
           break;
       case 5:
           console.log("Quinta-feira");
           break;
       case 6:
           console.log("Sexta-feira");
           break;
       case 7:
           console.log("Sábado");
           break;
       default:
           console.log("Número inválido");
   }
   ```

## Os condicionais são uma parte essencial de qualquer linguagem de programação, permitindo que o código tome decisões com base em condições específicas. A compreensão das diferentes formas de condicionais em JavaScript é fundamental para escrever código eficaz e adaptável. Pratique os exemplos e exercícios para se familiarizar com a utilização dessas estruturas de controle.

### Funções: Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica. Uma função JavaScript é executada quando "algo" a invoca (a chama).

Exemplo
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}

Sintaxe de função JavaScript
Uma função JavaScript é definida com a functionpalavra-chave , seguida de um nome , seguido de parênteses () .

Nomes de funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras das variáveis).

Os parênteses podem incluir nomes de parâmetros separados por vírgulas:
( parâmetro1, parâmetro2, ... )

O código a ser executado pela função é colocado entre chaves: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
Os parâmetros da função são listados entre parênteses () na definição da função.

Os argumentos da função são os valores recebidos pela função quando ela é invocada.

Dentro da função, os argumentos (os parâmetros) se comportam como variáveis ​​locais.

Invocação de função
O código dentro da função será executado quando "algo" invocar (chamar) a função:

Quando um evento ocorre (quando um usuário clica em um botão)
Quando é invocado (chamado) a partir do código JavaScript
Automaticamente (auto invocado)
Você aprenderá muito mais sobre invocação de funções mais adiante neste tutorial.

Função Retorno
Quando o JavaScript atinge uma returninstrução, a função para de ser executada.

Se a função foi invocada a partir de uma instrução, o JavaScript "retornará" para executar o código após a instrução de invocação.

Funções frequentemente calculam um valor de retorno . O valor de retorno é "retornado" de volta para o "chamador":

Exemplo
Calcule o produto de dois números e retorne o resultado:

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
Por que funções?
Com funções você pode reutilizar código

Você pode escrever código que pode ser usado muitas vezes.

Você pode usar o mesmo código com argumentos diferentes para produzir resultados diferentes.

O operador
O operador () invoca (chama) a função:

Exemplo
Converter Fahrenheit para Celsius:

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);
Acessar uma função com parâmetros incorretos pode retornar uma resposta incorreta:

Exemplo
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius();
Acessar uma função sem () retorna a função e não o resultado da função:

Exemplo
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius;
Observação
Como você pode ver nos exemplos acima, toCelsiusrefere-se ao objeto de função e toCelsius()refere-se ao resultado da função.

Funções usadas como valores de variáveis
Funções podem ser usadas da mesma forma que você usa variáveis, em todos os tipos de fórmulas, atribuições e cálculos.

Exemplo
Em vez de usar uma variável para armazenar o valor de retorno de uma função:

let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
Você pode usar a função diretamente, como um valor variável:

let text = "The temperature is " + toCelsius(77) + " Celsius";
Você aprenderá muito mais sobre funções mais adiante neste tutorial.

Variáveis ​​locais
Variáveis ​​declaradas dentro de uma função JavaScript tornam-se LOCAIS para a função.

Variáveis ​​locais só podem ser acessadas de dentro da função.

Exemplo
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
Como variáveis ​​locais são reconhecidas apenas dentro de suas funções, variáveis ​​com o mesmo nome podem ser usadas em funções diferentes.

Variáveis ​​locais são criadas quando uma função é iniciada e excluídas quando a função é concluída.

## Objetos: 
### Objetos da vida real. Na vida real, objetos são coisas como: casas, carros, pessoas, animais ou quaisquer outros assuntos.
#### Aqui está um exemplo de objeto de carro :

carro = {
car.name = Fiat,
car.model = 500,
car.weight = 850kg,
car.color = branco,	
carro.start(),
carro.drive(),
carro.brake(),
carro.stop(),
}

Propriedades do objeto
Um carro real tem propriedades como peso e cor:

car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = branco.

Objetos de carro têm as mesmas propriedades , mas os valores diferem de carro para carro.

Métodos de Objetos
Um carro real tem métodos como partida e parada:

carro.start(), carro.drive(), carro.brake(), carro.stop().

Objetos de carro têm os mesmos métodos , mas os métodos são executados em momentos diferentes .

Variáveis ​​JavaScript
Variáveis ​​JavaScript são contêineres para valores de dados.

Este código atribui um valor simples (Fiat) a uma variável chamada carro:

Exemplo
let car = "Fiat";
Objetos JavaScript
Objetos também são variáveis. Mas objetos podem conter muitos valores.

Este código atribui muitos valores (Fiat, 500, branco) a um objeto chamado carro:

Exemplo
const car = {type:"Fiat", model:"500", color:"white"};
Observação:
É uma prática comum declarar objetos com a palavra-chave const .

Saiba mais sobre o uso de const com objetos no capítulo: JS Const .

Definição de objeto JavaScript
Como definir um objeto JavaScript
Usando um objeto literal
Usando a newpalavra-chave
Usando um construtor de objeto
Objeto Literal JavaScript
Um literal de objeto é uma lista de pares nome:valor dentro de chaves {} .

{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
Observação:
Os pares nome:valor também são chamados de pares chave:valor .

literais de objeto também são chamados de inicializadores de objeto .

Criando um objeto JavaScript
Esses exemplos criam um objeto JavaScript com 4 propriedades:

Exemplos
// Create an Object
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
Espaços e quebras de linha não são importantes. Um inicializador de objeto pode abranger várias linhas:

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
Este exemplo cria um objeto JavaScript vazio e adiciona 4 propriedades:

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Usando a nova palavra-chave
Este exemplo cria um novo objeto JavaScript usando new Object()e, em seguida, adiciona 4 propriedades:

Exemplo
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
Observação:
Os exemplos acima fazem exatamente a mesma coisa.

Mas não há necessidade de usar new Object().

Para legibilidade, simplicidade e velocidade de execução, use o método literal de objeto .

Propriedades do objeto
Os valores nomeados , em objetos JavaScript, são chamados de propriedades .

Propriedade	Valor
primeiro nome	John
sobrenome	Corça
idade	50
cor dos olhos	azul
Objetos escritos como pares nome-valor são semelhantes a:

Matrizes associativas em PHP
Dicionários em Python
Tabelas de hash em C
Mapas de hash em Java
Hashes em Ruby e Perl
Acessando Propriedades do Objeto
Você pode acessar propriedades de objetos de duas maneiras:

objectName.propertyName
objectName["propertyName"]
Exemplos
person.lastName;
person["lastName"];
Métodos de Objetos JavaScript
Métodos são ações que podem ser executadas em objetos.

Métodos são definições de funções armazenadas como valores de propriedade .

Propriedade	Valor da propriedade
primeiro nome	John
sobrenome	Corça
idade	50
cor dos olhos	azul
nome completo	function() {retornar this.primeiroNome + " " + this.sobrenome;}
Exemplo
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
No exemplo acima, thisrefere-se ao objeto pessoa :

this.firstName significa a propriedade firstName de person .

this.lastName significa a propriedade lastName da pessoa .

Em JavaScript, objetos são rei.
Se você entende de objetos, você entende de JavaScript.
Objetos são contêineres para Propriedades e Métodos .

As propriedades são denominadas Valores .

Métodos são funções armazenadas como propriedades .

Propriedades podem ser valores primitivos, funções ou até mesmo outros objetos.

Em JavaScript, quase "tudo" é um objeto.

Objetos são objetos
Matemática são objetos
Funções são objetos
Datas são objetos
Matrizes são objetos
Mapas são objetos
Conjuntos são objetos
Todos os valores JavaScript, exceto primitivos, são objetos.

Primitivas de JavaScript
Um valor primitivo é um valor que não possui propriedades ou métodos.

3,14 é um valor primitivo

Um tipo de dado primitivo é aquele que possui um valor primitivo.

JavaScript define 7 tipos de dados primitivos:

string
number
boolean
null
undefined
symbol
bigint
Imutável
Valores primitivos são imutáveis ​​(eles são codificados e não podem ser alterados).

se x = 3,14, você pode alterar o valor de x, mas não pode alterar o valor de 3,14.

Valor	Tipo	Comente
"Olá"	corda	"Olá" é sempre "Olá"
3.14	número	3,14 é sempre 3,14
verdadeiro	boleano	verdade é sempre verdade
falso	boleano	falso é sempre falso
nulo	nulo (objeto)	nulo é sempre nulo
indefinido	indefinido	indefinido é sempre indefinido
Objetos JavaScript são mutáveis
Objetos são mutáveis: eles são endereçados por referência, não por valor.

Se pessoa for um objeto, a seguinte instrução não criará uma cópia de pessoa:

const x = person;
O objeto x não é uma cópia de pessoa. O objeto x é pessoa.

O objeto x e o objeto pessoa compartilham o mesmo endereço de memória.

Qualquer alteração em x também alterará a pessoa:

Exemplo
//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Create a copy
const x = person;

// Change Age in both
x.age = 10;

### Propriedades do objeto JavaScript 

Um objeto é uma coleção não ordenada de propriedades
Propriedades são a parte mais importante dos objetos JavaScript.

As propriedades podem ser alteradas, adicionadas, excluídas e algumas são somente leitura.

Acessando propriedades JavaScript
A sintaxe para acessar a propriedade de um objeto é:

// objectName.property
let age = person.age;
ou

//objectName["property"]
let age = person["age"];
ou

//objectName[expression]
let age = person[x];
Exemplos
person.firstname + " is " + person.age + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";
Adicionando novas propriedades
Você pode adicionar novas propriedades a um objeto existente simplesmente atribuindo a ele um valor:

Exemplo
person.nationality = "English";
Excluindo Propriedades
A deletepalavra-chave exclui uma propriedade de um objeto:

Exemplo
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
ou excluir pessoa["idade"];

Exemplo
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
Observação:
A deletepalavra-chave exclui tanto o valor da propriedade quanto a propriedade em si.

Após a exclusão, a propriedade não poderá ser usada antes de ser adicionada novamente.

Objetos aninhados
Valores de propriedade em um objeto podem ser outros objetos:

Exemplo
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
Você pode acessar objetos aninhados usando a notação de ponto ou a notação de colchetes:

Exemplos
myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];

### Métodos de Objetos JavaScript

Métodos de objeto são ações que podem ser executadas em objetos.

Um método é uma definição de função armazenada como um valor de propriedade .

Propriedade	Valor
primeiro nome	John
sobrenome	Corça
idade	50
cor dos olhos	azul
nome completo	function() {retornar this.primeiroNome + " " + this.sobrenome;}
Exemplo
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
No exemplo acima, thisrefere-se ao objeto pessoa :

this.firstName significa a propriedade firstName de person .

this.lastName significa a propriedade lastName da pessoa .

Acessando métodos de objetos
Você acessa um método de objeto com a seguinte sintaxe:

objectName.methodName()
Se você invocar a propriedade fullName com (), ela será executada como uma função :

Exemplo
name = person.fullName();
Se você acessar a propriedade fullName sem (), ela retornará a definição da função :

Exemplo
name = person.fullName;

Adicionando um método a um objeto
Adicionar um novo método a um objeto é fácil:

Exemplo
person.name = function () {
  return this.firstName + " " + this.lastName;
};
Usando métodos JavaScript
Este exemplo usa o toUpperCase()método JavaScript para converter um texto em maiúsculas:

Exemplo
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};


## Construtores de objetos JavaScript

Funções do construtor de objetos
Às vezes precisamos criar muitos objetos do mesmo tipo .

Para criar um tipo de objeto, usamos uma função construtora de objeto .

É considerado uma boa prática nomear funções construtoras com a primeira letra maiúscula.

Tipo de objeto Pessoa
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
Observação:
Na função construtora, thisnão tem valor.

O valor de thisse tornará o novo objeto quando um novo objeto for criado.

Veja também:
O JavaScript deste tutorial

Agora podemos usar new Person() para criar muitos novos objetos Person:

Exemplo
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
Valores Padrão de Propriedade
Um valor dado a uma propriedade será um valor padrão para todos os objetos criados pelo construtor:

Exemplo
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
Adicionando uma propriedade a um objeto
Adicionar uma propriedade a um objeto criado é fácil:

Exemplo
myFather.nationality = "English";

Observação:
A nova propriedade será adicionada a myFather . Não a nenhum outro Person Objects .

Adicionando uma propriedade a um construtor
Você NÃO pode adicionar uma nova propriedade a um construtor de objeto:

Exemplo
Person.nationality = "English";
Para adicionar uma nova propriedade, você deve adicioná-la ao protótipo da função construtora:

Exemplo
Person.prototype.nationality = "English";

Métodos de função construtora
Uma função construtora também pode ter métodos :

Exemplo
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
Adicionando um método a um objeto
Adicionar um método a um objeto criado é fácil:

Exemplo
myMother.changeName = function (name) {
  this.lastName = name;
}
Observação:
O novo método será adicionado a myMother . Não a nenhum outro Person Objects .

Adicionando um método a um construtor
Você não pode adicionar um novo método a uma função construtora de objeto.

Este código produzirá um TypeError:

Exemplo
Person.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
 TypeError: myMother.changeName is not a function

A adição de um novo método deve ser feita ao protótipo da função construtora:

Exemplo
Person.prototype.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");
Observação:
A função changeName() atribui o valor de name à lastNamepropriedade da pessoa, substituindo thispor myMother.

Construtores JavaScript integrados
JavaScript tem construtores integrados para todos os objetos nativos:

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object
Observação:
O Math()objeto não está na lista. Mathé um objeto global. A newpalavra-chave não pode ser usada em Math.

Você sabia?
Use literais de objeto {}em vez de new Object().

Use literais de array []em vez de new Array().

Use literais de padrão /()/em vez de new RegExp().

Use expressões de função () {}em vez de new Function().

Exemplo
"";           // primitive string
0;            // primitive number
false;        // primitive boolean

{};           // object object
[];           // array object
/()/          // regexp object
function(){}; // function

## Strings: Cadeias de caracteres JavaScript. Strings são para armazenar texto. As strings são escritas entre aspas.

Usando Citações
Uma string JavaScript é composta por zero ou mais caracteres escritos entre aspas.

Exemplo
let text = "John Doe";
Você pode usar aspas simples ou duplas:

Exemplo
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
Observação
Strings criadas com aspas simples ou duplas funcionam da mesma forma.

Não há diferença entre os dois.

Citações dentro de citações
Você pode usar aspas dentro de uma string, desde que elas não correspondam às aspas ao redor da string:

Exemplo
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
Cadeias de caracteres de modelo
Os modelos foram introduzidos com o ES6 (JavaScript 2016).

Modelos são sequências de caracteres entre acentos graves (`Esta é uma sequência de caracteres de modelo`).

Os modelos permitem aspas simples e duplas dentro de uma string:

Exemplo
let text = `He's often called "Johnny"`;

Observação
Os modelos não são suportados no Internet Explorer.

Comprimento da corda
Para encontrar o comprimento de uma string, use a propriedade interna length:

Exemplo
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
Caracteres de escape
Como as strings devem ser escritas entre aspas, o JavaScript interpretará mal esta string:

let text = "We are the so-called "Vikings" from the north.";
A corda será cortada para "Nós somos os chamados".

Para resolver esse problema, você pode usar um caractere de escape de barra invertida .

O caractere de escape de barra invertida ( \) transforma caracteres especiais em caracteres de string:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
Exemplos
\" insere aspas duplas em uma string:

let text = "We are the so-called \"Vikings\" from the north.";
\' insere uma aspa simples em uma string:

let text= 'It\'s alright.';
\\ insere uma barra invertida em uma string:

let text = "The character \\ is called backslash.";
Seis outras sequências de escape são válidas em JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
Observação
Os 6 caracteres de escape acima foram originalmente projetados para controlar máquinas de escrever, teletipos e máquinas de fax. Eles não fazem sentido algum em HTML.

Quebrando longas filas
Para facilitar a leitura, os programadores geralmente gostam de evitar longas linhas de código.

Uma maneira segura de dividir uma instrução é depois de um operador:

Exemplo
document.getElementById("demo").innerHTML =
"Hello Dolly!";
Uma maneira segura de quebrar uma string é usando adição de strings:

Exemplo
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
Cadeias de caracteres de modelo
Os modelos foram introduzidos com o ES6 (JavaScript 2016).

Modelos são sequências de caracteres entre acentos graves (`Esta é uma sequência de caracteres de modelo`).

Os modelos permitem sequências de caracteres multilinha:

Exemplo
let text =
`The quick
brown fox
jumps over
the lazy dog`;

Strings JavaScript como objetos
Normalmente, strings JavaScript são valores primitivos, criados a partir de literais:

let x = "John";
Mas strings também podem ser definidas como objetos com a palavra-chave new:

let y = new String("John");
Exemplo
let x = "John";
let y = new String("John");
Não crie objetos Strings.

A new palavra-chave complica o código e diminui a velocidade de execução.

Objetos de string podem produzir resultados inesperados:

Ao usar o ==operador, x e y são iguais :

let x = "John";
let y = new String("John");
Ao usar o ===operador, x e y não são iguais :

let x = "John";
let y = new String("John");
Observe a diferença entre (x==y)e (x===y).

(x == y)verdadeiro ou falso?

let x = new String("John");
let y = new String("John");
(x === y)verdadeiro ou falso?

let x = new String("John");
let y = new String("John");
Comparar dois objetos JavaScript sempre retorna false .

### Métodos String: As strings Javascript são primitivas e imutáveis: todos os métodos de string produzem uma nova string sem alterar a string original.

Comprimento da sequência de caracteres JavaScript
A length propriedade retorna o comprimento de uma string:

Exemplo
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
Extraindo caracteres de string
Existem 4 métodos para extrair caracteres de string:

O método at(position)
O método charAt(position)
O método charCodeAt(position)
Usando acesso de propriedade [] como em matrizes
String JavaScript charAt()
O charAt()método retorna o caractere em um índice especificado (posição) em uma string:

Exemplo
let text = "HELLO WORLD";
let char = text.charAt(0);
String JavaScript charCodeAt()
O charCodeAt()método retorna o código do caractere em um índice especificado em uma string:

O método retorna um código UTF-16 (um inteiro entre 0 e 65535).

Exemplo
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
String JavaScript at()
O ES2022 introduziu o método string at():

Exemplos
Obtenha a terceira letra do nome:

const name = "W3Schools";
let letter = name.at(2);
Obtenha a terceira letra do nome:

const name = "W3Schools";
let letter = name[2];
O at()método retorna o caractere em um índice especificado (posição) em uma string.

O at()método é suportado em todos os navegadores modernos desde março de 2022:

Observação
O at()método é uma nova adição ao JavaScript.

Ele permite o uso de índices negativos, mas charAt()não permite.

Agora você pode usar myString.at(-2)em vez de charAt(myString.length-2).

Acesso à propriedade [ ]
Exemplo
let text = "HELLO WORLD";
let char = text[0];

Observação
O acesso à propriedade pode ser um pouco imprevisível:

Faz com que as strings pareçam matrizes (mas não são)
Se nenhum caractere for encontrado, [ ] retornará indefinido, enquanto charAt() retornará uma string vazia.
É somente leitura. str[0] = "A" não dá erro (mas não funciona!)

Exemplo
let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work

Extraindo partes de string
Existem 3 métodos para extrair uma parte de uma string:

slice(start, end)
substring(start, end)
substr(start, length)
String fatiada em JavaScript()
slice()extrai uma parte de uma string e retorna a parte extraída em uma nova string.

O método usa 2 parâmetros: posição inicial e posição final (final não incluído).

Exemplo
Corte uma parte de uma corda da posição 7 até a posição 13:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
Observação
JavaScript conta posições a partir de zero.

A primeira posição é 0.

A segunda posição é 1.

Exemplos
Se você omitir o segundo parâmetro, o método cortará o restante da string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
Se um parâmetro for negativo, a posição será contada a partir do final da string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
Este exemplo corta uma parte de uma string da posição -12 para a posição -6:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);

Substring de cadeia de caracteres JavaScript ()
substring()é similar a slice().

A diferença é que valores iniciais e finais menores que 0 são tratados como 0 em substring().

Exemplo
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
Se você omitir o segundo parâmetro, substring()o restante da string será cortado.

String JavaScript substr()
substr()é similar a slice().

A diferença é que o segundo parâmetro especifica o comprimento da parte extraída.

Exemplo
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
Se você omitir o segundo parâmetro, substr()o restante da string será cortado.

Exemplo
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
Se o primeiro parâmetro for negativo, a posição será contada a partir do final da string.

Exemplo
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
Convertendo para maiúsculas e minúsculas
Uma string é convertida para maiúsculas com toUpperCase():

Uma string é convertida para minúsculas com toLowerCase():

String JavaScript paraUpperCase()
Exemplo
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
String JavaScript paraLowerCase()
Exemplo
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
Concat() de strings em JavaScript
concat()junta duas ou mais strings:

Exemplo
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
O concat()método pode ser usado em vez do operador plus. Essas duas linhas fazem o mesmo:

Exemplo
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
Observação
Todos os métodos string retornam uma nova string. Eles não modificam a string original.

Formalmente dito:

Strings são imutáveis: elas não podem ser alteradas, apenas substituídas.

String trim() em JavaScript
O trim()método remove espaços em branco de ambos os lados de uma string:

Exemplo
let text1 = "      Hello World!      ";
let text2 = text1.trim();
String JavaScript trimStart()
O ECMAScript 2019 adicionou o método String trimStart()ao JavaScript.

O trimStart()método funciona como trim(), mas remove os espaços em branco somente do início de uma string.

Exemplo
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

String JavaScript trimEnd()
O ECMAScript 2019 adicionou o método string trimEnd()ao JavaScript.

O trimEnd()método funciona como trim(), mas remove os espaços em branco somente do final de uma string.

Exemplo
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();

Preenchimento de string JavaScript
O ECMAScript 2017 adicionou dois novos métodos de string ao JavaScript: padStart() e padEnd()para oferecer suporte ao preenchimento no início e no final de uma string.

Cadeia de caracteres JavaScript padStart()
O padStart()método preenche uma string desde o início.

Ele preenche uma string com outra string (várias vezes) até atingir um determinado comprimento.

Exemplos
Preencha uma string com "0" até que ela atinja o comprimento 4:

let text = "5";
let padded = text.padStart(4,"0");
Preencha uma string com "x" até que ela atinja o comprimento 4:

let text = "5";
let padded = text.padStart(4,"x");

Observação
O padStart()método é um método de string.

Para preencher um número, primeiro converta-o em uma string.

Veja o exemplo abaixo.

Exemplo
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");

JavaScript String padEnd()
O padEnd()método preenche uma string a partir do final.

Ele preenche uma string com outra string (várias vezes) até atingir um determinado comprimento.

Exemplos
let text = "5";
let padded = text.padEnd(4,"0");
let text = "5";
let padded = text.padEnd(4,"x");
Observação
O padEnd()método é um método de string.

Para preencher um número, primeiro converta-o em uma string.

Veja o exemplo abaixo.

Exemplo
let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");

Repetição de sequência de caracteres JavaScript ()
O repeat()método retorna uma string com um número de cópias de uma string.

O repeat()método retorna uma nova string.

O repeat()método não altera a string original.

Exemplos
Crie cópias de um texto:

let text = "Hello world!";
let result = text.repeat(2);
let text = "Hello world!";
let result = text.repeat(4);

Substituindo o conteúdo da string
O replace()método substitui um valor especificado por outro valor em uma string:

Exemplo
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
Observação
O replace()método não altera a string na qual é chamado.

O replace()método retorna uma nova string.

O replace()método substitui apenas a primeira correspondência

Se quiser substituir todas as correspondências, use uma expressão regular com o sinalizador /g definido. Veja os exemplos abaixo.

Por padrão, o replace()método substitui apenas a primeira correspondência:

Exemplo
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

Por padrão, o replace()método diferencia maiúsculas de minúsculas. Escrever MICROSOFT (com maiúsculas) não funcionará:

Exemplo
let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");

Para substituir maiúsculas e minúsculas, use uma expressão regular com um /isinalizador (insensível):

Exemplo
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

Observação
Expressões regulares são escritas sem aspas.

Para substituir todas as correspondências, use uma expressão regular com um /gsinalizador (correspondência global):

Exemplo
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

Observação
Você aprenderá muito mais sobre expressões regulares no capítulo Expressões regulares em JavaScript .

SubstituirAll() em JavaScript
Em 2021, o JavaScript introduziu o método string replaceAll():

Exemplo
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
O replaceAll()método permite que você especifique uma expressão regular em vez de uma string a ser substituída.

Se o parâmetro for uma expressão regular, o sinalizador global (g) deverá ser definido, caso contrário, um TypeError será gerado.

Exemplo
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
Observação
replaceAll()é um recurso do ES2021 .

replaceAll()não funciona no Internet Explorer.

Convertendo uma String em um Array
Se você quiser trabalhar com uma string como uma matriz, você pode convertê-la em uma matriz.

Divisão de strings em JavaScript ()
Uma string pode ser convertida em uma matriz com o split()método:

Exemplo
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
Se o separador for omitido, a matriz retornada conterá a string inteira no índice [0].

Se o separador for "", o array retornado será um array de caracteres únicos:

Exemplo
text.split("")

Índice de sequência de caracteres JavaScriptOf()
O indexOf()método retorna o índice (posição) da primeira ocorrência de uma string em uma string, ou retorna -1 se a string não for encontrada:

Exemplo
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
Observação
JavaScript conta posições a partir de zero.

0 é a primeira posição em uma string, 1 é a segunda, 2 é a terceira, ...

String JavaScript lastIndexOf()
O lastIndexOf()método retorna o índice da última ocorrência de um texto especificado em uma string:

Exemplo
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
Ambos indexOf(), e lastIndexOf()retornam -1 se o texto não for encontrado:

Exemplo
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("John");
Ambos os métodos aceitam um segundo parâmetro como posição inicial para a pesquisa:

Exemplo
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);
Os lastIndexOf()métodos pesquisam para trás (do fim para o começo), o que significa que se o segundo parâmetro for 15, a pesquisa começa na posição 15 e pesquisa até o começo da string.

Exemplo
let text = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate", 15);
Pesquisa de strings JavaScript()
O search()método pesquisa uma string (ou uma expressão regular) e retorna a posição da correspondência:

Exemplos
let text = "Please locate where 'locate' occurs!";
text.search("locate");
let text = "Please locate where 'locate' occurs!";
text.search(/locate/);
Você notou?
Os dois métodos, indexOf()e search(), são iguais?

Eles aceitam os mesmos argumentos (parâmetros) e retornam o mesmo valor?

Os dois métodos NÃO são iguais. Estas são as diferenças:

O search()método não pode aceitar um segundo argumento de posição inicial.
O indexOf()método não pode aceitar valores de pesquisa poderosos (expressões regulares).
Você aprenderá mais sobre expressões regulares em um capítulo posterior.

Correspondência de string JavaScript()
O match()método retorna uma matriz contendo os resultados da correspondência de uma string com uma string (ou uma expressão regular).

Exemplos
Faça uma busca por "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
Faça uma busca por "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/);
Realize uma busca global por "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);
Execute uma busca global, sem distinção entre maiúsculas e minúsculas, por "ain":

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);
Observação
Se uma expressão regular não incluir o modificador g (pesquisa global), match()retornará apenas a primeira correspondência na string.

Leia mais sobre expressões regulares no capítulo JS RegExp .

Cordas JavaScript matchAll()
O matchAll()método retorna um iterador contendo os resultados da correspondência de uma string com uma string (ou uma expressão regular).

Exemplo
const iterator = text.matchAll("Cats");
Se o parâmetro for uma expressão regular, o sinalizador global (g) deverá ser definido, caso contrário, um TypeError será gerado.

Exemplo
const iterator = text.matchAll(/Cats/g);
Se você quiser pesquisar sem distinção entre maiúsculas e minúsculas, o sinalizador de insensibilidade (i) deve ser definido:

Exemplo
const iterator = text.matchAll(/Cats/gi);

A sequência de caracteres JavaScript inclui()
O includes()método retorna verdadeiro se uma string contiver um valor especificado.

Caso contrário, ele retorna false.

Exemplos
Verifique se uma string inclui "mundo":

let text = "Hello world, welcome to the universe.";
text.includes("world");
Verifique se uma string inclui "world". Comece na posição 12:

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);
Notas
includes()diferencia maiúsculas de minúsculas.

String JavaScript começa com()
O startsWith()método retorna true se uma string começa com um valor especificado.

Caso contrário, ele retorna false:

Exemplos
Retorna verdadeiro:

let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
Retorna falso:

let text = "Hello world, welcome to the universe.";
text.startsWith("world")
Uma posição inicial para a pesquisa pode ser especificada:

Retorna falso:

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 5)
Retorna verdadeiro:

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6)
Notas
startsWith()diferencia maiúsculas de minúsculas.

String JavaScript termina com()
O endsWith()método retorna true se uma string termina com um valor especificado.

Caso contrário, ele retorna false:

Exemplos
Verifique se uma string termina com "Doe":

let text = "John Doe";
text.endsWith("Doe");
Verifique se os 11 primeiros caracteres de uma string terminam com "world":

let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);

Notas
endsWith()diferencia maiúsculas de minúsculas.

## Matrizes JS: Uma matriz é uma variável especial que pode conter mais de um valor:
const cars = ["Saab", "Volvo", "BMW"];

Por que usar matrizes?
Se você tiver uma lista de itens (uma lista de nomes de carros, por exemplo), armazenar os carros em variáveis ​​únicas pode ficar assim:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
No entanto, e se você quiser percorrer os carros e encontrar um específico? E se você não tivesse 3 carros, mas 300?

A solução é uma matriz!

Uma matriz pode conter muitos valores sob um único nome, e você pode acessar os valores consultando um número de índice.

Criando uma matriz
Usar um literal de array é a maneira mais fácil de criar um array JavaScript.

Sintaxe:

const array_name = [item1, item2, ...];      
É uma prática comum declarar matrizes com a palavra-chave const .

Exemplo
const cars = ["Saab", "Volvo", "BMW"];
Espaços e quebras de linha não são importantes. Uma declaração pode abranger várias linhas:

Exemplo
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

Você também pode criar uma matriz e então fornecer os elementos:

Exemplo
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

Usando a palavra-chave JavaScript new
O exemplo a seguir também cria um Array e atribui valores a ele:

Exemplo
const cars = new Array("Saab", "Volvo", "BMW");
Os dois exemplos acima fazem exatamente a mesma coisa.

Não há necessidade de usar new Array().

Para simplicidade, legibilidade e velocidade de execução, use o método literal de matriz.

Acessando elementos de matriz
Você acessa um elemento de matriz referindo-se ao número do índice :

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
Observação: os índices de matriz começam com 0.

[0] é o primeiro elemento. [1] é o segundo elemento.

Alterando um elemento de matriz
Esta declaração altera o valor do primeiro elemento em cars:

cars[0] = "Opel";
Exemplo
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
Convertendo uma matriz em uma string
O método JavaScript toString()converte uma matriz em uma sequência de valores de matriz (separados por vírgula).

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Resultado:

Banana,Orange,Apple,Mango
Acesse o Array Completo
Com JavaScript, o array completo pode ser acessado consultando o nome do array:

Exemplo
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
Matrizes são objetos
Arrays são um tipo especial de objetos. O typeofoperador em JavaScript retorna "object" para arrays.

Mas, arrays JavaScript são melhor descritos como arrays.

Arrays usam números para acessar seus "elementos". Neste exemplo, person[0] retorna John:

Variedade:
const person = ["John", "Doe", 46];
Objetos usam nomes para acessar seus "membros". Neste exemplo, person.firstName retorna John:

Objeto:
const person = {firstName:"John", lastName:"Doe", age:46};
Elementos de matriz podem ser objetos
Variáveis ​​JavaScript podem ser objetos. Arrays são tipos especiais de objetos.

Por isso, você pode ter variáveis ​​de diferentes tipos no mesmo Array.

Você pode ter objetos em um Array. Você pode ter funções em um Array. Você pode ter arrays em um Array:

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
Propriedades e métodos de matriz
A verdadeira força dos arrays JavaScript são as propriedades e métodos de array integrados:

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
Os métodos de matriz são abordados nos próximos capítulos.

A propriedade de comprimento
A lengthpropriedade de um array retorna o comprimento de um array (o número de elementos do array).

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
A lengthpropriedade é sempre uma a mais que o índice mais alto da matriz.

Acessando o primeiro elemento do array
Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
Acessando o Último Elemento do Array
Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
Elementos de matriz de loop
Uma maneira de percorrer um array é usando um forloop:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
Você também pode usar a Array.forEach()função:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
Adicionando elementos de matriz
A maneira mais fácil de adicionar um novo elemento a um array é usando o push()método:

Exemplo
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
Novos elementos também podem ser adicionados a uma matriz usando a lengthpropriedade:

Exemplo
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
AVISO !
Adicionar elementos com índices altos pode criar "buracos" indefinidos em uma matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
Matrizes Associativas
Muitas linguagens de programação suportam matrizes com índices nomeados.

Matrizes com índices nomeados são chamadas de matrizes associativas (ou hashes).

JavaScript não suporta matrizes com índices nomeados.

Em JavaScript, arrays sempre usam índices numerados .  

Exemplo
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;    // Will return 3
person[0];        // Will return "John"
AVISO!!
Se você usar índices nomeados, o JavaScript redefinirá o array para um objeto.

Depois disso, alguns métodos e propriedades de array produzirão resultados incorretos .

 Exemplo:
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
A diferença entre matrizes e objetos
Em JavaScript, arrays usam índices numerados .  

Em JavaScript, os objetos usam índices nomeados .

Matrizes são um tipo especial de objetos, com índices numerados.

Quando usar arrays. Quando usar objetos.
JavaScript não suporta matrizes associativas.
Você deve usar objetos quando quiser que os nomes dos elementos sejam strings (texto) .
Você deve usar matrizes quando quiser que os nomes dos elementos sejam números .
JavaScript novo Array()
JavaScript tem um construtor de array integrado new Array().

Mas você pode usar com segurança [].

Essas duas instruções diferentes criam uma nova matriz vazia chamada pontos:

const points = new Array();
const points = [];
Essas duas instruções diferentes criam uma nova matriz contendo 6 números:

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
A newpalavra-chave pode produzir alguns resultados inesperados:

// Create an array with three elements:
const points = new Array(40, 100, 1);
// Create an array with two elements:
const points = new Array(40, 100);
// Create an array with one element ???
const points = new Array(40);  
Um erro comum
const points = [40];
não é o mesmo que:

const points = new Array(40);
// Create an array with one element:
const points = [40];
// Create an array with 40 undefined elements:
const points = new Array(40);  
Como reconhecer uma matriz
Uma pergunta comum é: Como sei se uma variável é uma matriz?

O problema é que o operador JavaScript typeofretorna " object":

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
O operador typeof retorna objeto porque um array JavaScript é um objeto.

Solução 1:
Para resolver este problema, o ECMAScript 5 (JavaScript 2009) definiu um novo método Array.isArray():

Array.isArray(fruits);
Solução 2:
O instanceofoperador retorna verdadeiro se um objeto for criado por um determinado construtor:

const fruits = ["Banana", "Orange", "Apple"];

(fruits instanceof Array);
Matrizes e objetos aninhados
Valores em objetos podem ser matrizes, e valores em matrizes podem ser objetos:

Exemplo
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
Para acessar matrizes dentro de matrizes, use um loop for-in para cada matriz:

Exemplo
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}

Comprimento do array JavaScript
A lengthpropriedade retorna o comprimento (tamanho) de uma matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
Matriz JavaScript toString()
O método JavaScript toString()converte uma matriz em uma sequência de valores de matriz (separados por vírgula).

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Resultado:

Banana,Orange,Apple,Mango
Matriz JavaScript at()
ES2022 introduziu o método array at():

Exemplos
Obtenha o terceiro elemento de frutas usando at():

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
Obtenha o terceiro elemento de frutas usando []:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];
O at()método retorna um elemento indexado de uma matriz.

O at()método retorna o mesmo que [].

Junção de matriz JavaScript()
O join()método também une todos os elementos do array em uma string.

Ele se comporta exatamente como toString(), mas além disso você pode especificar o separador:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
Resultado:

Banana * Orange * Apple * Mango

Popping and Pushing: Ao trabalhar com matrizes, é fácil remover elementos e adicionar novos elementos. Isto é o que significa estourar e empurrar: Retirar itens de um array ou inserir itens em um array.

Matriz JavaScript pop()
O pop()método remove o último elemento de uma matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
O pop()método retorna o valor que foi "retirado":

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
Matriz JavaScript push()
O push()método adiciona um novo elemento a uma matriz (no final):

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
O push()método retorna o novo comprimento da matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
Elementos em Mudança
Shifting é equivalente a popping, mas trabalhando no primeiro elemento em vez do último.

Matriz JavaScript shift()
O shift()método remove o primeiro elemento da matriz e "desloca" todos os outros elementos para um índice mais baixo.

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
O shift()método retorna o valor que foi "deslocado para fora":

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
Matriz JavaScript unshift()
O unshift()método adiciona um novo elemento a uma matriz (no início) e "desloca" elementos mais antigos:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
O unshift()método retorna o novo comprimento da matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
Elementos em mudança
Os elementos da matriz são acessados ​​usando seu número de índice :

Os índices de matriz começam com 0:

[0] é o primeiro elemento da matriz,
[1] é o segundo,
[2] é o terceiro ...

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
Comprimento do array JavaScript
A lengthpropriedade fornece uma maneira fácil de acrescentar um novo elemento a uma matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
Matriz JavaScript delete()
Aviso !
Usando furos delete()de folhas undefinedna matriz.

Em vez disso, use pop() ou shift().

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
Mesclando Arrays (Concatenando)
Em linguagens de programação, concatenação significa unir strings de ponta a ponta.

A concatenação de "neve" e "bola" resulta em "bola de neve".

Concatenar matrizes significa unir matrizes de ponta a ponta.

Concat() de matriz JavaScript
O concat()método cria uma nova matriz mesclando (concatenando) matrizes existentes:

Exemplo (Mesclando dois arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
Observação
O concat()método não altera os arrays existentes. Ele sempre retorna um novo array.

O concat()método pode receber qualquer número de argumentos de array.

Exemplo (Mesclando três matrizes)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
O concat()método também pode receber strings como argumentos:

Exemplo (Mesclando uma matriz com valores)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
Matriz copyWithin()
O copyWithin()método copia elementos do array para outra posição em um array:

Exemplos
Copiar para o índice 2 todos os elementos do índice 0:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
Copie para o índice 2 os elementos do índice 0 a 2:

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
Observação
O copyWithin()método substitui os valores existentes.

O copyWithin()método não adiciona itens ao array.

O copyWithin()método não altera o comprimento da matriz.

Achatando uma matriz
Achatar uma matriz é o processo de reduzir a dimensionalidade de uma matriz.

O achatamento é útil quando você deseja converter uma matriz multidimensional em uma matriz unidimensional.

Matriz JavaScript flat()
ES2019 introduziu o método Array flat().

O flat()método cria uma nova matriz com elementos de submatriz concatenados a uma profundidade especificada.

Exemplo
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

Matrizes de emenda e fatiamento
O splice()método adiciona novos itens a uma matriz.

O slice()método corta um pedaço de uma matriz.

Matriz JavaScript splice()
O splice()método pode ser usado para adicionar novos itens a uma matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
O primeiro parâmetro (2) define a posição onde novos elementos devem ser adicionados (emendados).

O segundo parâmetro (0) define quantos elementos devem ser removidos .

Os demais parâmetros ("Limão", "Kiwi") definem os novos elementos a serem adicionados .

O splice()método retorna um array com os itens excluídos:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

Usando splice() para remover elementos
Com a configuração inteligente de parâmetros, você pode usar splice()para remover elementos sem deixar "buracos" na matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
O primeiro parâmetro (0) define a posição onde novos elementos devem ser adicionados (emendados).

O segundo parâmetro (1) define quantos elementos devem ser removidos .

O restante dos parâmetros são omitidos. Nenhum novo elemento será adicionado.

Matriz JavaScript toSpliced()
O ES2023 adicionou o método Array toSpliced() como uma maneira segura de emendar um array sem alterar o array original.

A diferença entre o novo método toSpliced() e o antigo método splice() é que o novo método cria uma nova matriz, mantendo a matriz original inalterada, enquanto o método antigo alterava a matriz original.

Exemplo
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
Matriz JavaScript slice()
O slice()método divide um pedaço de uma matriz em uma nova matriz:

Exemplo
Corte uma parte de uma matriz começando pelo elemento 1 da matriz ("Laranja"):

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
Observação
O slice()método cria uma nova matriz.

O slice()método não remove nenhum elemento do array de origem.

Exemplo
Corte uma parte de uma matriz começando pelo elemento 3 da matriz ("Apple"):

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
O slice()método pode receber dois argumentos como slice(1, 3).

O método então seleciona elementos do argumento inicial e até (mas não incluindo) o argumento final.

Exemplo
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
Se o argumento final for omitido, como nos primeiros exemplos, o slice() método corta o restante do array.

Exemplo
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
toString() automático
O JavaScript converte automaticamente uma matriz em uma string separada por vírgulas quando um valor primitivo é esperado.

Este é sempre o caso quando você tenta gerar uma matriz.

Esses dois exemplos produzirão o mesmo resultado:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
Observação
Todos os objetos JavaScript têm um método toString().

Índice de matriz JavaScriptOf()
O indexOf()método pesquisa um valor de elemento em uma matriz e retorna sua posição.

Nota: O primeiro item tem posição 0, o segundo item tem posição 1 e assim por diante.

Exemplo
Pesquisar em uma matriz o item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
Sintaxe
array.indexOf(item, start)
item	Required. The item to search for.
start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
Array.indexOf()retorna -1 se o item não for encontrado.

Se o item estiver presente mais de uma vez, ele retorna a posição da primeira ocorrência.

Matriz JavaScript lastIndexOf()
Array.lastIndexOf()é o mesmo que Array.indexOf(), mas retorna a posição da última ocorrência do elemento especificado.

Exemplo
Pesquisar em uma matriz o item "Apple":

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;

Matriz JavaScript inclui()
ECMAScript 2016 introduziu Array.includes()arrays. Isso nos permite verificar se um elemento está presente em um array (incluindo NaN, diferente de indexOf).

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true

Matriz JavaScript find()
O find()método retorna o valor do primeiro elemento da matriz que passa em uma função de teste.

Este exemplo encontra (retorna o valor) do primeiro elemento maior que 18:

Exemplo
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Observe que a função recebe 3 argumentos:

O valor do item
O índice do item
A matriz em si

Matriz JavaScript findIndex()
O findIndex()método retorna o índice do primeiro elemento da matriz que passa em uma função de teste.

Este exemplo encontra o índice do primeiro elemento maior que 18:

Exemplo
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Observe que a função recebe 3 argumentos:

O valor do item
O índice do item
A matriz em si

Método JavaScript Array findLast()
O ES2023 adicionou o método findLast() que começará no final de um array e retornará o valor do primeiro elemento que satisfizer uma condição.

Exemplo
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);


Método JavaScript Array findLastIndex()
O método findLastIndex() encontra o índice do último elemento que satisfaz uma condição.

Exemplo
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);

Classificando uma matriz
O sort()método classifica uma matriz em ordem alfabética:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
Invertendo uma matriz
O reverse()método inverte os elementos em uma matriz:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
Ao combinar sort()e reverse(), você pode classificar uma matriz em ordem decrescente:

Exemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
Método JavaScript Array toSorted()
O ES2023 adicionou o toSorted()método como uma maneira segura de classificar uma matriz sem alterar a matriz original.

A diferença entre toSorted()e sort() é que o primeiro método cria uma nova matriz, mantendo a matriz original inalterada, enquanto o último método altera a matriz original.

Exemplo
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
Método JavaScript Array toReversed()
O ES2023 adicionou o toReversed()método como uma maneira segura de reverter uma matriz sem alterar a matriz original.

A diferença entre toReversed()e reverse()é que o primeiro método cria uma nova matriz, mantendo a matriz original inalterada, enquanto o último método altera a matriz original.

Exemplo
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
Classificação numérica
Por padrão, a sort()função classifica os valores como strings .

Isso funciona bem para strings ("Apple" vem antes de "Banana").

Se os números forem classificados como strings, "25" é maior que "100", porque "2" é maior que "1".

Por causa disso, o sort()método produzirá resultados incorretos ao classificar números.

Você pode corrigir isso fornecendo uma função de comparação :

Exemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
Use o mesmo truque para classificar uma matriz em ordem decrescente:

Exemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});


A função de comparação
O objetivo da função compare é definir uma ordem de classificação alternativa.

A função compare deve retornar um valor negativo, zero ou positivo, dependendo dos argumentos:

function(a, b){return a - b}
Quando a sort()função compara dois valores, ela os envia para a função de comparação e os classifica de acordo com o valor retornado (negativo, zero, positivo).

Se o resultado for negativo, aé classificado antes de b.

Se o resultado for positivo, bé classificado antes de a.

Se o resultado for 0, nenhuma alteração será feita na ordem de classificação dos dois valores.

Exemplo:

A função compare compara todos os valores na matriz, dois valores por vez (a, b).

Ao comparar 40 e 100, o sort()método chama a função de comparação (40, 100).

A função calcula 40 - 100 (a - b)e, como o resultado é negativo (-60), a função de classificação classificará 40 como um valor menor que 100.

Você pode usar este trecho de código para experimentar a classificação numérica e alfabética:

Classificando uma matriz em ordem aleatória
Usando uma função de classificação, como explicado acima, você pode classificar uma matriz numérica em ordem aleatória

Exemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});

O Método Fisher Yates
O método points.sort() no exemplo acima não é preciso. Ele favorecerá alguns números em detrimento de outros.

O método correto mais popular é chamado de embaralhamento de Fisher Yates e foi introduzido na ciência de dados já em 1938!

Em JavaScript, o método pode ser traduzido para isto:

Exemplo
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

Encontre o menor (ou maior) valor da matriz
Não há funções integradas para encontrar o valor máximo ou mínimo em uma matriz.

Para encontrar o menor ou maior valor, você tem 3 opções:

Classifique a matriz e leia o primeiro ou o último elemento
Use Math.min() ou Math.max()
Escreva uma função caseira
Encontre Min ou Max com sort()
Depois de classificar uma matriz, você pode usar o índice para obter os valores mais altos e mais baixos.

Ordernar ascendente:
Exemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value
Ordenar em ordem decrescente:
Exemplo
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
Observação
Classificar uma matriz inteira é um método muito ineficiente se você deseja encontrar apenas o maior (ou menor) valor.

Usando Math.min() em um Array
Você pode usar Math.min.applypara encontrar o menor número em uma matriz:

Exemplo
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

Math.min.apply(null, [1, 2, 3])é equivalente a Math.min(1, 2, 3).

Usando Math.max() em um Array
Você pode usar Math.max.applypara encontrar o maior número em uma matriz:

Exemplo
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

Math.max.apply(null, [1, 2, 3])é equivalente a Math.max(1, 2, 3).

Método mínimo de matriz JavaScript
Não há nenhuma função interna para encontrar o menor valor em uma matriz JavaScript.

O código mais rápido para encontrar o menor número é usar um método caseiro .

Esta função percorre uma matriz comparando cada valor com o menor valor encontrado:

Exemplo (Encontre Min)
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

Método Máximo de Matriz JavaScript
Não há nenhuma função interna para encontrar o maior valor em uma matriz JavaScript.

O código mais rápido para encontrar o número mais alto é usar um método caseiro .

Esta função percorre uma matriz comparando cada valor com o maior valor encontrado:

Exemplo (Encontre Max)
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

Classificando matrizes de objetos
Os arrays JavaScript geralmente contêm objetos:

Exemplo
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
Mesmo que os objetos tenham propriedades de diferentes tipos de dados, o sort()método pode ser usado para classificar a matriz.

A solução é escrever uma função de comparação para comparar os valores da propriedade:

Exemplo
cars.sort(function(a, b){return a.year - b.year});
Comparar propriedades de strings é um pouco mais complexo:

Exemplo
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
Array estável sort()
O ES2019 revisou o sort()método Array.

Antes de 2019, a especificação permitia algoritmos de classificação instáveis, como o QuickSort.

Após o ES2019, os navegadores devem usar um algoritmo de classificação estável:

Ao classificar elementos por um valor, os elementos devem manter sua posição relativa a outros elementos com o mesmo valor.

Exemplo
const myArr = [
  {name:"X00",price:100 },
  {name:"X01",price:100 },
  {name:"X02",price:100 },
  {name:"X03",price:100 },
  {name:"X04",price:110 },
  {name:"X05",price:110 },
  {name:"X06",price:110 },
  {name:"X07",price:110 }
];
No exemplo acima, ao classificar por preço, o resultado não pode sair com os nomes em outra posição relativa como esta:

X01 100
X03 100
X00 100
X03 100
X05 110
X04 110
X06 110
X07 110

Matriz JavaScript para cada()
O forEach()método chama uma função (uma função de retorno de chamada) uma vez para cada elemento do array.

Exemplo
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
Observe que a função recebe 3 argumentos:

O valor do item
O índice do item
A matriz em si
O exemplo acima usa apenas o parâmetro value. O exemplo pode ser reescrito para:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}
Mapa de matriz JavaScript()
O map()método cria uma nova matriz executando uma função em cada elemento da matriz.

O map()método não executa a função para elementos do array sem valores.

O map()método não altera a matriz original.

Este exemplo multiplica cada valor da matriz por 2:

Exemplo
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
Observe que a função recebe 3 argumentos:

O valor do item
O índice do item
A matriz em si
Quando uma função de retorno de chamada usa apenas o parâmetro de valor, os parâmetros de índice e matriz podem ser omitidos:

Exemplo
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
Matriz JavaScript flatMap()
O ES2019 adicionou o flatMap()método Array ao JavaScript.

O flatMap()método primeiro mapeia todos os elementos de uma matriz e então cria uma nova matriz achatando-a.

Exemplo
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);

Filtro de matriz JavaScript()
O filter()método cria uma nova matriz com elementos de matriz que passam em um teste.

Este exemplo cria uma nova matriz a partir de elementos com um valor maior que 18:

Exemplo
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Observe que a função recebe 3 argumentos:

O valor do item
O índice do item
A matriz em si
No exemplo acima, a função de retorno de chamada não usa os parâmetros index e array, então eles podem ser omitidos:

Exemplo
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
Reduzir() de matriz JavaScript
O reduce()método executa uma função em cada elemento da matriz para produzir (reduzi-lo a) um único valor.

O reduce()método funciona da esquerda para a direita no array. Veja também reduceRight().

O reduce()método não reduz a matriz original.

Este exemplo encontra a soma de todos os números em uma matriz:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Observe que a função aceita 4 argumentos:

O total (o valor inicial / valor retornado anteriormente)
O valor do item
O índice do item
A matriz em si
O exemplo acima não usa os parâmetros index e array. Ele pode ser reescrito para:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
O reduce()método pode aceitar um valor inicial:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
Matriz JavaScript reduceRight()
O reduceRight()método executa uma função em cada elemento da matriz para produzir (reduzi-lo a) um único valor.

As reduceRight()obras da direita para a esquerda na matriz.

O reduceRight()método não reduz a matriz original.

Este exemplo encontra a soma de todos os números em uma matriz:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
Observe que a função aceita 4 argumentos:

O total (o valor inicial / valor retornado anteriormente)
O valor do item
O índice do item
A matriz em si
O exemplo acima não usa os parâmetros index e array. Ele pode ser reescrito para:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}
Matriz JavaScript every()
O every()método verifica se todos os valores da matriz passam no teste.

Este exemplo verifica se todos os valores da matriz são maiores que 18:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
Observe que a função recebe 3 argumentos:

O valor do item
O índice do item
A matriz em si
Quando uma função de retorno de chamada usa apenas o primeiro parâmetro (valor), os outros parâmetros podem ser omitidos:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
Matriz JavaScript some()
O some()método verifica se alguns valores da matriz passam no teste.

Este exemplo verifica se alguns valores da matriz são maiores que 18:

Exemplo
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

Observe que a função recebe 3 argumentos:

O valor do item
O índice do item
A matriz em si
Matriz JavaScript.from()
O Array.from()método retorna um objeto Array de qualquer objeto com uma propriedade de comprimento ou qualquer objeto iterável.

Exemplo
Crie um Array a partir de uma String:

Array.from("ABCDEFG");


Chaves de matriz JavaScript()
O Array.keys()método retorna um objeto Array Iterator com as chaves de um array.

Exemplo
Crie um objeto Array Iterator, contendo as chaves do array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}

Entradas de matriz JavaScript()
Exemplo
Crie um Iterador de Matriz e, em seguida, itere sobre os pares chave/valor:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
O entries()método retorna um objeto Array Iterator com pares chave/valor:

[0, "Banana"]
[1, "Laranja"]
[2, "Maçã"]
[3, "Manga"]

O entries()método não altera a matriz original.

Método JavaScript Array with()
O ES2023 adicionou o método Array with() como uma maneira segura de atualizar elementos em um array sem alterar o array original.

Exemplo
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
Distribuição de matriz JavaScript (...)
O operador ... expande um iterável (como uma matriz) em mais elementos:

Exemplo
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];


## Math: Objeto matemático JavaScript. O objeto JavaScript Math permite que você execute tarefas matemáticas em números.

Exemplo
Math.PI;
O Objeto Matemático
Ao contrário de outros objetos, o objeto Math não tem construtor.

O objeto Math é estático.

Todos os métodos e propriedades podem ser usados ​​sem criar primeiro um objeto Math.

Propriedades matemáticas (constantes)
A sintaxe para qualquer propriedade matemática é: .Math.property

JavaScript fornece 8 constantes matemáticas que podem ser acessadas como propriedades matemáticas:

Exemplo
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
Métodos Matemáticos
A sintaxe para qualquer método matemático é:Math.method(number)

Número para Inteiro
Existem 4 métodos comuns para arredondar um número para um inteiro:

Matemática.round(x)	Retorna x arredondado para o inteiro mais próximo
Math.ceil(x)	Retorna x arredondado para o inteiro mais próximo
Matemática.piso(x)	Retorna x arredondado para baixo para o inteiro mais próximo
Math.trunc(x)	Retorna a parte inteira de x ( novo no ES6 )
Matemática.round()
Math.round(x)retorna o inteiro mais próximo:

Exemplos
Math.round(4.6);
Math.round(4.5);
Math.round(4.4);
Matemática.teto()
Math.ceil(x)retorna o valor de x arredondado para o inteiro mais próximo:

Exemplo
Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);
Matemática.piso()
Math.floor(x)retorna o valor de x arredondado para o inteiro mais próximo:

Exemplo
Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);
Matemática.trunc()
Math.trunc(x)retorna a parte inteira de x:

Exemplo
Math.trunc(4.9);
Math.trunc(4.7);
Math.trunc(4.4);
Math.trunc(4.2);
Math.trunc(-4.2);
Math.sign()
Math.sign(x)retorna se x é negativo, nulo ou positivo:

Exemplo
Math.sign(-4);
Math.sign(0);
Math.sign(4);


Matemática.pow()
Math.pow(x, y)retorna o valor de x elevado à potência de y:

Exemplo
Math.pow(8, 2);
Matemática.sqrt()
Math.sqrt(x)retorna a raiz quadrada de x:

Exemplo
Math.sqrt(64);
Matemática.abs()
Math.abs(x)retorna o valor absoluto (positivo) de x:

Exemplo
Math.abs(-4.7);
Math.sin()
Math.sin(x)retorna o seno (um valor entre -1 e 1) do ângulo x (dado em radianos).

Se você quiser usar graus em vez de radianos, você tem que converter graus para radianos:

Ângulo em radianos = Ângulo em graus x PI / 180.

Exemplo
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
Math.cos()
Math.cos(x)retorna o cosseno (um valor entre -1 e 1) do ângulo x (dado em radianos).

Se você quiser usar graus em vez de radianos, você tem que converter graus para radianos:

Ângulo em radianos = Ângulo em graus x PI / 180.

Exemplo
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
Math.min() e Math.max()
Math.min()e Math.max()pode ser usado para encontrar o menor ou maior valor em uma lista de argumentos:

Exemplo
Math.min(0, 150, 30, 20, -8, -200);
Exemplo
Math.max(0, 150, 30, 20, -8, -200);
Matemática.aleatório()
Math.random()retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo):

Exemplo
Math.random();


O método Math.log()
Math.log(x)retorna o logaritmo natural de x.

O logaritmo natural retorna o tempo necessário para atingir um certo nível de crescimento:

Exemplos
Math.log(1);
Math.log(2);
Math.log(3);
Math.E e Math.log() são gêmeos.

Quantas vezes devemos multiplicar Math.E para obter 10?

Math.log(10);
O método Math.log2()
Math.log2(x)retorna o logaritmo de base 2 de x.

Quantas vezes devemos multiplicar 2 para obter 8?

Math.log2(8);
O método Math.log10()
Math.log10(x)retorna o logaritmo de base 10 de x.

Quantas vezes devemos multiplicar 10 para obter 1000?

Math.log10(1000);
Métodos matemáticos JavaScript
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)

Math.random()retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo):

Exemplo
// Returns a random number:
Math.random();
Math.random()sempre retorna um número menor que 1.

Inteiros aleatórios em JavaScript
Math.random()usado com Math.floor()pode ser usado para retornar inteiros aleatórios.

Não existem números inteiros em JavaScript.

Estamos falando de números sem decimais aqui.

Exemplo
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
Exemplo
// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);
Exemplo
// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);
Exemplo
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
Exemplo
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;
Exemplo
// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;

Uma função aleatória adequada
Como você pode ver nos exemplos acima, pode ser uma boa ideia criar uma função aleatória adequada para usar em todos os propósitos de números inteiros aleatórios.

Esta função JavaScript sempre retorna um número aleatório entre min (incluído) e max (excluído):

Exemplo
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
Esta função JavaScript sempre retorna um número aleatório entre min e max (ambos incluídos):

Exemplo
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}





# ### Introdução ao HTML

#### **História e Criação do HTML**
HTML, ou HyperText Markup Language, é a linguagem padrão utilizada para criar e estruturar conteúdo na web. Foi criado por Tim Berners-Lee, um cientista britânico, em 1991, enquanto trabalhava no CERN (Organização Europeia para a Pesquisa Nuclear). Ele desenvolveu o HTML como parte de um projeto maior que incluiu a criação da World Wide Web (WWW), o primeiro navegador web e o primeiro servidor web.

#### **Motivação para a Criação**
A motivação principal por trás da criação do HTML foi a necessidade de uma linguagem simples que permitisse aos cientistas e pesquisadores compartilhar documentos de forma fácil e acessível na internet. Antes do HTML, compartilhar informações entre diferentes sistemas e redes era uma tarefa complexa e ineficiente. Com o HTML, foi possível criar páginas web interligadas por hiperlinks, facilitando a navegação e o acesso a informações em um ambiente de rede global.

#### **Importância do HTML**
O HTML é de fundamental importância na web por várias razões:

1. **Estruturação do Conteúdo:**
   - O HTML fornece a estrutura básica para uma página web, permitindo a inclusão de textos, imagens, vídeos, links, formulários e outros elementos. Sem HTML, as páginas web não teriam uma estrutura consistente.

2. **Acessibilidade:**
   - HTML é uma linguagem aberta e amplamente adotada, o que significa que qualquer pessoa pode criar e acessar páginas web. Isso promove a inclusão digital e permite que informações sejam compartilhadas globalmente.

3. **Compatibilidade:**
   - HTML é compatível com todos os navegadores modernos, o que garante que uma página web escrita em HTML será exibida de maneira consistente em diferentes dispositivos e plataformas.

4. **SEO (Search Engine Optimization):**
   - A correta utilização das tags HTML e a estruturação do conteúdo são essenciais para otimizar uma página web para mecanismos de busca. Isso melhora a visibilidade e o ranking da página nos resultados de pesquisa.

5. **Interatividade:**
   - Embora HTML forneça a estrutura básica, ele pode ser combinado com CSS (Cascading Style Sheets) e JavaScript para criar páginas web visualmente atraentes e interativas.

#### **Significado do HTML**
- **HyperText:** Refere-se à capacidade de criar links entre documentos ou páginas, permitindo a navegação na web.
- **Markup:** Indica que a linguagem utiliza marcas (tags) para definir a estrutura e o conteúdo de uma página.
- **Language:** É uma linguagem de marcação, não de programação, utilizada para descrever a estrutura de um documento web.

### Estrutura Básica de um Documento HTML

Um documento HTML típico possui a seguinte estrutura básica:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Título da Página</title>
</head>
<body>
    <h1>Bem-vindo ao HTML</h1>
    <p>Este é um parágrafo de exemplo.</p>
</body>
</html>
```
### HTML é a pedra angular da web, essencial para a criação de páginas e aplicações web. Criado por Tim Berners-Lee para facilitar o compartilhamento de informações, o HTML evoluiu para se tornar uma das linguagens mais importantes na tecnologia moderna. Compreender HTML é fundamental para qualquer desenvolvedor web, pois fornece a base sobre a qual todas as outras tecnologias da web são construídas.

**Explicação das Principais Tags:**



### Todas as Tags HTML

#### Estrutura do Documento
- `<!DOCTYPE>`: Define o tipo de documento.
- `<html>`: Elemento raiz de um documento HTML.
- `<head>`: Contém metadados e links para scripts e estilos.
- `<title>`: Define o título do documento.
- `<meta>`: Define metadados sobre o documento.

#### Cabeçalhos e Seções
- `<body>`: Contém o conteúdo principal do documento.
- `<header>`: Define o cabeçalho de uma seção ou documento.
- `<footer>`: Define o rodapé de uma seção ou documento.
- `<nav>`: Define um conjunto de links de navegação.
- `<section>`: Define uma seção genérica de um documento.
- `<article>`: Define conteúdo independente e autocontido.
- `<aside>`: Define conteúdo à parte ou lateral.
- `<h1>` a `<h6>`: Define cabeçalhos de nível 1 a 6.

#### Texto e Formatação
- `<p>`: Define um parágrafo.
- `<br>`: Insere uma quebra de linha.
- `<hr>`: Insere uma linha horizontal.
- `<pre>`: Define texto pré-formatado.
- `<blockquote>`: Define uma citação em bloco.
- `<ol>`: Define uma lista ordenada.
- `<ul>`: Define uma lista não ordenada.
- `<li>`: Define um item de lista.
- `<dl>`: Define uma lista de descrição.
- `<dt>`: Define um termo em uma lista de descrição.
- `<dd>`: Define uma descrição em uma lista de descrição.
- `<figure>`: Define conteúdo ilustrado (imagens, gráficos, etc.).
- `<figcaption>`: Define uma legenda para o elemento `<figure>`.

#### Estilos e Semântica
- `<strong>`: Define texto com importância forte (negrito).
- `<em>`: Define texto enfatizado (itálico).
- `<mark>`: Define texto marcado ou destacado.
- `<small>`: Define texto pequeno.
- `<del>`: Define texto excluído (tachado).
- `<ins>`: Define texto inserido.
- `<sub>`: Define texto subscrito.
- `<sup>`: Define texto sobrescrito.
- `<abbr>`: Define uma abreviação.
- `<code>`: Define um bloco de código.
- `<var>`: Define uma variável.
- `<samp>`: Define uma amostra de código de computador.

#### Links e Mídia
- `<a>`: Define um hiperlink.
- `<img>`: Define uma imagem.
- `<map>`: Define um mapa de imagem.
- `<area>`: Define uma área em um mapa de imagem.
- `<picture>`: Define um container para múltiplas fontes de imagem.
- `<audio>`: Define conteúdo de áudio.
- `<video>`: Define conteúdo de vídeo.
- `<source>`: Define uma fonte para o `<video>` ou `<audio>`.
- `<track>`: Define uma faixa de texto para `<video>` e `<audio>`.

#### Formulários
- `<form>`: Define um formulário.
- `<input>`: Define um campo de entrada de dados.
  `Tipos de inputs`
    `text`
    `password`
    `checkbox`
    `color`
    `date`
    `datetime`
    `email`
    `file`
    `hidden`
    `image`
    `month`
    `number`
    `radio`
    `range`
    `reset`
    `search`
    `submit`
    `tel`
    `time`
    `url`
- `<textarea>`: Define uma área de texto para entrada de dados.
- `<button>`: Define um botão.
- `<label>`: Define um rótulo para um elemento `<input>`.
- `<fieldset>`: Agrupa elementos relacionados em um formulário.
- `<legend>`: Define uma legenda para o elemento `<fieldset>`.
- `<select>`: Define uma lista suspensa.
- `<option>`: Define uma opção em uma lista suspensa.
- `<optgroup>`: Agrupa opções em uma lista suspensa.
- `<datalist>`: Define uma lista de opções predefinidas para um campo de entrada.
- `<output>`: Define o resultado de um cálculo.

#### Tabelas
- `<table>`: Define uma tabela.
- `<caption>`: Define uma legenda para uma tabela.
- `<thead>`: Agrupa o cabeçalho de uma tabela.
- `<tbody>`: Agrupa o corpo de uma tabela.
- `<tfoot>`: Agrupa o rodapé de uma tabela.
- `<tr>`: Define uma linha em uma tabela.
- `<th>`: Define uma célula de cabeçalho em uma tabela.
- `<td>`: Define uma célula em uma tabela.

#### Scripts e Dados
- `<script>`: Define um script.
- `<noscript>`: Define um bloco de texto alternativo a ser exibido se os scripts não estiverem disponíveis.
- `<canvas>`: Define uma área de desenho gráfico.
- `<template>`: Define um template reutilizável.
- `<slot>`: Define um espaço reservado para conteúdo inserido.

#### Outros Elementos
- `<div>`: Define uma divisão ou seção genérica.
- `<span>`: Define um contêiner genérico para conteúdo de linha.
- `<iframe>`: Define um quadro embutido.
- `<main>`: Define o conteúdo principal de um documento.
- `<bdi>`: Isola partes de texto que podem ser formatadas de maneira diferente do restante do texto.
- `<bdo>`: Substitui a direção do texto.
- `<details>`: Define detalhes adicionais que o usuário pode ver ou ocultar.
- `<summary>`: Define um resumo, título ou legenda para o elemento `<details>`.
- `<dialog>`: Define uma caixa de diálogo.
- `<menu>`: Define um conjunto de comandos.
- `<menuitem>`: Define um item em um menu (não mais suportado em todos os navegadores).

### Introdução ao CSS

#### **História e Criação do CSS**
CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata), foi criado por Håkon Wium Lie e Bert Bos em 1996. A motivação por trás do desenvolvimento do CSS foi a necessidade de separar a apresentação (design e layout) do conteúdo HTML, permitindo que os desenvolvedores estilizessem as páginas web de maneira mais eficiente e consistente. Antes do CSS, a estilização era feita diretamente no HTML, o que dificultava a manutenção e a atualização dos estilos.

#### **Importância do CSS**
CSS é essencial para a web moderna por várias razões:

1. **Separação de Conteúdo e Estilo:**
   - CSS permite que o estilo de um documento HTML seja separado do seu conteúdo, promovendo uma estrutura mais limpa e organizada.

2. **Consistência:**
   - Usando CSS, é possível aplicar estilos consistentes a várias páginas web, garantindo uma aparência uniforme em todo o site.

3. **Reutilização:**
   - CSS permite a reutilização de estilos em diferentes elementos e páginas, economizando tempo e esforço.

4. **Acessibilidade:**
   - CSS melhora a acessibilidade ao permitir que os desenvolvedores criem layouts responsivos que funcionam bem em diferentes dispositivos e tamanhos de tela.

5. **Flexibilidade e Controle:**
   - CSS oferece um controle granular sobre o design e a apresentação dos elementos, permitindo ajustes precisos e personalizações complexas.

#### **Significado do CSS**
- **Cascading:** Refere-se à maneira como os estilos são aplicados em cascata, ou seja, de cima para baixo, permitindo que estilos mais específicos sobrescrevam estilos gerais.
- **Style Sheets:** São folhas de estilo que contêm regras para estilizar elementos HTML.

### Seletores e Propriedades CSS

#### **Seletores CSS**

Os seletores CSS são usados para "selecionar" os elementos HTML que queremos estilizar. Aqui estão alguns dos seletores mais comuns:

- **Seletores Simples:**
  - `*`: Seleciona todos os elementos.
  - `elemento`: Seleciona todos os elementos `<elemento>`.
  - `#id`: Seleciona o elemento com o atributo `id` específico.
  - `.classe`: Seleciona todos os elementos com a classe específica.
  
- **Seletores Combinados:**
  - `elemento1, elemento2`: Seleciona todos os `<elemento1>` e `<elemento2>`.
  - `elemento1 elemento2`: Seleciona todos os `<elemento2>` dentro dos `<elemento1>`.
  - `elemento1 > elemento2`: Seleciona todos os `<elemento2>` filhos diretos de `<elemento1>`.
  - `elemento1 + elemento2`: Seleciona o `<elemento2>` que é o próximo irmão imediato de `<elemento1>`.

- **Seletores de Atributos:**
  - `[atributo]`: Seleciona todos os elementos com o atributo específico.
  - `[atributo=valor]`: Seleciona todos os elementos com o atributo igual ao valor específico.

#### **Propriedades CSS**

As propriedades CSS são usadas para definir estilos para os elementos selecionados. Aqui estão algumas das propriedades mais comuns, organizadas por categorias:

### CSS é uma linguagem poderosa e essencial para estilizar páginas web. Ele oferece uma ampla gama de seletores e propriedades que permitem controlar a aparência e o layout dos elementos HTML. A compreensão das diferentes propriedades e como aplicá-las é crucial para criar sites visualmente atraentes e funcionais. Pratique usando diferentes seletores e propriedades para se familiarizar com as capacidades do CSS.

##### **Propriedades de Texto e Fonte**
- `color`: Define a cor do texto.
  ```css
  p {
      color: blue;
  }
  ```
- `font-family`: Define a família de fontes do texto.
  ```css
  p {
      font-family: Arial, sans-serif;
  }
  ```
- `font-size`: Define o tamanho da fonte.
  ```css
  p {
      font-size: 16px;
  }
  ```
- `font-weight`: Define o peso (negrito) da fonte.
  ```css
  p {
      font-weight: bold;
  }
  ```
- `text-align`: Define o alinhamento do texto.
  ```css
  p {
      text-align: center;
  }
  ```
- `text-decoration`: Define a decoração do texto (sublinhado, tachado).
  ```css
  p {
      text-decoration: underline;
  }
  ```

##### **Propriedades de Fundo**
- `background-color`: Define a cor de fundo.
  ```css
  div {
      background-color: yellow;
  }
  ```
- `background-image`: Define uma imagem de fundo.
  ```css
  div {
      background-image: url('imagem.jpg');
  }
  ```
- `background-repeat`: Define se/como a imagem de fundo será repetida.
  ```css
  div {
      background-repeat: no-repeat;
  }
  ```
- `background-size`: Define o tamanho da imagem de fundo.
  ```css
  div {
      background-size: cover;
  }
  ```

##### **Propriedades de Layout**
- `width`: Define a largura do elemento.
  ```css
  div {
      width: 50%;
  }
  ```
- `height`: Define a altura do elemento.
  ```css
  div {
      height: 200px;
  }
  ```
- `margin`: Define a margem externa do elemento.
  ```css
  div {
      margin: 10px;
  }
  ```
- `padding`: Define o preenchimento interno do elemento.
  ```css
  div {
      padding: 20px;
  }
  ```
- `border`: Define a borda do elemento.
  ```css
  div {
      border: 2px solid black;
  }
  ```

##### **Propriedades de Display e Posição**
- `display`: Define como um elemento deve ser exibido.
  ```css
  div {
      display: block;
  }
  ```
- `position`: Define o método de posicionamento de um elemento.
  ```css
  div {
      position: absolute;
      top: 50px;
      left: 100px;
  }
  ```
- `top`, `right`, `bottom`, `left`: Define a posição do elemento.
  ```css
  div {
      top: 10px;
      right: 20px;
  }
  ```
- `z-index`: Define a ordem empilhada do elemento.
  ```css
  div {
      z-index: 1;
  }
  ```

### Propriedades de Texto e Fonte
- `color`: Define a cor do texto.
- `font`: Define todas as propriedades de fonte em uma única declaração.
  - `font-family`: Define a família de fontes.
  - `font-size`: Define o tamanho da fonte.
  - `font-style`: Define o estilo da fonte (normal, itálico, obliqua).
  - `font-weight`: Define o peso da fonte (normal, negrito, mais leve, mais pesado).
- `line-height`: Define a altura da linha dentro de um elemento.
- `text-align`: Define o alinhamento do texto.
- `text-decoration`: Define a decoração do texto (underline, overline, line-through).
- `text-indent`: Define o recuo da primeira linha de texto.
- `text-transform`: Define a transformação do texto (maiúsculas, minúsculas).
- `letter-spacing`: Define o espaçamento entre caracteres.
- `word-spacing`: Define o espaçamento entre palavras.

### Propriedades de Fundo
- `background`: Define todas as propriedades de fundo em uma única declaração.
  - `background-color`: Define a cor de fundo.
  - `background-image`: Define uma imagem de fundo.
  - `background-repeat`: Define como a imagem de fundo se repete.
  - `background-position`: Define a posição inicial da imagem de fundo.
  - `background-size`: Define o tamanho da imagem de fundo.
- `box-shadow`: Define a sombra ao redor de um elemento.
- `border`: Define todas as propriedades de borda em uma única declaração.
  - `border-width`: Define a largura da borda.
  - `border-style`: Define o estilo da borda (solid, dotted, dashed, etc.).
  - `border-color`: Define a cor da borda.
- `border-radius`: Define o raio da borda para criar cantos arredondados.

### Propriedades de Layout
- `width`: Define a largura do elemento.
- `height`: Define a altura do elemento.
- `margin`: Define as margens ao redor do elemento.
  - `margin-top`, `margin-right`, `margin-bottom`, `margin-left`: Define margens individuais.
- `padding`: Define o preenchimento interno do elemento.
  - `padding-top`, `padding-right`, `padding-bottom`, `padding-left`: Define preenchimento individual.
- `display`: Define como um elemento deve ser exibido (block, inline, flex, etc.).
- `position`: Define o método de posicionamento do elemento (static, relative, absolute, fixed).
  - `top`, `right`, `bottom`, `left`: Define a posição do elemento em relação ao elemento pai ou à janela de visualização.
- `float`: Define se um elemento deve flutuar à esquerda ou à direita.
- `clear`: Define como os elementos devem se comportar ao lado de elementos flutuantes.
- `overflow`: Define o comportamento de conteúdo que transborda os limites do elemento.
- `visibility`: Define a visibilidade de um elemento.

### Propriedades de Cores e Opacidade
- `opacity`: Define a opacidade de um elemento (0.0 a 1.0).
- `color`: Define a cor do texto.
- `background-color`: Define a cor de fundo.
- `border-color`: Define a cor da borda.

### Propriedades de Listas
- `list-style`: Define todas as propriedades de lista em uma única declaração.
  - `list-style-type`: Define o tipo de marcador da lista (disc, circle, square, decimal, etc.).
  - `list-style-image`: Define uma imagem como marcador da lista.
  - `list-style-position`: Define a posição do marcador da lista (inside ou outside).

### Propriedades de Tabelas
- `table-layout`: Define o algoritmo de layout da tabela (auto, fixed).
- `border-collapse`: Define se as bordas das células de tabela devem ser colapsadas em uma única borda ou não.
- `border-spacing`: Define o espaçamento entre as células de tabela.
- `caption-side`: Define o lado da tabela em que a legenda deve ser posicionada.
- `empty-cells`: Define como as células de tabela com conteúdo vazio devem ser tratadas.

### Propriedades de Animação e Transição
- `animation`: Define todas as propriedades de animação em uma única declaração.
  - `animation-name`: Define o nome da animação definido por `@keyframes`.
  - `animation-duration`: Define a duração da animação.
  - `animation-timing-function`: Define a função de temporização da animação (linear, ease, ease-in, ease-out, ease-in-out, etc.).
  - `animation-delay`: Define o atraso antes que a animação comece.
  - `animation-iteration-count`: Define o número de vezes que a animação deve ser reproduzida.
  - `animation-direction`: Define a direção da animação (normal, reverse, alternate, alternate-reverse).
  - `animation-fill-mode`: Define como os estilos devem ser aplicados antes e depois da animação.
- `transition`: Define todas as propriedades de transição em uma única declaração.
  - `transition-property`: Define as propriedades que serão animadas.
  - `transition-duration`: Define a duração da transição.
  - `transition-timing-function`: Define a função de temporização da transição.
  - `transition-delay`: Define o atraso antes que a transição comece.

### Propriedades de Flexbox e Grid
- Propriedades relacionadas ao layout flexível (`display: flex`, `flex-direction`, `justify-content`, `align-items`, etc.).
- Propriedades relacionadas ao layout de grade (`display: grid`, `grid-template-columns`, `grid-template-rows`, `grid-gap`, etc.).

### Outras Propriedades
- `cursor`: Define o tipo de cursor ao passar sobre um elemento.
- `outline`: Define uma linha de contorno ao redor de um elemento.
- `pointer-events`: Define como o elemento responde aos eventos do mouse.
- `user-select`: Define se o texto pode ser selecionado pelo usuário.
- `resize`: Define se um elemento pode ser redimensionado pelo usuário.



## Ufa... terminamos a teoria! Vamos brincar agora, hehehe 😎
## Vamos fazer alguns projetos 🚀

