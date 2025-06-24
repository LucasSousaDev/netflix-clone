import { Routes } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { CadastroComponent } from './screens/cadastro/cadastro.component';
import { HomeComponent } from './screens/home/home.component';
import { FilmeComponent } from './screens/filme/filme.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'filme', component: FilmeComponent },
  { path: 'filme/:id', component: FilmeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];