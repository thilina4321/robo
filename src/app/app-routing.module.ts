import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PatientsDataComponent } from './auth/patients-data/patients-data.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  {path:'', component:AuthComponent},
  {path:'reg-patients', component:PatientsDataComponent},
  {path:'patients', component:PatientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
