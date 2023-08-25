import { Injectable } from '@angular/core';
import {Task} from '../models/task.model'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class TaskManagementService {


  tasks: Task[] = [];
  taksObserver: BehaviorSubject<Task[]> = new BehaviorSubject(this.tasks);

	constructor() { }

  createTask(task: Task){
    this.tasks.unshift(task);
    this.taksObserver.next(this.tasks);
  }

  deleteTask(task: Task){
    let index = this.tasks.indexOf(task);
    if(index != -1){
      if(this.tasks.length == 1){
        this.tasks = []
      }else{
        this.tasks = this.tasks.splice(index,1);
      }
      this.taksObserver.next(this.tasks);
      return 'success';
    }
    return 'failure';
  }

  updateTaskState(task: Task){
    let index = this.tasks.indexOf(task)
    if(index != -1){
      this.tasks[index].status = 'Complete';
      this.taksObserver.next(this.tasks);
      return 'success';
    }
    return 'failure'
  }

}
