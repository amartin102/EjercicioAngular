import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import "leaflet/dist/images//marker-shadow.png";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/peliculas/listar/listar.component';
import { ListarGenericoComponent } from './utilidades/listar-generico/listar-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './components/menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LagingPageComponent } from './components/laging-page/laging-page.component';
import { IndiceGenerosComponent } from './components/generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './components/generos/crear-genero/crear-genero.component';
import { CrearActorComponent } from './components/actores/crear-actor/crear-actor.component';
import { CrearPeliculaComponent } from './components/peliculas/crear-pelicula/crear-pelicula.component';
import { CrearCineComponent } from './components/cines/crear-cine/crear-cine.component';
import { IndiceCineComponent } from './components/cines/indice-cine/indice-cine.component';
import { IndiceActorComponent } from './components/actores/indice-actor/indice-actor.component';
import { EditarActorComponent } from './components/actores/editar-actor/editar-actor.component';
import { EditarGeneroComponent } from './components/generos/editar-genero/editar-genero.component';
import { EditarCineComponent } from './components/cines/editar-cine/editar-cine.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormularioGeneroComponent } from './components/generos/formulario-genero/formulario-genero.component';
import { FiltroPeliculasComponent } from './components/peliculas/filtro-peliculas/filtro-peliculas.component';
import { FormularioActoresComponent } from './components/actores/formulario-actores/formulario-actores.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component'
import { MarkdownModule } from 'ngx-markdown';
import { FormularioCineComponent } from './components/cines/formulario-cine/formulario-cine.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { FormularioPeliculaComponent } from './components/peliculas/formulario-pelicula/formulario-pelicula.component';
import { EditarPeliculaComponent } from './components/peliculas/editar-pelicula/editar-pelicula.component'
import { FormsModule} from  '@angular/forms';
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from './components/actores/autocomplete-actores/autocomplete-actores.component'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarGenericoComponent,
    MenuComponent,
    RatingComponent,
    LagingPageComponent,
    IndiceGenerosComponent,
    CrearGeneroComponent,
    CrearActorComponent,
    CrearPeliculaComponent,
    CrearCineComponent,
    IndiceCineComponent,
    IndiceActorComponent,
    EditarActorComponent,
    EditarGeneroComponent,
    EditarCineComponent,
    FormularioGeneroComponent,
    FiltroPeliculasComponent,
    FormularioActoresComponent,
    InputImgComponent,
    InputMarkdownComponent,
    FormularioCineComponent,
    MapaComponent,
    FormularioPeliculaComponent,
    EditarPeliculaComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LeafletModule,
    FormsModule,
    MarkdownModule .forRoot()           
  ],
  providers: [
    {provide: DEFAULT_CURRENCY_CODE,
    useValue: '$'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
