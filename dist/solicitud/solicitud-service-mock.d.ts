import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { Solicitud } from './entities/solicitud.entity';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';
export declare class SolicitudServiceMock {
    mockSolicitud: Solicitud;
    create(createSolicitudDto: CreateSolicitudDto): Promise<Solicitud>;
    update(id: number, updateSolicitudDto: UpdateSolicitudDto): Promise<Solicitud>;
    findOne(id: number): Promise<Solicitud>;
    findAll(): Promise<Solicitud[]>;
    remove(id: number): Promise<any>;
}
