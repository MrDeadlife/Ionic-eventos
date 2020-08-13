import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DeseosService } from "../../services/deseos.service";
import { ILista } from "../../models/ilista";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.page.html",
  styleUrls: ["./agregar.page.scss"],
})
export class AgregarPage implements OnInit {
  lista: ILista;
  constructor(
    public router: Router,
    public deseosService: DeseosService,
    private route: ActivatedRoute
  ) {
    const listaId = this.route.snapshot.paramMap.get("listaid");
    console.log(typeof listaId);
    this.lista = this.deseosService.obtenerLista(listaId);
    console.log(this.lista);
  }

  ngOnInit() {}
}
