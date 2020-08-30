import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DeseosService } from "../../services/deseos.service";
import { ILista } from "../../models/ilista";
import { IItems } from "../../models/iitems";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.page.html",
  styleUrls: ["./agregar.page.scss"],
})
export class AgregarPage {
  lista: ILista;
  nombreItem: string = "";
  constructor(
    public router: Router,
    public deseosService: DeseosService,
    private route: ActivatedRoute
  ) {
    //obtener el id del url
    const listaId = this.route.snapshot.paramMap.get("listaid");
    this.lista = this.deseosService.obtenerLista(listaId);
    // console.log(this.lista);
  }
  //Manera de hacerlo con (ionChange)="addItem($event)"   debounce="700"
  addItem(event) {
    let item: IItems = {
      description: event.detail.value,
      done: false,
    };
    if (item.description.length > 0) {
      this.lista.items.push(item);
      this.deseosService.guardarStorage();
    }
  }

  cambioCheck(event: any, index) {
    this.lista.items[index].done = event.detail.checked;
    this.deseosService.guardarStorage();
  }

  deleteItem(index){
   this.lista.items.splice(index, 1);
   this.deseosService.guardarStorage();
  }
}
