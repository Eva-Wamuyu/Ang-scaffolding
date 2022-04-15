import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAngRoutingComponent } from './contact-ang-routing.component';

describe('ContactAngRoutingComponent', () => {
  let component: ContactAngRoutingComponent;
  let fixture: ComponentFixture<ContactAngRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAngRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAngRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
