import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from './service/auth-service/auth.service'
import { CookieService } from 'ngx-cookie-service';

import SecureStorage from  "secure-web-storage"
import CryptoJS from 'crypto-js'

import { environment }                          from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers : [AuthService]
})
export class AuthComponent implements OnInit {

  SECRET_KEY = 'secret_laravel';

  loginForm : FormGroup
  assets_url = environment.assets_url
  permissionData = null;
  cookieValue = null
  prefix              : String  = environment.prefix

  constructor(
              private router                        : Router,
              private fb                            : FormBuilder,
              private authService                   : AuthService) { }

  ngOnInit() {
    this.createForm()
    this.checkUserAuth()
  }

  private createForm(){
    this.loginForm = this.fb.group({
      email : [''],
      password : ['']
    })
  }

  public login() {
    const login = this.authService.attempLogin(this.loginForm.value)
                .toPromise()
                
    login.then((data) => {
    },error => {
      switch (error.status) {
        case 500:
          return 
          break;

        case 404:

          break;
      
        default:
          break;
      }
    })

    login.then((data) => {
      let user = {
        "id"          : data.id,
        "name"        : data.name,
        "email"       : data.email
      }
      
      let x = {
        "user" : user
      }

      localStorage.setItem('data', JSON.stringify(x))
      window.location.href = this.assets_url + 'dashboard';
    })
  }

  private checkUserAuth() {
    let data = localStorage.getItem('data');
    if(data) {
      this.router.navigate([this.prefix + '/dashboard'])
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  

}
