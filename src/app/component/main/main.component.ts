import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Navigator_Interface } from 'src/app/interface/navigator';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  navigators: Navigator_Interface[] = [];
  isSidenavOpen: boolean = true;

  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // Initialisation de la barre latérale à fermée
    this.isSidenavOpen = true;
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.sidebarService.toggleSidenav$.subscribe(() => {
      this.sidenav.toggle();
    });
    this.sidebarService.navigators$.subscribe((navigators) => {
      this.navigators = navigators;
    });
  }
  

}
