import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAngRoutingComponent } from './about-ang-routing.component';

describe('AboutAngRoutingComponent', () => {
  let component: AboutAngRoutingComponent;
  let fixture: ComponentFixture<AboutAngRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAngRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAngRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
