import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app.routes'; // Certifique-se que este arquivo existe e tem suas rotas

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

