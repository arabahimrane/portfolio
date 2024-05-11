import { Injectable } from '@angular/core';
import { BehaviorSubject, } from 'rxjs';
import { Certificate } from 'src/app/shared/interface/certicates';

@Injectable({
  providedIn: 'root'
})
export class GetCertificatesService {

  public certificates$: BehaviorSubject<Certificate[] | []> = new BehaviorSubject<Certificate[] | []>([]);
  
}
