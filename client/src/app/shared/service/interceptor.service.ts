import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MyCookieService } from './my-cookie.service';
import { ApiPath } from './API';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {
  token?: string;
  constructor(private myCookieService: MyCookieService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = this.myCookieService.getToken('token');
    
    const reqClone = req.clone({ headers: req.headers.append('Authorization', token) });
    
    return next.handle(reqClone).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        if (event.url != ApiPath.ipApi) {
          token != event.headers.get('Authorization') ?
            this.myCookieService.insertToken('token', event.headers.get('Authorization')!) : null;
        }
      }
    }));
  }
}
