import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PatientsDataComponent } from './auth/patients-data/patients-data.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'signup', component:AuthComponent},
  {path:'reg-patients', component:PatientsDataComponent},
  {path:'patients', component:PatientsComponent},
  {path:'login', component:LoginComponent},
  {path:'service', component:ServiceComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
