import { Injectable } from "@angular/core";
import { ADMIN_DB } from "./mock-list";
import { IEmployee } from "./interface";
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
// import { of } from "rxjs/observable/of";
// import { of } from 'rxjs';

@Injectable()
export class EmployeeService {

    constructor() { }

    getEmployees(): Observable<IEmployee[]> {
        return Observable.of(ADMIN_DB);
    }

    //get single data from database to component
    getEmployee(id: number): Observable<IEmployee> {
        return Observable.of(ADMIN_DB.find(x => x.id === id));

    }

    register(user: any) {
        let max = Math.max(...ADMIN_DB.map(x => x.id));
        user.id = max + 1;
        ADMIN_DB.push(user);
        return ADMIN_DB;
    }
}