import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { ILista } from "../../models/ilista";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"],
})
export class ListasComponent implements OnInit {
  @Input() terminada = false;
  /* @ViewChild(IonList) listaa:IonList; //auto cerrar el boton slide 
  (buscando el ionlist donde esta el boton, si hay mas de un ionlis regresa 
  un array con todos los ionlist)*/
  @ViewChild("slideLista") listaa: IonList; // buscando la etiqueta html en este caso seria **slideLista**
  lista: ILista;
  constructor(
    public deseosService: DeseosService,
    public router: Router,
    private route: ActivatedRoute,
    private alertctrl: AlertController
  ) {
    const listaId = this.route.snapshot.paramMap.get("listaid");
    this.lista = this.deseosService.obtenerLista(listaId);
  }
  ngOnInit() {}

  listaSelected(lista: ILista) {
    //console.log(lista);
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }
  deleteList(lista: ILista) {
    this.deseosService.borrarLista(lista);
  }
  async editarLista(lista: ILista) {
    // this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertctrl.create({
      header: "Nuevo titulo de lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          value: lista.titulo,
          placeholder: "Nuevo nombre",
        },
      ],
      buttons: [
        {
          text: "Cancalar",
          role: "cancel",
          handler: () => {
            //se ejecuta al precionar el boton
            console.log("Cancelar");
            this.listaa.closeSlidingItems();
          },
        },
        {
          text: "Actualizar",
          handler: (data) => {
            //handler se ejecuta al precionar el boton
            if (data.titulo.length === 0) {
              return;
            }
            //this.deseosService.crearlista(data.titulo);
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.listaa.closeSlidingItems(); //cerrando el boton slide
          },
        },
      ],
    });
    await alert.present();
  }
}
