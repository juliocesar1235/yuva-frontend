import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContractorProfileComponent } from './components/contractor-profile/contractor-profile.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { HistoryServiceComponent } from './components/history-service/history-service.component';
import { FavoriteServiceComponent } from './components/favorite-service/favorite-service.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupEmployeeComponent } from './components/signup-employee/signup-employee.component';
import { SignupContractorComponent } from './components/signup-contractor/signup-contractor.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContractorProfileComponent,
    EmployeeProfileComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ServiceDetailComponent,
    HistoryServiceComponent,
    FavoriteServiceComponent,
    ServiceCardComponent,
    ServiceListComponent,
    SignupEmployeeComponent,
    SignupContractorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
