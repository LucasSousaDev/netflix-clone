import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importe provideHttpClient

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient() // <<<<<< ADICIONE ESTA LINHA AQUI!
    // Se você tiver outros serviços que usam HttpClient e não estão providedIn: 'root'
    // ou se quiser explicitamente fornecer seu ApiService aqui, você faria:
    // ApiService // (Mas ApiService já deve ter providedIn: 'root', então não é estritamente necessário aqui)
  ]
};