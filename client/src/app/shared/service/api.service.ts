import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiPath } from './API';
import { catchError, map, Observable, tap } from 'rxjs';
import { ClientsData } from '../interface/clientData';
import { Certificate } from '../interface/certicates';
import { MyCookieService } from './my-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private myCookies: MyCookieService,) { }

  getLocalisationAndSave() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(ApiPath.ipApi).subscribe(
        (response) => {

          var formData = {
            ip: response.ip, city: response.city, country_name: response.country_name,
            latitude: response.latitude, longitude: response.longitude
          }
          this.http.post<any>(ApiPath.start, formData).subscribe(
            (respons) => {
              resolve(respons);
            },
            (error) => {
              console.log("request error: ", error)
              reject(error);
            })
        },
        (error) => {
          reject(error);
        }
      );
    })
  }

  getDataForClient() {
    if (this.myCookies.getToken("token")) this.getLocalisationAndSave();
    return this.http.get<any>(ApiPath.start);
  }

  isLoggedinApi(): Observable<boolean> {
    return this.http.get(ApiPath.administration).pipe(
      map((res: any) => {
        return true;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  signinApi(formData: any): Observable<any> {
    return this.http.post<Observable<any>>(ApiPath.signin, formData).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error) => {
        throw error;
      })
    )
  }

  getDataApi(page?: Number, pageSize?: Number) {
    return this.http.get<ClientsData | null>(`${ApiPath.administrationGetData}?page=${page}&pageSize=${pageSize}`)
      .pipe(tap((clientsDAta: ClientsData | null) => {
        return clientsDAta;
      }))
  }

  uploadFile(file: any) {
    return this.http.post<string>(ApiPath.uploadFile, { file: file })
      .pipe(map((data: any) => {
        return ApiPath.awsFile + data.url;
      }))
  }

  delletFile(file: string) {
    return this.http.delete(`${ApiPath.uploadFile}/?file=${file}`)
  }

  submitCertficate(body: Certificate) {
    return this.http.post<any>(ApiPath.certificate, body)
  }

  getCertificate() {
    return this.http.get<Certificate[] | null>(ApiPath.certificate);
  }

  deletCertificate(id: string) {
    console.log('requset delet run: ', id);
    return this.http.delete(`${ApiPath.certificate}/?id=${id}`);

  }

}
