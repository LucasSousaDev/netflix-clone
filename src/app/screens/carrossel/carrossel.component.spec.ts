import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrosselComponent } from './carrossel.component';
import { CommonModule } from '@angular/common';

describe('CarrosselComponent', () => {
  let component: CarrosselComponent;
  let fixture: ComponentFixture<CarrosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselComponent, CommonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for inputs', () => {
    expect(component.titulo).toBe('');
    expect(component.filmes).toEqual([]);
  });

  it('should update when inputs change', () => {
    const mockFilmes = [
      { titulo: 'Filme 1', fotoUrl: 'url1', progresso: 50 },
      { titulo: 'Filme 2', fotoUrl: 'url2' }
    ];

    component.titulo = 'Teste';
    component.filmes = mockFilmes;
    fixture.detectChanges();

    expect(component.titulo).toBe('Teste');
    expect(component.filmes).toEqual(mockFilmes);
  });

  it('should have scroll methods', () => {
    expect(typeof component.scrollLeft).toBe('function');
    expect(typeof component.scrollRight).toBe('function');
  });
}); 