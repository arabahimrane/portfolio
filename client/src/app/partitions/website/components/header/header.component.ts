import { Component, } from '@angular/core';
import { Navigator_Interface } from 'src/app/interface/navigator';
import { SidebarService } from 'src/app/partitions/website/service/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  firstname: string = "Imrane";
  lastname: string | undefined;
  logoString: string | undefined = "Ar";
  navigators: Navigator_Interface[] = [
    { name: 'Home', path: '#header' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Skills', path: '#skill' },
    { name: 'Certificate', path: '#certificate' },
    { name: 'Contact', path: 'mailto:arabahimran@gmail.com' },
  ];
  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.setNavigators(this.navigators);
  }

  toggleSidenav() {
    this.sidebarService.toggleSidenav();
  }


}




