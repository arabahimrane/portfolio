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
      icon: "monitoring",
      numberPrject: 6,
      title: "Marketing",
    },
    {
      icon: "devices",
      numberPrject: 6,
      title: "Costume Applicton",
    },
    {
      icon: "tenancy",
      numberPrject: 6,
      title: "Business consulting",
    }
  ]

}
