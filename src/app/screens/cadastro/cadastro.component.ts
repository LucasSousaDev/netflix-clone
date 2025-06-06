import { Component, OnInit } from '@angular/core'; // Importe OnInit para o lifecycle hook
import { FormsModule } from '@angular/forms'; // Importe FormsModule para usar [(ngModel)]

@Component({
  selector: 'app-cadastro',
  // Se for um Standalone Component, você precisa importar o FormsModule aqui
  imports: [
    FormsModule // Necessário para usar [(ngModel)] no template
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss' // Usando styleUrl como no seu exemplo
})
export class CadastroComponent implements OnInit { // Implemente OnInit

  // 1. Objeto para armazenar os dados do formulário com two-way binding ([(ngModel)])
  cadastroForm = {
    email: '',
    senha: '',
    plan: 'standard', // Define um valor padrão inicial para o plano
    paymentMethod: '' // Define um valor padrão inicial para o método de pagamento
  };

  constructor() { }

  // Lifecycle hook: executado uma vez quando o componente é inicializado
  ngOnInit(): void {
    // Você pode colocar aqui a lógica que precisa ser executada na inicialização do componente.
    // Por exemplo, carregar dados iniciais, configurar subscriptions, etc.
  }

  // 2. Método que será chamado quando o formulário for submetido
  onSubmit() {
    // Este método é acionado pelo (ngSubmit)="onSubmit()" na tag <form> do seu HTML.
    console.log('Dados do Formulário para Cadastro:', this.cadastroForm);

    // --- Coloque aqui a lógica para processar os dados do formulário: ---
    // - Enviar para um serviço (por exemplo, um serviço de autenticação/registro)
    // - Fazer uma requisição HTTP para uma API (com HttpClient)
    // - Exibir uma mensagem de sucesso/erro para o usuário
    // - Redirecionar o usuário para outra página (com Router)

    // Exemplo de como você faria uma chamada a um serviço (requer injeção de dependência do serviço no constructor)
    /*
    this.seuServicoDeRegistro.registrarUsuario(this.cadastroForm).subscribe(
      response => {
        console.log('Registro bem-sucedido!', response);
        // Lógica para sucesso, por exemplo, this.router.navigate(['/sucesso']);
      },
      error => {
        console.error('Erro no registro:', error);
        // Lógica para erro, por exemplo, this.errorMessage = 'Erro ao registrar. Tente novamente.';
      }
    );
    */
  }
}