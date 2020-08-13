import { IItems } from './iitems';
export interface ILista {
    id: number;
    titulo: string;
    fechaCreacion: Date;
    fechaTermino: Date;
    terminada: boolean;
    items: IItems[];
}
