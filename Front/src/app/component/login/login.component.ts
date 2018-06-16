import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }
  ngOnInit() {
    if(this.localStorageService.get('canLogin')) {
      this.router.navigate(['main/dashboard']);

    }
}

save() {
  this.loginForm.controls['username'].markAsTouched();
  this.loginForm.controls['password'].markAsTouched();
  if (this.loginForm.valid) {
    this.loginService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(res => {
      this.localStorageService.set('canLogin', res);
      this.router.navigate(['main/dashboard']);
      console.log(res);
    });
  }
}

}