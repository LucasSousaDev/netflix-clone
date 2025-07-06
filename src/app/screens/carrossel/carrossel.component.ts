import { Component, Input, ViewChild, ElementRef, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core'; // Adicionado Output e EventEmitter
import { CommonModule, NgIf, NgFor } from '@angular/common';
// import { Router } from '@angular/router'; // Não precisamos mais do Router para o pop-up

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements AfterViewInit {
  @Input() titulo: string = '';
  @Input() filmes: any[] = [];
  @Output() filmeClicado = new EventEmitter<any>(); 
  @ViewChild('carrosselRef', { static: false }) carrosselRef?: ElementRef<HTMLDivElement>;

  showNavPrev: boolean = false;
  showNavNext: boolean = true;

  private scrollOffset: number = 400;

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateNavigationButtonsVisibility();
      console.log(`[${this.titulo}] carrossel carregado`, this.carrosselRef?.nativeElement);
    });
  }

  onFilmeClick(filme: any) {
    console.log('Filme clicado:', filme); 
    this.filmeClicado.emit(filme); 
  }

  // Modificação aqui: Aceitar EventTarget e verificar se é um HTMLElement
  @HostListener('scroll', ['$event.target'])
  onScroll(targetElement: EventTarget | null) {
    if (targetElement instanceof HTMLElement) {
      this.updateNavigationButtonsVisibility(targetElement);
    } else {
      this.updateNavigationButtonsVisibility();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateNavigationButtonsVisibility();
  }

  scrollLeft() {
    if (this.carrosselRef?.nativeElement) {
      this.carrosselRef.nativeElement.scrollBy({ left: -this.scrollOffset, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.carrosselRef?.nativeElement) {
      this.carrosselRef.nativeElement.scrollBy({ left: this.scrollOffset, behavior: 'smooth' });
    }
  }

  private updateNavigationButtonsVisibility(element?: HTMLElement): void {
    const carrosselElement = element || this.carrosselRef?.nativeElement;

    if (!carrosselElement) {
      this.showNavPrev = false;
      this.showNavNext = false;
      return;
    }

    const scrollLeft = carrosselElement.scrollLeft;
    const scrollWidth = carrosselElement.scrollWidth;
    const clientWidth = carrosselElement.clientWidth;

    this.showNavPrev = scrollLeft > 0;
    this.showNavNext = (scrollWidth > clientWidth) && (Math.ceil(scrollLeft + clientWidth) < scrollWidth);
  }
}