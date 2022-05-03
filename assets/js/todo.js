

//Banco de dados NoSQL - orientado a documentos. MongoDB, firebase, Cassandra

//Taref. Armazenar as tarefas em algum lugar. Por enquanto, Estamos armazenando  em memoria.
// usamos uma constante. Armazenamento em memoria voláril.
//Em localStorage e sessionStorag.

// NodeJs - MongoDB ou Firebase. Armazenamento em Banco de dados. Armazenamento Persistente.
// console.log(db[0].steps[2].step)
//objeto é um conjunto de atributos(ou propriedades) e metodos (ou funções ou ações)
//item: []
import { addTask, getAllTasks } from "./utils/domFunctions.js";
const db = [
    {
        id:1,
        title: 'Concluir App Conexão Arte',
        steps: [
    {step: "Ajustar textos"},
    {step: "Trocar imagem para imagens públicas"},
    {step: "Publicar no Expo"},
    {step: "Publicar no Expo Store Connect"},
    ],
        done:false,
        dueDate:'2022-05-06',
        reminder: '2022-05-02 10:00',
    },

    {
        id:2,       
        title: 'Aula 4 Fiap - Avanade',
        steps: [{step:"Atributos Globais"}, 
        {step: "Estrutura CSS"}],
        
        done:false,
        dueDate:'2022-05-06'
    
    },
];

getAllTasks(db);
//console.log(db[0].title);
//DOM - Document Object Model - é o Java Scrip acessando o HTML e manipulando ele.
//HTML ele é compilado pelo navegador  em uma arvore de comandos, chamado DOM.
//

const newTask = document.querySelector("#inputTxtNewTask");
const form = document.querySelector("#addNewTask");

//
form.addEventListener("submit", (e)=>{
    e.preventDefault();
});
newTask.addEventListener("keyup", (e) =>{
e.preventDefault();
e.stopPropagation();
if (e.key =="Enter"){

    // se newTask.value for ao contrario de true. Ou seja se for falso, se estiver vazio
    if(!newTask.value){
        alert("Digite uma nova tarefa, para adicionar");
    }else{
        //alert(newTask.value);
        //push inserir nova tarefa no array
        const d = new Date();
        const today = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        
        db.push({ id: Number(db.length) + 1, title: newTask.value, done: false, dueDate:today});

        document.querySelector(".tasks").innerHTML= "";
        getAllTasks(db);

        newTask.value = "";
        console.log(db);
    }
}
});

