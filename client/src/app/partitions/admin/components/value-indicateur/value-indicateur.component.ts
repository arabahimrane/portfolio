import { Component, Input } from '@angular/core';
import { AgChartOptions } from "ag-charts-community";

@Component({
  selector: 'value-indicateur',
  templateUrl: './value-indicateur.component.html',
  styleUrls: ['./value-indicateur.component.css']
})
export class ValueIndicateurComponent {
  @Input() options!: AgChartOptions;

  constructor() {


  }
}
