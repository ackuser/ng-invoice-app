import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceRowComponent } from './invoice-row.component';

describe('InvoiceRowComponent', () => {
  let component: InvoiceRowComponent;
  let fixture: ComponentFixture<InvoiceRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
