import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeesRoutingModule } from "./employees-routing.module";
import { ShowComponent } from "./show/show.component";
import { EmpService } from "./shared/emp.service";
import { ListComponent } from "./list/list.component";
import { EditComponent } from "./edit/edit.component";
import { AddComponent } from "./add/add.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    ShowComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  providers: [EmpService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class EmployeesModule { }
