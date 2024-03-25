import { ChangeDetectorRef, Component, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { Navigator_Interface } from 'src/app/interface/navigator';
import { SidebarService } from '../../service/sidebar.service';
import { AgChartOptions } from "ag-charts-community";
import { Visites } from 'src/app/interface/dataVisites';
import { Device } from 'src/app/interface/device';

@Component({
  selector: 'admin-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Output() options!: AgChartOptions[];

  dataVisites: Visites[] | undefined;
  dataDevice: Device[] | undefined;

  constructor(private titleService: Title,) { }

  ngOnInit() {
    this.titleService.setTitle("Admin Dashboard");
    // Initialisation de la barre latérale à fermée

    this.dataDevice = [];
    this.dataVisites = [];
    this.options = [{
      data: this.dataVisites,
      series: [
        {
          type: 'histogram',
          xKey: 'date', // Numeric attribute for X-axis
          xName: 'jours',
          yKey: 'value', // Numeric attribute for Y-axis
          yName: 'numbre de vue',
          aggregation: "mean",
        }
      ],
      axes: [
        {
          type: 'number',
          position: 'bottom',
          title: { text: 'jour de la semain' },
          tick: { interval: 2 }
        },
        {
          type: 'number',
          position: 'left',
          title: { text: 'numbre de vue' }
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

    }]
  }

}
