const Task=require('../models/Task');
const {saveData,getData}=require('../helpers/fileManager');
console.log(saveData);
class TaskRepository{

    _task=null;

    constructor(){
        const data=getData();
        if(data){
            this._task=data;

        }else{
            this._task=[];
        }
        
    }

    getAllTask(){
        return this._task;
    }
    getTaskDone(){

    }

    createTask(title){
        const task=new Task(title);
        this._task.push(task);
        saveData(this._task);
    }


    deleteTask(){

    }

    completeTask(){

    }

}
module.exports=TaskRepository;