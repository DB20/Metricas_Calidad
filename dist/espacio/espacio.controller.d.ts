import { EspacioService } from './espacio.service';
import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';
import { Espacio } from './entities/espacio.entity';
export declare class EspacioController {
    private readonly espacioService;
    constructor(espacioService: EspacioService);
    create(createEspacioDto: CreateEspacioDto): Promise<Espacio>;
    findAll(): Promise<Espacio[]>;
    findOne(id: number): Promise<Espacio>;
    update(id: number, updateEspacioDto: UpdateEspacioDto): Promise<Espacio>;
    remove(id: number): Promise<any>;
}
