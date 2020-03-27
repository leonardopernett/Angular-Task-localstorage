import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../model/task';
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    
  }
   

   deleteTask(task){
    if( confirm('are you sure that delete it')){
      this.taskservice.deleteTask(task);
    }
   }
}
