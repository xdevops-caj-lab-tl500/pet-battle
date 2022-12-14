import { Component, OnInit, OnDestroy } from '@angular/core';

import { environment } from '@env/environment';
import { Logger } from '@app/core';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor() {}
  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }

  ngOnDestroy() {}
}
const biscuits = 'something';
