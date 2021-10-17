const Task=require('../models/Task');
console.log(Task);
class TaskRepository{

    _task=null;

    constructor(){
        this._task=[];
    }

    getAllTask(){

    }
    getTaskDone(){

    }

    createTask(title){
        const task=new Task(title);
        this._task.push(task);
    }


    deleteTask(){

    }

    completeTask(){

    }

}