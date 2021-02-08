import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TabMenuModule,
    MenubarModule,
    RouterModule,
    ButtonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
