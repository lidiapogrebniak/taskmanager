import { ProjectListComponent } from './components/project-list/project-list.component';
import { LoginComponent } from './components/login/login.component';

export let routes = [
  { path: '', component: ProjectListComponent, pathMatch: 'full' },
  { path: 'login', name: 'Login', component: LoginComponent }
];