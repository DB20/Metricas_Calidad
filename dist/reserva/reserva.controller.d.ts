import { ReservaService } from './reserva.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';
export declare class ReservaController {
    private readonly reservaService;
    constructor(reservaService: ReservaService);
    create(createReservaDto: CreateReservaDto): Promise<Reserva>;
    findAll(): Promise<Reserva[]>;
    findOne(id: number): Promise<Reserva>;
    update(id: number, updateReservaDto: UpdateReservaDto): Promise<Reserva>;
    remove(id: number): Promise<any>;
}
