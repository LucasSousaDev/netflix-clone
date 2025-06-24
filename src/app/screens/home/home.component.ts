import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CarrosselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  continuarAssistindo = [
    { fotoUrl: 'assets/images/stranger.webp' },
    { fotoUrl: 'assets/images/breaking-bad.webp' },
    { fotoUrl: 'assets/images/you.webp' },
    { fotoUrl: 'assets/images/lucifer.webp' },
    { fotoUrl: 'assets/images/peaky-blinders.webp' },
    { fotoUrl: 'assets/images/the-witcher.webp' },
    { fotoUrl: 'assets/images/tropa-elite.webp' }
  ];

  animesPopulares = [
    { fotoUrl: 'assets/images/jojo.webp' },
    { fotoUrl: 'assets/images/cyberpunk.webp' },
    { fotoUrl: 'assets/images/jujutsu.webp' },
    { fotoUrl: 'assets/images/hunter.webp' },
    { fotoUrl: 'assets/images/naruto.webp' },
    { fotoUrl: 'assets/images/nanatsu.webp' },
    { fotoUrl: 'assets/images/dandadan.webp' }
  ];

  seriesPopulares = [
    { fotoUrl: 'assets/images/arcane.webp' },
    { fotoUrl: 'assets/images/twd.webp' },
    { fotoUrl: 'assets/images/dexter.webp' },
    { fotoUrl: 'assets/images/rick.webp' },
    { fotoUrl: 'assets/images/better.webp' },
    { fotoUrl: 'assets/images/dante.webp' },
    { fotoUrl: 'assets/images/round-six.webp' }
  ];

}
