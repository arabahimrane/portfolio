import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiPath } from './API';
import { loginData } from '../interface/login';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { MyCookieService } from './my-cookie.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private apiService: ApiService, private myCookieService: MyCookieService, private http: HttpClient) { }

  signin(formData: loginData): Observable<any> {
    return new Observable<any>((observer) => {
      this.apiService.signinApi(formData).subscribe(
        (res) => {
          console.log('res: ', res.token);
          this.myCookieService.insertToken('token', res.token);

          
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
      this.myCookieService.delletCookie('token');
      window.location.href = '../';
    } catch (error) {
      console.log(error);
    }
  }

  isLoggedIn(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.apiService.isLoggedinApi().subscribe(
        (loggedIn) => {
          console.log('loggedIn: service', loggedIn);
          
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
