import { Injectable } from '@angular/core';


import { Visites } from 'src/app/shared/interface/dataVisites';
import { Device } from 'src/app/shared/interface/device';
import { BehaviorSubject, tap } from 'rxjs';
import { ApiService } from 'src/app/shared/service/api.service';
import { ClientsData } from 'src/app/shared/interface/clientData';
import { Certificate } from 'src/app/shared/interface/certicates';


@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  deviceData!: Device[];

  constructor(private apiService: ApiService,) { }
  public visites$: BehaviorSubject<Visites[] | []> = new BehaviorSubject<Visites[] | []>([]);
  public clientData$: BehaviorSubject<ClientsData | null> = new BehaviorSubject<ClientsData | null>(null);
  public certificate$: BehaviorSubject<Certificate[] | null> = new BehaviorSubject<Certificate[] | null>(null);


  loadData(page?: number, pageSize?: number): void {
    !page ? page = 0 : page;
    !pageSize ? pageSize = 10 : pageSize;

    this.apiService.getDataApi(page, pageSize).pipe(
      tap((clientsData: ClientsData | null) => {
        const transformedData: Visites[] = [];

        clientsData!.clients!.forEach(item => {
          // Convertir la date en millisecondes
          const dateInMilliseconds = new Date(item.date).getTime();

          const index = transformedData.findIndex(visite => visite.date === dateInMilliseconds);

          if (index !== -1) {
            transformedData[index].value++;
          } else {
            transformedData.push({ date: dateInMilliseconds, value: 1 });
          }
        });

        // Mettez à jour les BehaviorSubjects
        this.visites$.next(transformedData);
        this.clientData$.next(clientsData);
      })
    ).subscribe();
  }

  getCertificate(): void {

    this.apiService.getCertificate().pipe(tap((certificate: Certificate[] | null) => {

      this.certificate$.next(certificate)
    })).subscribe()
  }

}