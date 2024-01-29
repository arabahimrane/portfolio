import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'angular-ga';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'portfolio';

    constructor(private gaService: GoogleAnalyticsService) { }

    trackPageView() {
        this.gaService.sendPageView('Page Title', '/page-url');
    }

    trackEvent() {
        this.gaService.sendEvent('Category', 'Action', 'Label', 1);
    }
}
