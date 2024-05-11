import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Certificate } from 'src/app/shared/interface/certicates';
import { ApiService } from 'src/app/shared/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private apiService: ApiService) { }

  public certificates$: BehaviorSubject<Certificate[] | null> = new BehaviorSubject<Certificate[] | null>([]);

  public start() {
    this.apiService.getDataForClient().pipe(tap((data) => {
    
      console.log("start: ", data.certificate);
      
      this.certificates$.next(data.certificate);

    })).subscribe()
  }
}
