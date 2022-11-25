import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
