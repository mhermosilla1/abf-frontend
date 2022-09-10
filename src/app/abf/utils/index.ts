import { LOCALE_ID, NgModule } from '@angular/core';

export const LISTA_CANTIDAD = [5,10,15,20,25]
export const CANTIDAD_INICIAL:number=5;
export const mostrarDatos = (data:any,props:any)=>{
  
    if( props.relacion){
        return data[props.field][props.propiedadRelacion]
    }
    return data[props.field];
}
