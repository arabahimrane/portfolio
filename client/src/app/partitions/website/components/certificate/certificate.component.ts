import { Component } from '@angular/core';
import { Certificate } from 'src/app/shared/interface/certicates';
import { WebsiteService } from '../../service/website.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  constructor(public websiteService : WebsiteService){}
 
}
