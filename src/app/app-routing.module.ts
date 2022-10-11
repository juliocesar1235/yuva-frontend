import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContractorProfileComponent } from './components/contractor-profile/contractor-profile.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'contractor-profile', component: ContractorProfileComponent },
  { path: 'employee-profile', component: EmployeeProfileComponent },

  { path: '', redirectTo: '/home', pathMatch: 'prefix' }
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
