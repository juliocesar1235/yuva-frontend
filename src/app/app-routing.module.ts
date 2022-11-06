import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ContractorProfileComponent } from './components/contractor-profile/contractor-profile.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { FavoriteServiceComponent } from './components/favorite-service/favorite-service.component';
import { ServiceListComponent } from './components/service-list/service-list.component';

const routes: Routes = [
  { path:'service-detail', component: ServiceDetailComponent },
  { path: 'services', component: ServiceListComponent },
  { path: 'profile/contractor', component: ContractorProfileComponent },
  { path: 'profile/employee', component: EmployeeProfileComponent },
  { path: 'profile/contractor/favorite', component: FavoriteServiceComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
