import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authenticationService.js'

import template from './project-list.template.html';

@Component({
  selector: 'project-list',
  providers: [AuthenticationService],
  template: template
})
export class ProjectListComponent {
  constructor(router: Router, service: AuthenticationService) {
     this.router = router;
     this.service = service;
     this.isLoggedIn = service.checkCredentials();
  }
  ngOnInit() {
     if(!this.isLoggedIn) {
        this.router.navigate(['login']);
     }
  }
  logout() {
    this.service.logout();
    this.router.navigate(['login']);
  }
}