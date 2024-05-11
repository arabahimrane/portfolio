import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgChartOptions } from "ag-charts-community";
import { Visites } from 'src/app/shared/interface/dataVisites';
import { Device } from 'src/app/shared/interface/device';
import { GetDataService } from '../../service/get-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'value-indicateur',
  templateUrl: './value-indicateur.component.html',
  styleUrls: ['./value-indicateur.component.css']
})

export class ValueIndicateurComponent implements OnInit, OnDestroy {
  options!: AgChartOptions[];
  dataVisites: Visites[] | undefined;
  dataDevice: Device[] | undefined;
  public subscription: Subscription = new Subscription();

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    var init: boolean = false;
    this.subscription.add(
      this.getDataService.visites$.subscribe((visites: Visites[] | []) => {
        this.dataVisites = visites;
        if (visites.length != 0 && !init) {
          this.updateChartOptions();
          init = true;
        }
      })
    )
  }

  ngAfterViewInit() {
  }

  updateChartOptions(): void {

    console.log("updateChartOptions: ", this.dataVisites);
    this.options = [{
      data: this.dataVisites,
      series: [
        {
          type: 'histogram',
          xKey: 'date',
          xName: 'jours',
          yKey: 'value',
          yName: 'nombre de vue',
          aggregation: "mean",
        }
      ],
      axes: [
        {
          type: 'number',
          position: 'bottom',
          title: { text: 'jour de la semaine' },
          tick: { interval: 2 }
        },
        {
          type: 'number',
          position: 'left',
          title: { text: 'nombre de vue' }
        }
      ]
    },
    {
      data: this.dataDevice,
      title: {
        text: "Type d'appareil",
      },
      series: [
        {
          type: "pie",
          angleKey: "value",
          calloutLabelKey: "type",
          sectorLabelKey: "value",
          sectorLabel: {
            color: "white",
            fontWeight: "bold",
            formatter: ({ value }) => `${(value)}`,
          },
        },
      ]
    }];

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}