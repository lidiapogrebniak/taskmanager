import { Injectable } from '@angular/core';

export class User {
  constructor(
   email, 
   password,
   name
  ) { 
     this.email = email;
     this.password = password;
     this.name = name;
   }
}

let users = [
  new User('admin@admin.com','111', 'Admin'),
  new User('user1@gmail.com','111', 'User')
];

@Injectable()
export class AuthenticationService {
  constructor() {
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.user = localStorage.getItem('auth_token');
  }
 
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.user = null;
  }
 
  login(user){
    let authenticatedUser = users.find(u => u.email === user.email);

    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem('auth_token', authenticatedUser);
      this.loggedIn = true;
      this.user = authenticatedUser;
      
    }

    return new Promise((resolve, reject) => {
        resolve(this.loggedIn);
      });
  }
 
   checkCredentials(){
      return this.loggedIn;
  } 
}