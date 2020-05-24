import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.intializeForm();
  }

  intializeForm() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.min(10)]],
      password: ['', [Validators.required, Validators.min(6)]],
      cPassword: ['', [Validators.required, Validators.min(6)]]
    }, { validator: this.checkPassword });
  }

  checkPassword(group: FormGroup) {
    const { password, cPassword } = group.value;
    return password === cPassword ? null : { misMatch: true }
  }

  onSubmit() {
    const { value, valid } = this.signupForm;
    if (valid) {
      this.authService.signup(value).subscribe((res) => {
        if (res) {
          console.log(res);
        }
      }, (err) => console.error);
    }
  }

}
