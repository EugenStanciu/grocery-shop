import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewProductFormComponent } from './new-product-form.component';
import { MessageService } from 'primeng/api';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { StateService } from './../services/state.service';

describe('NewProductFormComponent', () => {
  let component: NewProductFormComponent;
  let fixture: ComponentFixture<NewProductFormComponent>;
  let stateService: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewProductFormComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [MessageService, StateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
