import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filme.component.html',
  styleUrl: './filme.component.scss'
})
export class FilmeComponent {
  @Input() fotoUrl: string = ''; // Recebe a URL da foto do componente pai
  @Input() titulo: string = 'Título do Filme';   // Opcional: Recebe o título do filme
}