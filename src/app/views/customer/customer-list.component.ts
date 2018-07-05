import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/observable/range';
import { IEmployee } from '../shared/interface';
import { EmployeeService } from '../shared/employee.service';
import { AuthService } from '../authentication/services/auth.service';
import { ADMIN_DB } from '../shared/mock-list';

@Component({
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
//
displayedColumns: string[] = ['id', 'email', 'password', 'repeatPassword', 'userName'];
  dataSource = ADMIN_DB;
//
    employees: IEmployee[];
    selectedId: number;
    imageWidth: number = 60;
    showImage: boolean = true;
    loggedInUser: IEmployee;

    constructor(
        public employeeService: EmployeeService,
        private router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.employeeService.getEmployees()
            .subscribe(employees => {
                this.employees = employees;
                this.loggedInUser = this.authService.getLoggedInUser();
            });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onSelect(employee) {
        this.router.navigate(['/details', employee.id]);
        // this.selectedEmployeeId = employee.id;
    }

    onBack() {
        this.router.navigate(['dashboard']);
    }
}