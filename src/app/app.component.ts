import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AbaComponent } from './screens/aba/aba.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AbaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netflix';
  filmesAcao = [
    { titulo: 'Filme 1', fotoUrl: 'assets/images/filme1.jpg' },
    { titulo: 'Filme 2', fotoUrl: 'assets/images/filme2.jpg' }
  ];
  filmesComedia = [
    { titulo: 'Comédia 1', fotoUrl: 'assets/images/comedia1.jpg' },
    { titulo: 'Comédia 2', fotoUrl: 'assets/images/comedia2.jpg' }
  ];
  filmesDrama = [
    { titulo: 'Drama 1', fotoUrl: 'assets/images/drama1.jpg' },
    { titulo: 'Drama 2', fotoUrl: 'assets/images/drama2.jpg' }
  ];
}

