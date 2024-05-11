import { Component, OnInit, Output } from '@angular/core';
import { Certificate } from 'src/app/shared/interface/certicates';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-card-certificate',
  templateUrl: './card-certificate.component.html',
  styleUrls: ['./card-certificate.component.css']
})
export class CardCertificateComponent implements OnInit {

  constructor(public getDataService: GetDataService) {}
  ngOnInit() {
    this.getDataService.getCertificate();
  }
  
}
