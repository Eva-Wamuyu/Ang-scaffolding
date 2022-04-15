import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBasicComponent } from './main-basic.component';

describe('MainBasicComponent', () => {
  let component: MainBasicComponent;
  let fixture: ComponentFixture<MainBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
