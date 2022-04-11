import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLcycleComponent } from './parent-lcycle.component';

describe('ParentLcycleComponent', () => {
  let component: ParentLcycleComponent;
  let fixture: ComponentFixture<ParentLcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLcycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
