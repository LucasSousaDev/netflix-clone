import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { ApiService } from '../../services/api.service';
import { FilmeComponent } from '../filme/filme.component'; // Importe o componente do pop-up

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CarrosselComponent, FilmeComponent], // Adicione FilmeComponent aos imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit { // Implemente OnInit para usar ngOnInit
  // Suas listas de filmes (você pode carregar elas da API, se quiser)
  continuarAssistindo = [
    { id: 1, titulo: 'Stranger Things', fotoUrl: 'assets/images/stranger.webp', descricao: 'Um grupo de amigos descobre segredos sobrenaturais...' },
    { id: 2, titulo: 'Breaking Bad', fotoUrl: 'assets/images/breaking-bad.webp', descricao: 'Um professor de química do ensino médio se transforma em um chefão das drogas...' },
    { id: 3, titulo: 'You', fotoUrl: 'assets/images/you.webp', descricao: 'Um gerente de livraria obcecado que se apaixona por uma cliente e a persegue...' },
    { id: 4, titulo: 'Lucifer', fotoUrl: 'assets/images/lucifer.webp', descricao: 'O diabo entediado abandona o Inferno e vai para Los Angeles...' },
    { id: 5, titulo: 'Peaky Blinders', fotoUrl: 'assets/images/peaky-blinders.webp', descricao: 'Uma notória gangue em Birmingham, Inglaterra, em 1919...' },
    { id: 6, titulo: 'The Witcher', fotoUrl: 'assets/images/the-witcher.webp', descricao: 'Geralt de Rívia, um caçador de monstros solitário, luta para encontrar seu lugar em um mundo onde as pessoas são mais perversas que as feras...' },
    { id: 7, titulo: 'Tropa de Elite', fotoUrl: 'assets/images/tropa-elite.webp', descricao: 'Um capitão do BOPE busca um substituto para assumir seu lugar...' }
  ];

  animesPopulares = [
    { id: 8, titulo: 'Jojo\'s Bizarre Adventure', fotoUrl: 'assets/images/jojo.webp', descricao: 'A saga da família Joestar e sua batalha contra o mal...' },
    { id: 9, titulo: 'Cyberpunk Edgerunners', fotoUrl: 'assets/images/cyberpunk.webp', descricao: 'Um garoto de rua que tenta sobreviver em uma cidade futurista...' },
    { id: 10, titulo: 'Jujutsu Kaisen', fotoUrl: 'assets/images/jujutsu.webp', descricao: 'Um estudante que engole um dedo amaldiçoado e entra no mundo dos feiticeiros jujutsu...' },
    { id: 11, titulo: 'Hunter x Hunter', fotoUrl: 'assets/images/hunter.webp', descricao: 'Gon Freecss deixa sua casa para fazer o Exame Hunter e encontrar seu pai...' },
    { id: 12, titulo: 'Naruto', fotoUrl: 'assets/images/naruto.webp', descricao: 'Um jovem ninja que sonha em se tornar o Hokage...' },
    { id: 13, titulo: 'Nanatsu no Taizai', fotoUrl: 'assets/images/nanatsu.webp', descricao: 'Um grupo de cavaleiros lendários que se separam e se reúnem para salvar um reino...' },
    { id: 14, titulo: 'Dandadan', fotoUrl: 'assets/images/dandadan.webp', descricao: 'Uma história sobre estudantes que lidam com fenômenos sobrenaturais...' }
  ];

  seriesPopulares = [
    { id: 15, titulo: 'Arcane', fotoUrl: 'assets/images/arcane.webp', descricao: 'Duas irmãs lutam em lados opostos de uma guerra entre cidades...' },
    { id: 16, titulo: 'The Walking Dead', fotoUrl: 'assets/images/twd.webp', descricao: 'Sobreviventes de um apocalipse zumbi buscam segurança e um novo lar...' },
    { id: 17, titulo: 'Dexter', fotoUrl: 'assets/images/dexter.webp', descricao: 'Um analista de sangue da polícia de Miami que também é um serial killer...' },
    { id: 18, titulo: 'Rick and Morty', fotoUrl: 'assets/images/rick.webp', descricao: 'As aventuras de um cientista cínico e seu neto não tão brilhante...' },
    { id: 19, titulo: 'Better Call Saul', fotoUrl: 'assets/images/better.webp', descricao: 'A jornada de Jimmy McGill antes de se tornar Saul Goodman...' },
    { id: 20, titulo: 'Dantes Inferno', fotoUrl: 'assets/images/dante.webp', descricao: 'Uma adaptação moderna da obra clássica...' }, 
    { id: 21, titulo: 'Round 6', fotoUrl: 'assets/images/round-six.webp', descricao: 'Pessoas endividadas competem em jogos infantis mortais para ganhar um prêmio em dinheiro...' },
  ];

  // --- Novas propriedades para o pop-up ---
  filmeSelecionado: any | null = null; // Armazena o filme que será exibido no pop-up
  isPopupOpen: boolean = false; // Controla a visibilidade do pop-up

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFilmes().subscribe(data => {
    this.continuarAssistindo = data.filter((f: any) => f.categoria === 'assistindo');
    this.animesPopulares = data.filter((f: any) => f.categoria === 'animes');
    this.seriesPopulares = data.filter((f: any) => f.categoria === 'series');
    });
  }

  // Método chamado quando um filme é clicado em qualquer carrossel
  abrirPopupFilme(filme: any) {
    this.filmeSelecionado = filme; // Salva o filme clicado
    this.isPopupOpen = true; // Abre o pop-up
    console.log('Abrindo pop-up para:', filme); // Para depuração
  }

  // Método chamado pelo FilmeComponent (pop-up) para fechar
  fecharPopup() {
    this.isPopupOpen = false; // Fecha o pop-up
    this.filmeSelecionado = null; // Limpa o filme selecionado
    console.log('Fechando pop-up.'); // Para depuração
  }
}