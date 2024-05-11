import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Navigator_Interface } from 'src/app/shared/interface/navigator';
import { SidebarService } from './service/sidebar.service';
import { GetDataService } from './service/get-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  navigators: Navigator_Interface[] = [];
  isSidenavOpen!: boolean;

  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private getDataservice: GetDataService) {
  }

  ngOnInit() {
    this.isSidenavOpen = true;
    this.getDataservice.loadData();


  }

  ngAfterViewInit() {
    this.sidebarService.toggleSidenav$.subscribe(() => {
      this.sidenav.toggle();
    });
    this.sidebarService.navigators$.subscribe((navigators) => {
      this.navigators = navigators;
    });
    this.cdr.detectChanges();


  }

  toggleSidenav() {
    this.sidebarService.toggleSidenav();
  }
}
