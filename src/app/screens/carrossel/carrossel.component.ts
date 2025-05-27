import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent implements AfterViewInit {
  @Input() titulo: string = '';
  @Input() filmes: any[] = [];

  @ViewChild('carrosselRef', { static: false }) carrosselRef?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
  setTimeout(() => {
    console.log(`[${this.titulo}] carrossel carregado`, this.carrosselRef?.nativeElement);
  });
}

  scrollLeft() {
    this.carrosselRef?.nativeElement?.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollRight() {
    this.carrosselRef?.nativeElement?.scrollBy({ left: 400, behavior: 'smooth' });
  }
}
