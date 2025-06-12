import {Injectable, signal} from '@angular/core';
import {Task} from '../models/task.model';

@Injectable({providedIn: 'root'})
export class TaskService {
  private tasks = signal<Task[]>([
    { id: 1, title: 'نوشتن مستندات' },
    { id: 2, title: 'پیاده‌سازی API' }
  ]);
  getTasks(){
    return this.tasks?.asReadonly()??[];
  }
  addTask(title: string) {
    const newTask: Task = { id: Date.now(), title };
    this.tasks.update(t => [...t, newTask]);
  }
  deleteTask(id: number) {
    this.tasks.update(t=>t.filter((i) => i.id !== id));
  }
}
