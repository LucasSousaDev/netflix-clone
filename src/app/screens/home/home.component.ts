import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from '../carrossel/carrossel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CarrosselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  continuarAssistindo = [
    { titulo: 'Stranger Things', fotoUrl: 'assets/images/stranger-things.jpg', progresso: 65 },
    { titulo: 'Breaking Bad', fotoUrl: 'assets/images/breaking-bad.jpg', progresso: 30 },
    { titulo: 'The Crown', fotoUrl: 'assets/images/crown.jpg', progresso: 45 },
    { titulo: 'Dark', fotoUrl: 'assets/images/dark.jpg', progresso: 80 },
    { titulo: 'The Witcher', fotoUrl: 'assets/images/witcher.jpg', progresso: 20 }
  ];

  filmesPopulares = [
    { titulo: 'Oppenheimer', fotoUrl: 'assets/images/oppenheimer.jpg' },
    { titulo: 'Barbie', fotoUrl: 'assets/images/barbie.jpg' },
    { titulo: 'Interestelar', fotoUrl: 'assets/images/interstellar.jpg' },
    { titulo: 'Duna', fotoUrl: 'assets/images/duna.jpg' },
    { titulo: 'Avatar', fotoUrl: 'assets/images/avatar.jpg' }
  ];

  seriesPopulares = [
    { titulo: 'The Last of Us', fotoUrl: 'assets/images/last-of-us.jpg' },
    { titulo: 'House of Dragon', fotoUrl: 'assets/images/house-dragon.jpg' },
    { titulo: 'Wednesday', fotoUrl: 'assets/images/wednesday.jpg' },
    { titulo: 'The Mandalorian', fotoUrl: 'assets/images/mandalorian.jpg' },
    { titulo: 'Loki', fotoUrl: 'assets/images/loki.jpg' }
  ];
}
