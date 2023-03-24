export interface PeliculaModel {
     titulo: string;
     resumen: string;
     enCine: boolean;
     fechaLanzamiento: Date;
     trailer: string;
     imagen: File;
}


export interface PeliculaModelEdit {
     titulo: string;
     resumen: string;
     enCine: boolean;
     fechaLanzamiento: Date;
     trailer: string;
     imagen: any;
}