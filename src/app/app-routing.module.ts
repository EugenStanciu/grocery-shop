import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sales', component: SalesComponent, canActivate: [AuthGuard] },
  { path: 'new-product', component: NewProductComponent },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
