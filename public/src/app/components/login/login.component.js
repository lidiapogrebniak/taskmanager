import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../../services/authenticationService.js';

import template from './login.template.html';

@Component({
  selector: 'login-form',
  providers: [AuthenticationService],
  template: template
})
export class LoginComponent {
  constructor(service: AuthenticationService, router: Router) {
     this.service = service;
     this.router = router;
     this.user = new User('', '');
     this.errorMcg = '';
  }

  login() {
    this.service.login(this.user).then((result) => {
    if(result){
      this.router.navigate(['']);
    } else {
      this.errorMsg = 'Failed to login';
    }
   });
  }
}