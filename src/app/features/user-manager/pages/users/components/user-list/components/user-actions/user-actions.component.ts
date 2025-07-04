import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-actions',
  imports: [CommonModule],
  templateUrl: './user-actions.component.html',
})
export class UserActionsComponent {
  @Input() user!: { name: string; email: string };

  deleteUser() {
    alert(`کاربر ${this.user.name} حذف شد`);
  }
}
