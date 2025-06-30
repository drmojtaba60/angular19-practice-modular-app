import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <h2>لیست وظایف</h2>

    <form (ngSubmit)="addTask()" class="form">
      <input [formControl]="taskTitle" placeholder="عنوان وظیفه" />
      <button type="submit">افزودن</button>
    </form>

    <ul>
      @for (task of tasks();track task.id) {
        {{ task.title }}
      <button (click)="deleteTask(task.id)">❌</button>
      }
    </ul>
  `,
  styles: [`
    .form {
      margin-bottom: 1rem;
    }
    input {
      margin-right: 0.5rem;
    }
  `]
})
export class TaskListComponent {
  private taskService = inject(TaskService);
  tasks = this.taskService.getTasks()??[];
  taskTitle = new FormControl('');

  addTask() {
    const title = this.taskTitle.value?.trim();
    if (title) {
      this.taskService.addTask(title);
      this.taskTitle.setValue('');
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
