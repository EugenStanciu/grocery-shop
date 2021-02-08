import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { NewProductModule } from './new-product/new-product.module';
import { SharedModule } from './shared/shared.module';
import { AuthComponent } from './auth/auth.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    SalesModule,
    HomeModule,
    FormsModule,
    NewProductModule,
    SharedModule,
    ProgressSpinnerModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
