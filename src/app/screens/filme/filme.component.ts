import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { CommonModule, NgIf, NgFor } from '@angular/common'; 

@Component({
  selector: 'app-filme',
  standalone: true, 
  imports: [CommonModule, NgIf, NgFor], 
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent {
  @Input() filme: any; 
  @Output() fechar = new EventEmitter<void>();

  onFecharClick() {
    this.fechar.emit();
  }
}