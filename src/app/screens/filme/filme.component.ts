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

  onFecharClick(): void {
    this.fechar.emit();
  }
}