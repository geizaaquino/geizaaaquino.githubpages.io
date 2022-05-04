
//Função nominal com parametros obrigatorio
//undefined é um tipo de valor que não existe
//null é um tipo de valor inválido.

//uma função return é uma subrotina

function escreve(nome, sobrenome){
    const a = sobrenome;
    if (a=== undefined){
        console.log("a é nulo");
        console.log("Valor de a", a, "\n");
        console.log("valor de sobrenome", sobrenome, "\n");

    }
    console.log(`${nome} ${sobrenome}`);
}

escreve("Antonia");

//  função nominal que retorna valor.
function soma(a,b){
    return Number(a) + Number(b);
}
const resultado = soma(1,2);
console.log(soma(3,5));

//expressão de função  = uma função é atribuida a um contexto por exemplo uma variavel

const exibe = function (x){
    return `Exibindo parâmetro ${x}`;

};

// O JavaScript evolu a cada ano. Todo ano tem uma nova versão do JavaScript
//2012 - 15
//Não tinha muita restrição da forma de escrever JavaScript.
// para organizar e ficar mais restrito usa o "strict";
//2018  - Muitas mudanças  e algumas melhorisas ... o const  e o let foram adicionados nesta versão
//2018 - Os navegadores passaram  a implementar  o uso do strict

console.log(exibe("chocolate"));
//Onde o JavaScript esta dsendo executado? Qual o contexto?
//Xontexto: Navegador. This depende do contexto.
//no navegador o this  é a window

// mas se você estiver usando a versão escrita do javascript o this  não será a window
//this === windows -true
//this === windows - false
//use  strict  - this  é um undefined
// O this (este) é uma variavel interna para  apontar atributos e metodos dentro de um objeto ou classe.


function quemEoThis(){
    console.log(this === window);

}

//quando queremos usar o JavaScript na versão mais polida, o uso strict deve ser informado no inicio
"use strict";
function quemEoThisEscrito(){
    "use strict";
    console.log("strict");
    console.log(this=== window);


}

quemEoThis();
quemEoThisEscrito();

function Exibe2() {
    this.a = 50;
}

const novoObjeto = new Exibe2();
console.log(novoObjeto.a);

// quando criamos um objeto, criamos um escopo
// objeto global
let empresa = this;
// quando usamos o this dentro de um objeto, o this é o objeto
const aluno = {
    nome: 'Antonia',
    matricula: '123',
    executar: function(){
        return this.nome;

    },
};

console.log(aluno.executar());

//  estrito - this  é undefind
console.log("Quem é o this no contexto global", empresa);

//this dentro de uma função - também é um objeto global
function globalObj(){
   // "use strict"; //this vira undefined
    return this;
}
document.write("<h2>Escrevendo no Body</h2>");
document.write(globalObj());
//globalObj().alert("Vai Antonia");


//Arrow Function -função  de seta, ela é mais curta, não tem proprio contexto
const novaFuncao =()=> {
    console,log("Chamando de dentro de uma arrow function");
//Interpolação de variaveis  é chamar uma variavel dentro de uma string; Template String,
    console,log(`Exibindo o valor de ${a}`);
    //Concatenação de variaveis

    console,log("Exibindo o total de caracteres" + b.lenght);
//indentação é um código escrito de forma legível, que respeita hierarquia {da um espaço, para facilitar a leitura do codigo indentado é uma maneira de manter o codigo limpo}


};

const funcao3 = (a) =>
console.log(`Exibindo o total de caracteres de ${a.lenght}`);
funcao3("Antonia Geiza");

// novo JavaScript ES2017
//spread operator...

const carros = (primeiro, segundo, ...restante)=>{
    console.log(`Os carros informados foram:${primeiro}, ${segundo} - 
        ${restante[5]}.Todos os demais são${restante.join(", ")}`
    );

};

carros(
    "DelRey",
    "Brasilia",
    "Belina",
    "fusca",
    "Variante"
);

const frutas =["Guaraná", "Cupuaçu", "Açaí"];
const todasFrutas = [...frutas, "banana", "abacaxi"];

console.log("Todas as Frutas", todasFrutas);
//destructuring assigment
//Atribuição por desestruturação.

let a = 50;
let b = 100;

const[primeiro, segundo, terceiro, ...resto] = [a,b,, 200, 1000, 5000];
console.log("Exibindo o primeiro", primeiro);
console.log("Exibindo o resto", resto);

const meuArray = [10, 20, 30, 40 ];
console.log(meuArray, meuArray.join(","));

//const [ p, s, t, q] = meuArray;
const [q, ...p] = meuArray.reverse();
console.log(p.reverse());



