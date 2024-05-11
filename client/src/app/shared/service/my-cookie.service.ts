import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class MyCookieService {
  constructor(private cookieService: CookieService) { }


  public delletCookie(id: string): void {
    // return this.cookieService.delete(id);
  }

  public getToken(id: string): string {
     return this.cookieService.get(id);
  }

  public getAll() {
    return this.cookieService.getAll();
  }

  public insertToken(id: string, value: string, expires?: number, path?: string ) {
    return this.cookieService.set(id, value, expires, path);
  }

  public updateCookie(id: string, value: string) {
    return this.cookieService.set(id, value);
  }

}
