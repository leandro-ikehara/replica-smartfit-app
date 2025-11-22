import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'treino',
    loadComponent: () => import('./pages/treino/treino.page').then((m) => m.TreinoPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'aulas',
    loadComponent: () => import('./pages/aulas/aulas.page').then( m => m.AulasPage)
  },
  {
    path: 'frequencia',
    loadComponent: () => import('./pages/frequencia/frequencia.page').then( m => m.FrequenciaPage)
  },
  {
    path: 'conquistas',
    loadComponent: () => import('./pages/conquistas/conquistas.page').then( m => m.ConquistasPage)
  },
];
