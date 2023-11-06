import { Solicitud } from './entities/solicitud.entity';
export declare class SolicitudRepositoryMock {
    mockSolicitud: Solicitud;
    save(solicitud: Solicitud): Promise<Solicitud>;
    findOne(id: number): Promise<Solicitud>;
    find(): Promise<Solicitud[]>;
    delete(id: number): Promise<any>;
}
