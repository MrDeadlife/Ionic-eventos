import { IItems } from './iitems';
export interface ILista {
    id: number;
    titulo: string;
    fechaCreacion: Date;
<<<<<<< HEAD
<<<<<<< HEAD
    fechaTermino: Date ;
    terminada:boolean ;
=======
=======
>>>>>>> 6e32ed9fb7c61a45a428f5e2b97e288086395632
    fechaTermino: Date;
    terminada: boolean;
>>>>>>> 6e32ed9fb7c61a45a428f5e2b97e288086395632
    items: IItems[];
}
