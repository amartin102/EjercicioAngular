import { AbstractControl, ValidatorFn } from "@angular/forms";

export function primeraletramayuscula(): ValidatorFn {  
    
    return (control: AbstractControl) => {
        
        const valor = <string> control.value;
        if(!valor || valor.length === 0)
        {
            return null;
        }

        const primerletra = valor[0];
        
        if(primerletra !== primerletra.toUpperCase())
        {
            console.log("Entra");
            return {
                primeraletramayuscula: {
                    mensaje: 'La primera letra debe ser mayúscula'
                }
            }
        }

        return null;
        
      };
     
}