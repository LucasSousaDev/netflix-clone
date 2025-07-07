import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule, NgIf } from '@angular/common'; 

@Component({
  selector: 'app-filme',
  standalone: true, 
  imports: [CommonModule, NgIf], 
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent {
  @Input() filme: any | null = null; 

  @Output() fechar = new EventEmitter<void>();

  isClosing: boolean = false;

  onFecharClick(): void {
    this.isClosing = true;
    
    // Aguarda a animação terminar antes de emitir o evento
    setTimeout(() => {
      this.fechar.emit();
      this.isClosing = false;
    }, 300); // Tempo da animação
  }
}