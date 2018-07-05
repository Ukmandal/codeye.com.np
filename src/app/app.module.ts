import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './views/shared/employee.service';
import { NotFoundComponent } from './views/not-found/not-found-.component';
import { ProfileComponent } from './views/profile/profile.component';
import { AuthService } from './views/authentication/services/auth.service';
import { AuthGuardService } from './views/authentication/services/auth-guard.service';
import { LoginComponent } from './views/authentication/login/login.component';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './views/authentication/register/register.component';
import { MatSnackBarModule, MatTableModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomerListComponent } from './views/customer/customer-list.component';
import { CustomerDetailComponent } from './views/customer/details/customer-detail.component';
import { SettingComponent } from './views/settings/setting.component';
import { ContactComponent } from './views/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    // NgbModule.forRoot(),
    ReactiveFormsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    RegisterComponent,
    NotFoundComponent,
    LoginComponent,
    SettingComponent,
    ProfileComponent,
    ContactComponent,
    CustomerListComponent,
    CustomerDetailComponent,  
  ],
  providers: [EmployeeService, AuthService, AuthGuardService
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
