import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import template from './project-list.template.html';

@Component({
  selector: 'project-list',
  template: template
})
export class ProjectListComponent {
  constructor(route: ActivatedRoute) {
     this._route = route;
  }
}