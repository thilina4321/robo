import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PatientsDataComponent } from './auth/patients-data/patients-data.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  {path:'signup', component:AuthComponent},
  {path:'reg-patients', component:PatientsDataComponent},
  {path:'patients', component:PatientsComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
