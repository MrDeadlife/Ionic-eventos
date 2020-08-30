import { Injectable } from "@angular/core";
import { ILista } from '../models/ilista';

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

<<<<<<< HEAD
  crearlista(titulo: string) {
=======
  crearlista = (titulo: string): number => {
>>>>>>> 6e32ed9fb7c61a45a428f5e2b97e288086395632
    const date: Date = new Date();
    const nuevalista: ILista = {
      id: date.getTime(),
      titulo: titulo,
      fechaCreacion: date,
      fechaTermino: null,
<<<<<<< HEAD
      terminada:false,
      items: [],
=======
      terminada: false,
      items: []
>>>>>>> 6e32ed9fb7c61a45a428f5e2b97e288086395632
    };
    this.listas.push(nuevalista); // insertando el nuevo objeto a nuevalista
    this.guardarStorage(); //llamando la funcion guardarStorage()
    return nuevalista.id;
  }

  public obtenerLista(id: string | number) {
    id = Number(id);
<<<<<<< HEAD
    return this.listas.find((listaData) => listaData.id === id);
  }

  public guardarStorage = () => {
    localStorage.setItem("data", JSON.stringify(this.listas)); //el local storage solo admite strings
  };

  //el cargarStorage se llama en el constructor
=======
    return this.listas.find((listaData => listaData.id === id));
  }

  private guardarStorage = (): void => {
    localStorage.setItem("data", JSON.stringify(this.listas)); //el local storage solo admite strings
  }

>>>>>>> 6e32ed9fb7c61a45a428f5e2b97e288086395632
  cargarStorage() {
    if (localStorage.getItem("data")) {
      //localsrotaje devuelve un string no compatible con el tipo listas[]
      this.listas = JSON.parse(localStorage.getItem("data")); //convirtiendo a json para que sea de tipo listas[]
    } else {
      this.listas = []; //array null
    }
  }
  borrarLista(lista:ILista){
     this.listas = this.listas.filter(listaData=>{
       //console.log(listaData.id + ' sc ' + lista.id)
       listaData.id !== lista.id
      })
     this.guardarStorage();
  }

  
}
