import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/authentication/login/login.component';
// import { LogoutComponent } from './views/authentication/logout/logout.component';
import { NotFoundComponent } from './views/not-found/not-found-.component';
import { RegisterComponent } from './views/authentication/register/register.component';
import { CustomerListComponent } from './views/customer/customer-list.component';
import { CustomerDetailComponent } from './views/customer/details/customer-detail.component';
import { SettingComponent } from './views/settings/setting.component';
import { ContactComponent } from './views/contact/contact.component';

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
        path: 'employees',
        loadChildren: './views/employees/employees.module#EmployeesModule'
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
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile Page'
        }
      },
      // {
      //   path: 'logout',
      //   component: LogoutComponent,
      // },
      { path: '**', component: NotFoundComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
