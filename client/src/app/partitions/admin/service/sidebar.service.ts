import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Navigator_Interface } from '../../../shared/interface/navigator';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private toggleSidenavSource$ = new BehaviorSubject<void>(undefined);
  private navigatorsSource$ = new BehaviorSubject<Navigator_Interface[]>([]);

  toggleSidenav$ = this.toggleSidenavSource$.asObservable();
  navigators$ = this.navigatorsSource$.asObservable();

  toggleSidenav() {
    this.toggleSidenavSource$.next();
  }

  setNavigators(navigators: Navigator_Interface[]) {
    this.navigatorsSource$.next(navigators);
  }
}
