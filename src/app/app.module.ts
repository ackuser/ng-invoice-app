import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnBaseComponent } from './buttons/btn-base/btn-base.component';
import { Btn1Component } from './buttons/btn1/btn1.component';
import { Btn2Component } from './buttons/btn2/btn2.component';
import { Btn3Component } from './buttons/btn3/btn3.component';
import { Btn4Component } from './buttons/btn4/btn4.component';
import { Btn5Component } from './buttons/btn5/btn5.component';
import { Btn6Component } from './buttons/btn6/btn6.component';
import { TextFieldFormComponent } from './text-field-form/text-field-form.component';
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component';
import { DatepickerFormComponent } from './datepicker-form/datepicker-form.component';
import { InvoiceRowComponent } from './invoice-row/invoice-row.component';
import { StatusInvoiceComponent } from './status-invoice/status-invoice.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { InvoicesComponent } from './invoices/invoices.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InvoiceMenuComponent } from './invoice-menu/invoice-menu.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    BtnBaseComponent,
    Btn1Component,
    Btn2Component,
    Btn3Component,
    Btn4Component,
    Btn5Component,
    Btn6Component,
    TextFieldFormComponent,
    DropdownFormComponent,
    DatepickerFormComponent,
    InvoiceRowComponent,
    StatusInvoiceComponent,
    InvoicesComponent,
    SidebarComponent,
    InvoiceMenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-ES',
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
