import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './Pages/form/form.component';
import { ReportComponent } from './Pages/report/report.component';

const routes: Routes = [
  // { path: '', redirectTo: "form"},
  { path: '', component: FormComponent },
  {path: 'report', component: ReportComponent },
  // {path: '**', redirectTo: "form"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
   

}
