import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { IEmployee } from "../../shared/interface";
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'logout',
    templateUrl: 'logout.component.html'
})
export class LogoutComponent implements OnInit {
    invalidCredentialMsg: string;
    loggedInUser: IEmployee;
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loggedInUser = this.authService.getLoggedInUser();
    }
    logout() {
        this.authService.logoutUser();
        this.router.navigate([this.authService.getLoginUrl()]);
    }

}
