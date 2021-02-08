import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { StateService } from '../shared/services/state.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: BehaviorSubject<any> | Observable<any>;
    this.isLoading = true;

    authObs = this.authService.login(email, password);

    if (authObs) {
      authObs.subscribe((resData) => {
        this.stateService.user.next(resData);
        this.isLoading = false;
        this.router.navigate(['/sales']);
      });
    } else {
      this.isLoading = false;
    }
  }
}
