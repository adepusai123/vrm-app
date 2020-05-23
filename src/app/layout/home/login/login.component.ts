import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.intializeLoginForm();
  }

  intializeLoginForm() {
    this.loginForm = this.fb.group({
      email: ['sai@gmail.com', [Validators.required, Validators.email]],
      password: ['12345', [Validators.required]]
    });
  }

  onSubmit() {
    const { value, valid } = this.loginForm;
    if (valid) {
      this.authService.loginUser(value).subscribe((res) => {
        if (res) {
          this.authService.updateUserLoginStatus(true);
          this.router.navigate(['/customers']);
        }
      }, (err) => console.log);
    }
  }

}
