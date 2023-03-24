import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearActorComponent } from './components/actores/crear-actor/crear-actor.component';
import { EditarActorComponent } from './components/actores/editar-actor/editar-actor.component';
import { IndiceActorComponent } from './components/actores/indice-actor/indice-actor.component';
import { CrearCineComponent } from './components/cines/crear-cine/crear-cine.component';
import { EditarCineComponent } from './components/cines/editar-cine/editar-cine.component';
import { IndiceCineComponent } from './components/cines/indice-cine/indice-cine.component';
import { CrearGeneroComponent } from './components/generos/crear-genero/crear-genero.component';
import { EditarGeneroComponent } from './components/generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './components/generos/indice-generos/indice-generos.component';
import { LagingPageComponent } from './components/laging-page/laging-page.component';
import { CrearPeliculaComponent } from './components/peliculas/crear-pelicula/crear-pelicula.component';
import { FiltroPeliculasComponent } from './components/peliculas/filtro-peliculas/filtro-peliculas.component';
import { EditarPeliculaComponent } from './components/peliculas/editar-pelicula/editar-pelicula.component';

const routes: Routes = [
  { path: '', component: LagingPageComponent },
  { path: 'generos', component: IndiceGenerosComponent},
  { path: 'generos/crear', component: CrearGeneroComponent},
  { path: 'generos/editar/:id', component: EditarGeneroComponent},
  { path: 'actores', component: IndiceActorComponent}, 
  { path: 'actores/crear', component: CrearActorComponent},  
  { path: 'actores/editar/:id', component: EditarActorComponent},
  { path: 'cines', component: IndiceCineComponent},
  { path: 'cines/crear', component: CrearCineComponent},  
  { path: 'cines/editar/:id', component: EditarCineComponent},
  { path: 'peliculas/crear', component: CrearPeliculaComponent},
  { path: 'peliculas/editar/:id', component: EditarPeliculaComponent},
  { path: 'peliculas/buscar', component: FiltroPeliculasComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
