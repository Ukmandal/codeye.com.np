import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

import { RegisterComponent } from './views/register/register.component';
import { SettingComponent } from './views/settings/setting.component';
import { ProfileComponent } from './views/profile/profile.component';
import { LoginComponent } from './views/authentication/login/login.component';
import { LogoutComponent } from './views/authentication/logout/logout.component';
import { ContactComponent } from './views/contact/contact.component';
import { NotFoundComponent } from './views/not-found/not-found-.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
        path: 'setting',
        component: SettingComponent,
        data: {
          title: 'Setting Page'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile Page'
        }
      },
      {
        path: 'logout',
        component: LogoutComponent,
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
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
