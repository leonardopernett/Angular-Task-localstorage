import { Injectable } from '@angular/core';
import {Task} from '../model/task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  tasks:Task[];

  constructor() { 
    this.tasks =[]
  }

 addTask(task){
   
   let tasks = []
   if(localStorage.getItem('tasks')== null){
     tasks.push(task)
     localStorage.setItem('tasks', JSON.stringify(tasks))
   }else{
     tasks = JSON.parse(localStorage.getItem('tasks'))
     tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
   }
   
   this.tasks.push(task)
 
 }

 getTasks(){
    if(localStorage.getItem('tasks')== null){
       return  this.tasks=[];
    }else { 
       return this.tasks =JSON.parse(localStorage.getItem('tasks'))
    }
   
 }

 deleteTask(task){
   this.tasks.splice(task.title , 1);
   localStorage.setItem('tasks', JSON.stringify(this.tasks))
 }


}
