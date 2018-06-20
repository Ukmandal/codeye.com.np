import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { ChangeDetectorRef, OnInit, Component } from "@angular/core";
import { EmployeeService } from "../shared/employee.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'register.component.html',
  styles: [`
    .form-control-password {
      position: relative;
      top: -27px;
      left: -4px;
      cursor: pointer;
  },
  .button {
    cursor:pointer;
  }
    `],
})
export class RegisterComponent implements OnInit {

  password: boolean = false;
  registerForm: FormGroup;
  fileToUpload: File = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: EmployeeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      id: [0],
      userName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    });
  }

  togglePassword() {
    this.password = !this.password;
  }

  imageUpload(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [imageUrl] = event.target.files;
      reader.readAsDataURL(imageUrl);

      reader.onload = () => {
        this.registerForm.patchValue({
          imageUrl: reader.result
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }


  register() {
    this.adminService.register(this.registerForm.value);
    this.router.navigate(['/login']);
    console.log('registered Successfully!!');
    // let snackBarRef = this.snackBar.open('Registerd Successfully!',
    //     'Got it!', {
    //         duration: 3000,
    //         verticalPosition: 'top',
    //         horizontalPosition: 'right',
    //     });
  }

  cancel() {
    this.router.navigate(['/register']);
  }
}
