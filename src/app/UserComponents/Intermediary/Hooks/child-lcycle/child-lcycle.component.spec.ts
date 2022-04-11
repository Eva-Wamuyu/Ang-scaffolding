import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLcycleComponent } from './child-lcycle.component';

describe('ChildLcycleComponent', () => {
  let component: ChildLcycleComponent;
  let fixture: ComponentFixture<ChildLcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLcycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
