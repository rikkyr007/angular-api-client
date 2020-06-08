import { Injectable }       from '@angular/core';

// Service
import { ApiService }       from '../../../shared/services/api.service';

// Dependency Injection RxJs
import { Observable }       from 'rxjs';
import { map }              from 'rxjs/operators';
import { Auth }             from '../../auth';

import SecureStorage        from  "secure-web-storage"
import CryptoJS             from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  b = null

  constructor(
      private apiService : ApiService
      ){}

  attempLogin(data): Observable<Auth> {
    let user = {
      "email" : data.email,
      "password" : data.password
    }
    return this.apiService.post("/login", user)
                    .pipe(map(data => data))
  }

  loggedIn() {
    this.b = localStorage.getItem('data');
    
    if(this.b != null) {
      if(this.b) return true;
      
      return false;
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('data')
  }
  
}
