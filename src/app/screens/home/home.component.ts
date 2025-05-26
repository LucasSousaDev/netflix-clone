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
    {  fotoUrl: 'assets/images/stranger.webp'},
    {  fotoUrl: 'assets/images/breaking-bad.webp' },
    {  fotoUrl: 'assets/images/you.webp'},
    {  fotoUrl: 'assets/images/lucifer.webp' },
    {  fotoUrl: 'assets/images/peaky-blinders.webp' },
    {  fotoUrl: 'assets/images/the-witcher.webp' }
  ];

  filmesPopulares = [
    {  fotoUrl: 'assets/images/oppenheimer.jpg' },
    {  fotoUrl: 'assets/images/barbie.jpg' },
    {  fotoUrl: 'assets/images/interstellar.jpg' },
    {  fotoUrl: 'assets/images/duna.jpg' },
    {  fotoUrl: 'assets/images/avatar.jpg' }
  ];

  seriesPopulares = [
    {  fotoUrl: 'assets/images/last-of-us.jpg' },
    {  fotoUrl: 'assets/images/house-dragon.jpg' },
    {  fotoUrl: 'assets/images/wednesday.jpg' },
    {  fotoUrl: 'assets/images/mandalorian.jpg' },
    {  fotoUrl: 'assets/images/loki.jpg' }
  ];
}
