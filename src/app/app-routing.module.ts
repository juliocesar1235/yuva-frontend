import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilContratistaComponent } from './perfil-contratista/perfil-contratista.component';
import { PerfilEmpleadoComponent } from './perfil-empleado/perfil-empleado.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
  {
    path: 'perfil-contratista',
    component: PerfilContratistaComponent
  },
  {
    path: 'perfil-empleado',
    component: PerfilEmpleadoComponent
  }
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
