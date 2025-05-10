import { Component, Input } from '@angular/core';

interface FilmeData {
  fotoUrl: string;
  titulo?: string; // O título é opcional
}

@Component({
  selector: 'app-aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba.component.css']
})
export class AbaComponent {
  @Input() filmes: FilmeData[] = []; // Recebe a lista de filmes do componente pai
  @Input() tituloAba: string = 'Filmes'; 
}