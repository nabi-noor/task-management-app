import { NgModule } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskTableComponent } from './task-table/task-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    CreateTaskComponent,
    TaskTableComponent
  ],
  imports: [
    MatChipsModule,
    CommonModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class PagesModule { }
