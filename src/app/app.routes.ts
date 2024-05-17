import { Routes } from '@angular/router';
import { InicioComponent } from './components/views/inicio/inicio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', title: 'Pagina principal', component: InicioComponent },
];
