import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  public form: FormGroup;
  public generos: Array<any>; 
  public peliculasFiltro: Array<any>;
  public peliculaOriginal: any;

  public formularioOriginal: any = [{
    titulo: '',
    genero: 0,
    proximosEstrenos: false,
    enCartelera: false
  }]

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private activatedRoute : ActivatedRoute
  ) {
      
      this.form= this.formBuilder.group(this.formularioOriginal[0]);
      this.leerValoresUrl();
      

      this.generos = [{ id: 1, nombre : 'Drama'}, {id: 2, nombre : 'Acción'}, {id: 3, nombre : 'Comedia'}];

      this.peliculasFiltro = [{titulo: 'Spiderman', enCartelera: false, proximosEstrenos: true, generos: [2], imagen: 'https://i.pinimg.com/564x/f5/34/2d/f5342d215a2c17556d145eeae2c8c0cc.jpg'},
      {titulo: 'Dragon Ball', enCartelera: true, proximosEstrenos: false, generos: [1], imagen: 'https://sm.ign.com/ign_latam/screenshot/default/goku_sg8b.jpg'},
      {titulo: 'The Walking Dead', enCartelera: false, proximosEstrenos: true, generos: [0,1], imagen: 'https://media.s-bol.com/BBoJoXolQ6zN/550x778.jpg'}]
           
      this.peliculaOriginal = this.peliculasFiltro;

      this.form.valueChanges.subscribe(valoresForm => {  
         
        this.peliculasFiltro = this.peliculaOriginal;
        
        this.buscarPeliculas(valoresForm);
        this.escribirParametrosBusquedaUrl();
        
    })

    this.buscarPeliculas(this.form.value);
     
    }

  ngOnInit(): void {
    
  }

  private escribirParametrosBusquedaUrl(){

    var queryStrings = [];
    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo)
    {
      queryStrings.push(`titulo=${valoresFormulario.titulo}`)
    }
    
    if(valoresFormulario.genero!== null && valoresFormulario.genero != undefined && valoresFormulario.genero > 0)
    {
      queryStrings.push(`genero=${valoresFormulario.genero}`);
    }

    if(valoresFormulario.proximosEstrenos != undefined && valoresFormulario.proximosEstrenos !== '0')
    {
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`)
    }

    if(valoresFormulario.enCartelera != undefined && valoresFormulario.enCartelera !== '0')
    {
      queryStrings.push(`enCartelera=${valoresFormulario.enCartelera}`)
    }
    
    this.location.replaceState('peliculas/buscar', queryStrings.join('&'));
    
  }

  private leerValoresUrl(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var object: any = [{
        titulo: '',
        genero: 0,
        proximosEstrenos: false,
        enCartelera: false
      }];
      
       if(params.titulo)
       {
         object.titulo = params.titulo;
       }
       
       console.log(params);
       console.log("genero: " + params.genero);
       console.log("proximosEstrenos: " + params.proximosEstrenos);
       console.log("enCartelera: " + params.enCartelera);
       
       if(params.genero != undefined && params.genero != "" && params.genero > 0)
       {         
         object.genero = parseInt(params.genero);
       }
      
       if(params.proximosEstrenos =="true")
        {
          object.proximosEstrenos = true;
        }
        else 
        {
          object.proximosEstrenos = false;
        }

        if(params.enCartelera =="true")
        {
          object.enCartelera = true;
        }
        else 
        {
          object.enCartelera = false;
        }
      
        console.log("Buscar película desde método leerValoresUrl: ");
        console.log(object);
         
       this.form.patchValue(object); 
       //this.buscarPeliculas(object);
           
    })

  }

  limpiar(){
    console.log("formularioOriginal = " + this.formularioOriginal[0]);
    this.form.patchValue(this.formularioOriginal[0])
  }

  buscarPeliculas(valoresForm: any){
    if(valoresForm.titulo)
    {
      console.log(valoresForm.titulo);
      this.peliculasFiltro = this.peliculasFiltro.filter( x =>  x.titulo.indexOf(valoresForm.titulo) !== -1 )
      console.log(this.peliculasFiltro);
    }

    console.log("Buscar Peliculas: ");
    console.log(valoresForm);
    console.log(valoresForm.genero);
    console.log(valoresForm.proximosEstrenos);
    console.log(valoresForm.enCartelera);

    if(valoresForm.genero != undefined && valoresForm.genero != "" && valoresForm.genero > 0)
    {
      this.peliculasFiltro= this.peliculasFiltro.filter(x=> x.generos.indexOf(valoresForm.genero) !== -1)
    }
    
    if(valoresForm.proximosEstrenos)
    {
      this.peliculasFiltro = this.peliculasFiltro.filter(x=> x.proximosEstrenos === true)
    }

    if(valoresForm.enCartelera)
    {
      this.peliculasFiltro = this.peliculasFiltro.filter(x=> x.enCartelera === true)
    }
    
  }

}
