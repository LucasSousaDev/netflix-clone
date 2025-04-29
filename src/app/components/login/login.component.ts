import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Importe RouterLink

@Component({
  selector: 'app-login',
  imports: [RouterLink], // Adicione RouterLink ao array de imports
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}