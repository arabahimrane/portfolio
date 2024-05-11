import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';
import { SessionData } from 'src/app/shared/interface/sessionData';

@Component({
  selector: 'admin-token-table',
  templateUrl: './token-table.component.html',
  styleUrls: ['./token-table.component.css'],
})
export class TokenTableComponent implements OnInit {

  
  displayedColumns: string[] = ['ip', 'city', 'country_name', 'date'];
  sessionData!: SessionData[];
  
  constructor(public getDataService: GetDataService) {}
  // pageEvent: PageEvent;

  getPage(event: any) {
    console.log('event', event)
    this.getDataService.loadData(event.pageIndex, event.pageSize );

  }

  ngOnInit(): void {
    this.getDataService.loadData();
  }

  
}
