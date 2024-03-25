import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Navigator_Interface } from 'src/app/interface/navigator';
import { SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  navigators: Navigator_Interface[] = [];
  isSidenavOpen: boolean = true;

  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // Initialisation de la barre latérale à fermée
    this.isSidenavOpen = true;
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


