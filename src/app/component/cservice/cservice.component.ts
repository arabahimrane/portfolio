import { Component } from '@angular/core';
import { ServicesItem } from 'src/app/interface/serviceItem';


@Component({
  selector: 'app-cservice',
  templateUrl: './cservice.component.html',
  styleUrls: ['./cservice.component.css']
})
export class CserviceComponent {
  servicesItems: ServicesItem[] = [
    {
      icon: "bx bx-pie-chart-alt-2",
      numberPrject: 6,
      title: "Marketing",
    },
    {
      icon: "bx bx-code-alt",
      numberPrject: 6,
      title: "Costume Applicton",
    },
    {
      icon: "bx bxl-graphql",
      numberPrject: 6,
      title: "Business consulting",
    }
  ]

}
