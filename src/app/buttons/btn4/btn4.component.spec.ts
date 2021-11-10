import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn4Component } from './btn4.component';

describe('Btn4Component', () => {
  let component: Btn4Component;
  let fixture: ComponentFixture<Btn4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Btn4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Btn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
