import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../auth/auth.service';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  user: string;
  constructor(
    private stateService: StateService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.stateService.user.subscribe((user) => {
      this.user = user;
    });
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: 'home',
      },
      {
        label: 'Sales',
        icon: 'pi pi-fw pi-calendar',
        routerLink: 'sales',
      },
      {
        label: 'Add new product',
        icon: 'pi pi-fw pi-pencil',
        routerLink: 'new-product',
      },
    ];
  }

  logout() {
    this.authService.logout();
  }
}
