import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { IEmployee } from "../../shared/interface";
import { ADMIN_DB } from "../../shared/mock-list";


@Injectable()
export class AuthService {
    private redirectUrl: string = '/dashboard';
    private loginUrl: string = '/login';
    private isLoggedIn: boolean = false;
    private loggedInUser: IEmployee;
    onLoginSuccess: any;
    getAllUsers(): Observable<IEmployee[]> {
        return  Observable.of(ADMIN_DB);
    }

    isUserAuthenticated(email: string, password: string): Observable<boolean> {
        return this.getAllUsers()
        .map(users => {
            let user = users.find(user => (user.email === email) && 
            (user.password === password));
            if(user) {
                this.isLoggedIn = true;
                this.loggedInUser = user;
            }else {
                this.isLoggedIn = false;
            }
            return this.isLoggedIn;
        });
    }

    isUserLoggedIn(): boolean {
        return this.isLoggedIn;
    }
    getRedirectUrl(): string {
        return this.redirectUrl;
    }
    setRedirectUrl(url: string): void {
        this.redirectUrl = url;
    }
    getLoginUrl(): string {
        return this.loginUrl;
    }
    getLoggedInUser(): IEmployee {
        return this.loggedInUser;
    }
    logoutUser(): void {
        this.isLoggedIn = false;
    }
}
