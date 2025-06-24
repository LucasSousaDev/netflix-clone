import { Component, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

irParaDetalhes(filmeId: number) {
  this.router.navigate(['/filme', filmeId]);
}

  // Modificação aqui: Aceitar EventTarget e verificar se é um HTMLElement
  @HostListener('scroll', ['$event.target'])
  onScroll(targetElement: EventTarget | null) { // Altere o tipo para EventTarget | null
    // Verifica se o targetElement existe e é um HTMLElement antes de passá-lo
    if (targetElement instanceof HTMLElement) {
      this.updateNavigationButtonsVisibility(targetElement); // Passa o elemento para a função de atualização
    } else {
      // Opcional: Lidar com o caso em que targetElement não é um HTMLElement
      // console.warn('Evento de scroll em um elemento não-HTMLElement:', targetElement);
      this.updateNavigationButtonsVisibility(); // Reavalia a visibilidade sem o elemento do evento
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

  // Modificação aqui: Receber um HTMLElement opcionalmente ou usar o carrosselRef padrão
  private updateNavigationButtonsVisibility(element?: HTMLElement): void {
    // Prioriza o elemento passado (do evento de scroll), caso contrário, usa o carrosselRef
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