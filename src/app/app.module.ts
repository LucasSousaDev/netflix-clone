import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { CadastroComponent } from './screens/cadastro/cadastro.component';
import { FilmeComponent } from './screens/filme/filme.component';
import { LoginComponent } from './screens/login/login.component';
import { AppRoutingModule } from './app-routing.module'; // <- isso é essencial!

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    FilmeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }