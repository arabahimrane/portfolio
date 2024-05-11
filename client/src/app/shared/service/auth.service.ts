import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { ApiPath } from './API';
import { loginData } from '../interface/login';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private apiService: ApiService, private cookieService: CookieService, private http: HttpClient) { }

  signin(formData: loginData): Observable<any> {
    return new Observable<any>((observer) => {
      this.apiService.signinApi(formData).subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (error) => {
          observer.error(error); // Émettre l'erreur
        }
      )
    })
  }

  public signout() {
    try {
      this.cookieService.delete('adminToken');
      window.location.href = '../';
    } catch (error) {
      console.log(error);
    }
  }

  isLoggedIn(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.apiService.isLoggedinApi().subscribe(
        (loggedIn) => {
          observer.next(loggedIn); // Émettre la valeur de loggedIn
          observer.complete(); // Terminer l'observable
        },
        (error) => {
          observer.error(error); // Émettre l'erreur
        }
      );
    });
  }

}
