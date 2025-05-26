import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent {
  @Input() titulo: string = '';
  @Input() filmes: any[] = [];

  scrollLeft() {
    const carrossel = document.querySelector('.carrossel') as HTMLElement;
    if (carrossel) {
      carrossel.scrollBy({ left: -400, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const carrossel = document.querySelector('.carrossel') as HTMLElement;
    if (carrossel) {
      carrossel.scrollBy({ left: 400, behavior: 'smooth' });
    }
  }
} 