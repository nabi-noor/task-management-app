import { Component, OnInit } from '@angular/core';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { Task } from 'src/app/models/task.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'status', 'startDate', 'endDate', 'actions'];
  dataSource: Task[] = [];
  name: string = '';
  status: string = ''
  dataSourceCopy : Task[] = [];
  constructor(private taskManagementService: TaskManagementService, private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.taskManagementService.taksObserver.subscribe(res => {
      this.dataSource = res
      this.dataSourceCopy = res;
    })
  }

  createTask(){
    this.navigationService.navigateToCreateTask()
  }

  markTaskComplete(task:Task){
    const res = this.taskManagementService.updateTaskState(task);
    if(res == 'success')
      console.log('task updated');
    else
      console.log('task update failed');
  }

  deleteTask(task: Task){
    const res = this.taskManagementService.deleteTask(task);
    if(res == 'success')
      console.log('task deleted successfully');
    else
      console.log('failed to delete the task');
  }

  filterData(){
    this.dataSource = Object.assign(this.dataSourceCopy);
    this.dataSource = this.dataSource.filter(item => item.status == this.status);
  }


}
