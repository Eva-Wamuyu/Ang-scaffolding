import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAngRoutingComponent } from './header-ang-routing.component';

describe('HeaderAngRoutingComponent', () => {
  let component: HeaderAngRoutingComponent;
  let fixture: ComponentFixture<HeaderAngRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAngRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAngRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
