
export class actorDTO{
    constructor(
        public nombre: string,
        public fechaNacimiento: Date,
        public foto: string
    ){      
    }
}

export class ActorCreacionDTO {

    constructor(
        public nombre: string,
        public fechaNacimiento: Date,
        public foto: File
    ){      
    }    
}