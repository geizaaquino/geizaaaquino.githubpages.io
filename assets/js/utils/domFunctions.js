//solid
//principios de boas praticas  de programação
// S -SRP-single Responsability Principle
// principio de uma função unica

// conjuto de principios de boas praticas


//Funções bem escritas devem ser mantidas simples, curtas e realizando um unico objetivo 

//quando precisamos acessar uma função em outro arquivo é necessário exporta-la.

//CRUD -Create Read Upadete Delete
export function addTask(db, title=""){
   // criando uma nova tarefa
   const task = document.createElement("div");
   //const id = Number(db.length) + 1;
   task.classList.add('task');
   task.setAttribute('id',db.id);

   const taskBody =`
   <div><input type="checkbox" id="check_${db.id}"/></div>
                <div>
                <div><span class="title-task">${title?title:db.title}</span></div>
                
                
                </div>
                <div>Star</div>`;

    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);

}
export function removeTask(){
    alert("Removendo uma tarefa");
}
export function updateTask(){
    alert("listando uma tarefa");
}
export function getAllTasks(chocolate){
    chocolate.forEach((item) => {
        addTask(item);
        
        
    });

    
}
export function getTaskById(){
    alert("Exibindo uma tarefa");
}

//quando for importat do arquivo domFuntions, o Java Script não sabe quantas funções estão disponíveis 
//Quando precisamos extrair qualquer recurso, usamos a desestruturação. Destructuring
//import { addTask} from './domFunctions.js';
