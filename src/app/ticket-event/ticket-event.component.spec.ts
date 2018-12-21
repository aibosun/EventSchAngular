import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEventComponent } from './ticket-event.component';

describe('TicketEventComponent', () => {
  let component: TicketEventComponent;
  let fixture: ComponentFixture<TicketEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
