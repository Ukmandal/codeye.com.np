import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './views/authentication/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found-.component';
import { RegisterComponent } from './views/authentication/register/register.component';
import { CustomerListComponent } from './views/customer/customer-list.component';
import { CustomerDetailComponent } from './views/customer/details/customer-detail.component';
import { ContactComponent } from './views/customer/details/contact/contact.component';
import { SettingComponent } from './views/customer/details/settings/setting.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'customer',
        component: CustomerListComponent,
        data: {
          title: 'Customer Page'
        }
      },
      {
        path: 'details/:id',
        component: CustomerDetailComponent,
        data: {
          title: 'Details Page'
        },
        children: [
          {
            path: 'setting',
            component: SettingComponent,
            data: {
              title: 'Setting Page'
            }
          },
          {
            path: 'contact',
            component: ContactComponent,
            data: {
              title: 'Contact Page'
            }
          },
        ]
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      },
      { path: '**', component: NotFoundComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
