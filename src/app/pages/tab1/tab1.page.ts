import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Button } from "protractor";
import { ILista } from "../../models/ilista";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private elerCtrl: AlertController
  ) {}

  async agregarLista() {
    // this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.elerCtrl.create({
      header: "Ingrese titulo de lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista",
        },
      ],
      buttons: [
        {
          text: "Cancalar",
          role: "cancel",
          handler: () => {
            //se ejecuta al precionar el boton
            console.log("Cancelar");
          },
        },
        {
          text: "Crear",
          handler: (data) => {
            //handler se ejecuta al precionar el boton
            if (data.titulo.length === 0) {
              return;
            }
            //this.deseosService.crearlista(data.titulo);
            const listaid = this.deseosService.crearlista(data.titulo);
            console.log(listaid);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaid}`);
          },
        },
      ],
    });
    await alert.present();
  }
}
