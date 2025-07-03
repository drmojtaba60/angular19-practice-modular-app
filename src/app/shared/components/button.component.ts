import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [CommonModule],
  template: `<button [ngClass]="className"><ng-content></ng-content></button>`
})
export class ButtonComponent {
  @Input() className = 'bg-blue-600 text-white px-4 py-2 rounded';
}
