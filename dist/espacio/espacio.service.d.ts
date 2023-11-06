import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';
import { Espacio } from './entities/espacio.entity';
import { Repository } from 'typeorm';
export declare class EspacioService {
    private espacioRepository;
    constructor(espacioRepository: Repository<Espacio>);
    create(createEspacioDto: CreateEspacioDto): Promise<Espacio>;
    findAll(): Promise<Espacio[]>;
    findOne(id: number): Promise<Espacio>;
    update(id: number, updateEspacioDto: UpdateEspacioDto): Promise<Espacio>;
    remove(id: number): Promise<any>;
}
