import { Injectable } from "@angular/core";
import { ILista } from "../models/ilista";

@Injectable({
  providedIn: "root",
})
export class DeseosService {
  listas: ILista[] = [];
  //el constructor solo se ejecuta 1 vez al iniciar la aplicacion
  constructor() {
    this.cargarStorage();
    //const lista1 = new Lista("Recolectar Piedras del infinito"); //Crear una lista
  }

  crearlista = (titulo: string): number => {
    const date: Date = new Date();
    const nuevalista: ILista = {
      id: date.getTime(),
      titulo: titulo,
      fechaCreacion: date,
      fechaTermino: null,
      terminada: false,
      items: [],
    };
    this.listas.push(nuevalista); // insertando el nuevo objeto a nuevalista
    this.guardarStorage(); //llamando la funcion guardarStorage()
    return nuevalista.id;
  };

  public obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find((listaData) => listaData.id === id);
  }

  public guardarStorage = () => {
    localStorage.setItem("data", JSON.stringify(this.listas)); //el local storage solo admite strings
  };

  //el cargarStorage se llama en el constructor
  cargarStorage() {
    if (localStorage.getItem("data")) {
      //localsrotaje devuelve un string no compatible con el tipo listas[]
      this.listas = JSON.parse(localStorage.getItem("data")); //convirtiendo a json para que sea de tipo listas[]
    } else {
      this.listas = []; //array null
    }
  }
  borrarLista(lista: ILista) {
    this.listas = this.listas.filter((listaData) => listaData.id !== lista.id);
    this.guardarStorage();
  }
}
