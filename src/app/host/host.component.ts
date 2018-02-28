import { Component, OnInit, NgZone } from '@angular/core';
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
        console.log(newModule);
        platformBrowserDynamic().bootstrapModule(newModule)
          .then(el => console.log(el))
          .catch(err => console.error(err));
      });
    });
  }

}
