import { Component } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';
import { SessionData } from 'src/app/interface/sessionData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'admin-token-table',
  templateUrl: './token-table.component.html',
  styleUrls: ['./token-table.component.css']
})
export class TokenTableComponent {
  sessionData!: SessionData[];
  displayedColumns: string[] = ['token', 'country', 'nVisites', 'visitePage'];
  public subscription: Subscription = new Subscription();

  constructor(private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.subscription.add();

    this.sessionData = this.getData.getSessionData();
  }
}
