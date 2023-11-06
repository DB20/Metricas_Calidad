import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';
export declare class ReservaService {
    private reservaRepository;
    constructor(reservaRepository: Repository<Reserva>);
    create(createReservaDto: CreateReservaDto): Promise<Reserva>;
    findAll(): Promise<Reserva[]>;
    findOne(id: number): Promise<Reserva>;
    update(id: number, updateReservaDto: UpdateReservaDto): Promise<Reserva>;
    remove(id: number): Promise<any>;
}
