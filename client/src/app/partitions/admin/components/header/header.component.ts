import { Component } from '@angular/core';
import { Navigator_Interface } from 'src/app/shared/interface/navigator';
import { SidebarService } from '../../service/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  firstname: string = "Imrane";
  lastname: string | undefined;
  logoString: string | undefined = "Ar";
  navigators: Navigator_Interface[] = [];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.navigators = [{ path: "./", name: "Home" }, { path: "./certificates", name: "Certificate" }];

    this.sidebarService.setNavigators(this.navigators);
  }

  toggleSidenav() {
    this.sidebarService.toggleSidenav();
  }


}
