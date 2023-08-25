import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';
import { Task } from 'src/app/models/task.model';
import { TaskManagementService } from 'src/app/services/task-management.service';
import { nanoid } from 'nanoid';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  form: FormGroup;

  statusOptions = ['Pending', 'Complete'];

  constructor(private fb: FormBuilder, private navigationService: NavigationService, private taskManagementService: TaskManagementService) {
    this.form = this.fb.group({
      id: [nanoid(), Validators.required],
      name: ['', Validators.required],
      description: ['',Validators.maxLength(250)],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['Pending']
    });
  }

  submitForm() {
    if (this.form.valid) {
      let tempTask: Task = this.form.value;
      this.taskManagementService.createTask(tempTask);
      this.navigationService.navigateToHome();
    }
  }

  goBack(){
    this.navigationService.navigateToHome()
  }
}

