import { Component } from '@angular/core';
import { Navigator_Interface } from 'src/app/interface/navigator';

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
    { name: 'Contact', path: '#contact' },
    { name: 'Portfolio', path: '#portfolio' },
  ];
}
