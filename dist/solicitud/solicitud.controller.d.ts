import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
import { Solicitud } from './entities/solicitud.entity';
export declare class SolicitudController {
    private readonly solicitudService;
    constructor(solicitudService: SolicitudService);
    create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud>;
    findAll(): Promise<Solicitud[]>;
    findOne(id: number): Promise<Solicitud>;
    update(id: number, updateSolicitudDto: UpdateSolicitudDto): Promise<Solicitud>;
    remove(id: number): Promise<any>;
}
