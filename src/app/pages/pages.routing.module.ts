import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTableComponent } from './task-table/task-table.component';
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  {path: '', component: TaskTableComponent},
  {path: 'create', component: CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
