import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AutoSizeTextareaDirective, ButtonComponent, CapitalizePipe} from '@app/shared';
import {formatDate} from '@app/utils';
import {StorageTool} from '@app/tools';

@Component({
  standalone: true,
  selector: 'app-user-list',
  imports: [RouterModule, ButtonComponent, ButtonComponent, CapitalizePipe, AutoSizeTextareaDirective, FormsModule, CapitalizePipe, CapitalizePipe, AutoSizeTextareaDirective],
  template: `
    <h3>📃 User List</h3>
    <h4>{{developerName??''| capitalize}}</h4>
    <div style="width: 100%">
    <textarea
      [(ngModel)]="text"
      appAutoSizeTextarea
    >
    </textarea>
    </div>

    <app-button>Test Custom button in Shared Module</app-button>
    <ul>
      <li><a routerLink="1">User 1</a></li>
      <li><a routerLink="2">User 2</a></li>
    </ul>

    <div>

    </div>
  `
})
export class UserListComponent {
  developerName?: string='mojtaba.shaghi';
  text: string='test textarea';
  date=formatDate(new Date());
  storageI=StorageTool.get("storageI");
}
