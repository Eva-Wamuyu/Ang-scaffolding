import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAngRoutingComponent } from './home-ang-routing.component';

describe('HomeAngRoutingComponent', () => {
  let component: HomeAngRoutingComponent;
  let fixture: ComponentFixture<HomeAngRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAngRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAngRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
