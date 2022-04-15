import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAngRoutingComponent } from './main-ang-routing.component';

describe('MainAngRoutingComponent', () => {
  let component: MainAngRoutingComponent;
  let fixture: ComponentFixture<MainAngRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAngRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAngRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
