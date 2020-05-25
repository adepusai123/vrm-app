import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/services/utils.service';

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
    private router: Router,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.intializeLoginForm();
  }

  intializeLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const { value, valid } = this.loginForm;
    if (valid) {
      this.authService.loginUser(value).subscribe((res: any) => {
        if (res) {
          const token = res.token || this.utilsService.getUUID();
          this.utilsService.setToken('authToken', token);
          this.authService.loginSuccess();
          this.authService.isAuthencated();
          this.router.navigate(['/customers']);
        }
      }, (err) => console.log);
    }
  }

}
