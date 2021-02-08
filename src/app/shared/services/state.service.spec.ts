import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StateService } from './state.service';
import { MessageService } from 'primeng/api';

describe('StateService', () => {
  let service: StateService;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessageService],
    });
    service = TestBed.inject(StateService);
    messageService = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
