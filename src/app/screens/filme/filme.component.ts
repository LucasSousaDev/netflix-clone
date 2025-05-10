import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent {
  @Input() fotoUrl: string = ''; // Recebe a URL da foto do componente pai
  @Input() titulo: string = '';   // Opcional: Recebe o título do filme
}