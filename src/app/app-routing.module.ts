import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DetalleProfesionalComponent }  from './detalle-profesional/detalle-profesional.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'detalle/:id', component: DetalleProfesionalComponent },
  { path: '', redirectTo: '/cards', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
