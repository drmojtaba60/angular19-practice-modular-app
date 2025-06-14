// src/app/modules/admin/user-manager/user-manager.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TASK_MANAGER_ROUTES} from './task-manager.routes0';
import {TaskManagerRoutesModule, UserManagerRoutesAsStandAlon} from './task-manager.routes';

@NgModule({
  imports: [
    CommonModule,
    // UserManagerRoutesAsStandAlon,
    TaskManagerRoutesModule

  ]
})
export class UserManagerModule {}
