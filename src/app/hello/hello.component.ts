import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hello',
  template: `
    <form [formGroup]="form">
      <input formControlName="name" type="text" />
      <p>test</p>
      <button (click)="onClick()">submit</button>
    </form>
  `,
  styles: []
})
export class HelloComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ''
    });
  }

  onClick() {
    console.log(this.form.value);
  }
}
