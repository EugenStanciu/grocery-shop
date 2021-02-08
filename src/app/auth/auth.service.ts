import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {}

  login(email: string, password: string): BehaviorSubject<any> {
    if (email === 'admin@admin' && password === 'administrator') {
      this.user.next('admin');
      return this.user;
    } else {
      this.handleError(new HttpErrorResponse({}));
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
  }

  private handleError(errorRes?: HttpErrorResponse) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error occurred',
      detail: 'Username or password incorect!',
    });

    return throwError(errorRes);
  }
}
