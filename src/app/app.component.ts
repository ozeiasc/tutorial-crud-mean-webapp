import {Component} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {
  NavigationCancel, NavigationEnd, NavigationError,
  NavigationStart, Event, Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private loadingBar: SlimLoadingBarService,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }

    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }

    if (event instanceof NavigationCancel || event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
}
