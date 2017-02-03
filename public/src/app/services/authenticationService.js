import { Injectsable } from '@angular/core';
import {Router} from 'angular2/router';

export class User {
  constructor(
   email, 
   password
  ) { 
     this.email = email;
     this.password = password;
   }
}

let users = [
  new User('admin@admin.com','111'),
  new User('user1@gmail.com','111')
];

@Injectable()
export class AuthenticationService {
  const TOKEN_KEY ="auth_token";
  constructor(
     router: Router){
    this.router = router;
  }
 
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.router.navigate(['Login']);
  }
 
  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem(TOKEN_KEY, authenticatedUser);
      this.router.navigate(['Home']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem(TOKEN_KEY) === null){
        this.router.navigate(['Login']);
    }
  } 
}