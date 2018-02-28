import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getSandbox } from '../module-builder';

@Component({
  selector: 'app-host',
  template: `<p id="host">host works</p>`,
  styles: []
})
export class HostComponent implements OnInit {
  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => { 
      getSandbox('hello').then(newModule => {
        platformBrowserDynamic().bootstrapModule(newModule)
          .catch(err => console.error(err));
      });
    });
  }

}
