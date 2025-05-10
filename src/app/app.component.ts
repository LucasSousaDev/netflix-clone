import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

interface FilmeData {
  fotoUrl: string;
  titulo?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'netflix';

  filmesAcao: FilmeData[] = [
    { fotoUrl: 'acao1.jpg', titulo: 'Missão Impossível 7' },
    { fotoUrl: 'acao2.png', titulo: 'Velozes e Furiosos X' },
    { fotoUrl: 'acao3.jpeg' }
  ];

  filmesComedia: FilmeData[] = [
    { fotoUrl: 'comedia1.gif', titulo: 'Minha Mãe É Uma Peça 3' },
    { fotoUrl: 'comedia2.bmp' },
  ];

  filmesDrama: FilmeData[] = [
    { fotoUrl: 'drama1.webp', titulo: 'O Poderoso Chefão' },
    { fotoUrl: 'drama2.tiff', titulo: 'Forrest Gump' },
    { fotoUrl: 'drama3.svg' }
  ];
}

