import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthComponent } from './auth.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
