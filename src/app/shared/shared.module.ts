import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { HttpClientModule } from '@angular/common/http';
import { StateService } from './services/state.service';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [NewProductFormComponent, ToastComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    CalendarModule,
    FormsModule,
  ],
  exports: [
    NewProductFormComponent,
    ToastComponent,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    CalendarModule,
    FormsModule,
  ],
  providers: [StateService],
})
export class SharedModule {}
