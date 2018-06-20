import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmpService } from '../shared/emp.service';
@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private _empService: EmpService,
    private router: Router
  ) { }
  employees: any;
  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this._empService
      .getEmployees()
      .subscribe(employees => {
        this.employees = employees;
      })
  }
  deleteEmployee(id) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      this._empService
        .deleteEmployee(id)
        .subscribe(() => {
          this.getEmployees();
        })
    }

  }

}
