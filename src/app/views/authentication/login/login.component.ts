import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'login.component.html',
  styles: [`
    .form-control-password {
      position: relative;
      top: -29px;
      left: -4px;
      cursor: pointer;
  },
  `],
})
export class LoginComponent implements OnInit {
  password: boolean = false;
  loginForm: FormGroup;
  islogoutSuceeded: boolean;
  invalidCredentialMsg: string;


  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    });
  }

  togglePassword() {
    this.password = !this.password;
  }

  login() {
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    this.authService.isUserAuthenticated(email, password)
      .subscribe(
        authenticated => {
          if (authenticated) {
            let url = this.authService.getRedirectUrl();
            console.log('Redirected Url:' + url);
            this.router.navigate([url]);
          } else {
            this.invalidCredentialMsg = 'Invalid Credentials. Try Again.';
          }
        }
      );


    // let elements = this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    // if (!elements) return;
    // this.router.navigate(['/dashboard']);
    // console.log('loggedin Successfully!!');
  }
}


