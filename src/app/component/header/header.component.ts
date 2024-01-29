import { Component, HostListener, } from '@angular/core';
import { Navigator_Interface } from 'src/app/interface/navigator';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // isShowmenu: boolean;
  // isShowbuttun: boolean;
  // screenWidth: number;

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
    // this.screenWidth = window.innerWidth;
    // if (this.screenWidth < 750) {
    //   this.isShowmenu = false
    //   this.isShowbuttun = true
    // } else {
    //   this.isShowmenu = true
    //   this.isShowbuttun = false
    // }

  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.screenWidth = window.innerWidth;

  //   console.log("screen size:", this.screenWidth)
  //   if (this.screenWidth < 750) {
  //     this.isShowmenu = false
  //     this.isShowbuttun = true
  //   } else {
  //     this.isShowmenu = true
  //     this.isShowbuttun = false
  //   }

  // }

  // @HostListener('document:click', ['$event'])
  // showmenu(event: Event): void {
  //   console.log('click');
  //   const clickedElement = event.target as HTMLElement;
  //   this.screenWidth = window.innerWidth;
  //   if (this.screenWidth < 750) {

  //     if (clickedElement.closest('#menu')) {
  //       // Cacher le menu si le clic a eu lieu en dehors du menu
  //       this.isShowmenu = !this.isShowmenu;
  //       console.log('menu click');

  //     } else {
  //       this.isShowmenu = false
  //     }

  //   }

  // }


