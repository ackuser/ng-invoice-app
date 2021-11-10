import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn5Component } from './btn5.component';

describe('Btn5Component', () => {
  let component: Btn5Component;
  let fixture: ComponentFixture<Btn5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Btn5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Btn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
