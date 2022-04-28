//solid
//principios de boas praticas  de programação
// S -SRP-single Responsability Principle
// principio de uma função unica

// conjuto de principios de boas praticas


//Funções bem escritas devem ser mantidas simples, curtas e realizando um unico objetivo 

//quando precisamos acessar uma função em outro arquivo é necessário exporta-la.

//CRUD -Create Read Upadete Delete
export function addTask(){
    alert("Cadastrando uma nova tarefa");
}
export function removeTask(){
    alert("Removendo uma tarefa");
}
export function updateTask(){
    alert("listando uma tarefa");
}
export function getAllTask(){
    alert("Listando uma tarefa");
}
export function getTaskById(){
    alert("Exibindo uma tarefa");
}

//quando for importat do arquivo domFuntions, o Java Script não sabe quantas funções estão disponíveis 
//Quando precisamos extrair qualquer recurso, usamos a desestruturação. Destructuring
//import { addTask} from './domFunctions.js';
