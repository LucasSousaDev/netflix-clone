import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmeComponent } from '../filme/filme.component';

interface FilmeData {
  fotoUrl: string;
  titulo?: string; // O título é opcional
}

@Component({
  selector: 'app-aba',
  standalone: true,
  imports: [CommonModule, FilmeComponent],
  templateUrl: './aba.component.html',
  styleUrl: './aba.component.scss'
})
export class AbaComponent {
  @Input() filmes: any[] = [];
  @Input() tituloAba: string = '';
}