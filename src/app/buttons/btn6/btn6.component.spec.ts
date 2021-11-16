import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn6Component } from './btn6.component';

describe('Btn6Component', () => {
  let component: Btn6Component;
  let fixture: ComponentFixture<Btn6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Btn6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Btn6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
