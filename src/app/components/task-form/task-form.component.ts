import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    task= {
      title:"",
      description:""
    }

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTask(title:HTMLInputElement, description:HTMLInputElement){
    this.taskService.addTask({
      title:title.value,
      description:description.value,
      hide:true
    })
   
    title.focus();
    title.value=""
    description.value=""
    return false;
  }

 
}
