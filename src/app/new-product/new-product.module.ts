import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './new-product.component';
import { SharedModule } from './../shared/shared.module';
@NgModule({
  declarations: [NewProductComponent],
  imports: [CommonModule, SharedModule],
})
export class NewProductModule {}
