import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SalesComponent } from './sales.component';
import { MessageService } from 'primeng/api';

describe('SalesComponent', () => {
  let component: SalesComponent;
  let fixture: ComponentFixture<SalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesComponent],
      imports: [HttpClientTestingModule],
      providers: [MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide productDialog on hideDialog', () => {
    component.productDialog = true;
    component.hideDialog();
    fixture.detectChanges();
    expect(component.productDialog).toBeFalsy();
  });

  it('should show productDialog on  openNew', () => {
    component.productDialog = false;
    component.openNew();
    fixture.detectChanges();
    expect(component.productDialog).toBeTruthy();
  });
});
