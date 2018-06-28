import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/observable/range';
import { IEmployee } from '../shared/interface';
import { EmployeeService } from '../shared/employee.service';

@Component({
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
})
export class CustomerListComponent implements OnInit {

    employees: IEmployee[];
    selectedId: number;
    imageWidth: number = 60;
    showImage: boolean = true;

    constructor(
        public employeeService: EmployeeService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        // this.route.paramMap.subscribe((params: ParamMap) => {
        //     let id = parseInt(params.get('id'));
        //     this.selectedId = id;
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees);
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
