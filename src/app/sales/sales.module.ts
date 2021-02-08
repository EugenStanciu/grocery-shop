import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [SalesComponent],
  imports: [CommonModule, SharedModule],
  providers: [MessageService, ConfirmationService],
})
export class SalesModule {}
