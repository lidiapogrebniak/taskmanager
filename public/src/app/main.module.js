import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  AppComponent,
  ProjectListComponent,
  LoginComponent
} from './components';

import { routes } from './routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProjectListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ]
})
export class MainModule {}