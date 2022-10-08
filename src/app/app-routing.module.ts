import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilContratistaComponent } from './perfil-contratista/perfil-contratista.component';

const routes: Routes = [
  {
    path: 'perfil-contratista',
    component: PerfilContratistaComponent
  }
];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
