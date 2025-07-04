import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
})
export class UserCardComponent {
  @Input() user: { name: string; email: string } = { name: '', email: '' };
}
