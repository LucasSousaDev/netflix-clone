import { Component, Input } from '@angular/core';

interface Filme {
  urlFoto: string;
  titulo: string;
}

@Component({
  selector: 'app-aba',
  templateUrl: './aba.component.html',
  styleUrls: ['./aba.component.scss']
})
export class AbaComponent {
  @Input() filmes: Filme[] = []; 
}