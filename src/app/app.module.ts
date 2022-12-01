import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RegisterComponent } from './components/register/register.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { FooterForRegisterComponent } from './components/footer-for-register/footer-for-register.component';
import { SignupEmployeeComponent } from './components/signup-employee/signup-employee.component';
import { SignupContractorComponent } from './components/signup-contractor/signup-contractor.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { GoogleSigninComponent } from './components/google-signin/google-signin.component';
import { environment } from '../environments/environment';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
])
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
    RegisterComponent,
    TextBoxComponent,
    FooterForRegisterComponent,
    SignupEmployeeComponent,
    SignupContractorComponent,
    LoginComponent,
    GoogleSigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(environment.googleProvider),
        },
      ],
    } as SocialAuthServiceConfig,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
