import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ContractorProfileComponent } from './components/contractor-profile/contractor-profile.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { FavoriteServiceComponent } from './components/favorite-service/favorite-service.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { RegisterComponent } from './components/register/register.component';
import { SignupEmployeeComponent } from './components/signup-employee/signup-employee.component';
import { SignupContractorComponent } from './components/signup-contractor/signup-contractor.component';
import { LoginComponent } from './components/login/login.component';
import { AllocationComponent } from './components/vista-servicio-contratar/vista-servicio-contratar.component';

const routes: Routes = [
  { path: 'service-detail', component: ServiceDetailComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'profile/contractor/favorite', component: FavoriteServiceComponent },
  { path: 'employee/signup', component: SignupEmployeeComponent },
  { path: 'contractor/signup', component: SignupContractorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/contractor/:id', component: ContractorProfileComponent },
  { path: 'profile/employee/:id', component: EmployeeProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirmService/:id', component: AllocationComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
