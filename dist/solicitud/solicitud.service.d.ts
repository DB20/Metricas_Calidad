import { Repository } from 'typeorm';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { Solicitud } from './entities/solicitud.entity';
export declare class SolicitudService {
    private solicitudRepository;
    constructor(solicitudRepository: Repository<Solicitud>);
    create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud>;
    findAll(): Promise<Solicitud[]>;
    findOne(id: number): Promise<Solicitud>;
    update(id: number, updateSolicitudDto: UpdateSolicitudDto): Promise<Solicitud>;
    remove(id: number): Promise<any>;
}
