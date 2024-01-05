import { Component } from '@angular/core';
import { Certificate } from 'src/app/interface/certicates';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  certificates: Certificate[] = [
    {
      path:'https://dyma.fr/certification/62be45d597502bae4dcc23ce/5d1bb9466ba4eb526fff6682',
      imagePath: '../../../assets/certification/flutter.jpg',
      title: 'Flutter'
    },
    {
      path:'https://dyma.fr/certification/63474b8e0fed8a5623043841/5c69b1d1606df31e473253d8',
      imagePath: '../../../assets/certification/nodejs.jpg',
      title: 'Nodejs'
    },
    {
      path:'https://dyma.fr/certification/653fea394b2c7c414f4b3226/5ec44a260e320871af33ecaa',
      imagePath: '../../../assets/certification/typescript.jpg',
      title: 'Typescript'
    }
  ]

}
