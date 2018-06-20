import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Employees'
    },
    children: [
      {
        path: '',
        component: ListComponent,
        // data: {
        //   title: 'Employees List'
        // }
      },
      { path: "add", component: AddComponent },
      { path: "edit/:id", component: EditComponent },
      { path: "show/:id", component: ShowComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
