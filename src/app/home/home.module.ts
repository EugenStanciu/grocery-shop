import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CardModule, ButtonModule, RouterModule],
})
export class HomeModule {}
