import { Pipe, PipeTransform } from "@angular/core";
import { ILista } from "../models/ilista";

@Pipe({
  name: "filtro",
  pure: false //
})
export class FiltroPipe implements PipeTransform {
  transform(listas: ILista[], completado:boolean= true): ILista[] {
    return listas.filter(lista => lista.terminada === completado )
  }
}
