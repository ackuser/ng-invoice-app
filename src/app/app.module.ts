import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnBaseComponent } from './buttons/btn-base/btn-base.component';
import { Btn1Component } from './buttons/btn1/btn1.component';
import { Btn2Component } from './buttons/btn2/btn2.component';
import { Btn3Component } from './buttons/btn3/btn3.component';
import { Btn4Component } from './buttons/btn4/btn4.component';
import { Btn5Component } from './buttons/btn5/btn5.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnBaseComponent,
    Btn1Component,
    Btn2Component,
    Btn3Component,
    Btn4Component,
    Btn5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
