import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PagesComponent } from './pages/form.component';
import { FormComponent } from './Pages/form/form.component';
import { ReportComponent } from './Pages/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],

  exports: [
    FormComponent,
    ReportComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
