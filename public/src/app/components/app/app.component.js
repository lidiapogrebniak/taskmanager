import { Component, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { LoginComponent } from '../login/login.component';

import template from './app.template.html';

@Component({
  selector: 'tm-app',
  directives: [LoginComponent, ROUTER_DIRECTIVES],
  template: template
})
export class AppComponent {
  constructor() {

  }
}