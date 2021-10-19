const {inquirerMenu,inquirerInput}=require('./helpers/inquirer');
const TaskRepository=require('./repositories/TaskRepository');
//creamos el objeto tarea sin parametros,xq el constructor no los pide
const taskRepository=new TaskRepository();

const main =async()=>{
    let option='';
    do{
        option =await inquirerMenu();
        switch (option) {
            case 1:
                
            //TODO hacer que el usuario pueda ingresar el nombre de la tarea para ello requerimos la funcion inquirerInput del helpers
            const title=await inquirerInput('Task Title');
            console.log(title);
           taskRepository.createTask(title);
            break;
        
            case 2:
                const list=await inquirerInput('Get Task');
                const allTask=taskRepository.getAllTask();
                console.log(allTask);
    
    
    
            default:
                break;
    
    
        }
    }while(option!==5);
 
}
main();