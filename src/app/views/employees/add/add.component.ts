import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Employee } from '../shared/employee';
import { EmpService } from '../shared/emp.service';
@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  constructor(
    private empService: EmpService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Employee();
  addEmployee(){
      this.empService
        .addEmployee(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/employees']);
  }
}
