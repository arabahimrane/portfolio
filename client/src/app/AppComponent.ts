import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'portfolio';

    constructor() { }

    trackPageView() {
        // this.gaService.sendPageView('Page Title', '/page-url');
    }

    trackEvent() {
        // this.gaService.sendEvent('Category', 'Action', 'Label', 1);
    }
}
