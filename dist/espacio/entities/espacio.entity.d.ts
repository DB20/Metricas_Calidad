import { Reserva } from '../../reserva/entities/reserva.entity';
export declare class Espacio {
    id: number;
    edificio: string;
    aula: string;
    fecha: string;
    reservas: Reserva[];
}
