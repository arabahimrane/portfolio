import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiPath } from 'src/app/shared/material/API';

import { SessionData } from 'src/app/interface/sessionData';
import { Visites } from 'src/app/interface/dataVisites';
import { Device } from 'src/app/interface/device';
import { ServeurData } from 'src/app/interface/data';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  sessionData!: SessionData[];
  visitesData!: Visites[];
  deviceData!: Device[];

  constructor(private http: HttpClient) { }

  loadData(): void {
    this.http.get<ServeurData>(ApiPath.adminStatistics).subscribe(data => {

      this.sessionData = data.sessionData;
      this.visitesData = data.visitesData;
      this.deviceData = data.deviceData;
      console.log('deviceData: ', this.deviceData);
      console.log('visitesData: ', this.visitesData);
      console.log('sessionData: ', this.sessionData);


    })
  }


  getSessionData(): SessionData[] {
    return this.sessionData;
  }

  getVisitesData(): Visites[] {
    return this.visitesData;
  }

  getDeviceData(): Device[] {
    return this.deviceData;
  }
}