import { Component, OnInit } from '@angular/core';
import { getSandbox } from '../module-builder';

@Component({
  selector: 'app-host',
  templateUrl: `<p>host works</p>`,
  styles: []
})
export class HostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const test = getSandbox('hello');
    console.log(test);
  }

}
