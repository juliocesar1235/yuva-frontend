import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilContratistaComponent } from './components/perfil-contratista/perfil-contratista.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilEmpleadoComponent } from './components/perfil-empleado/perfil-empleado.component';
import { ServicioHistorialComponent } from './components/servicio-historial/servicio-historial.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilContratistaComponent,
    PerfilEmpleadoComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServicioHistorialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
