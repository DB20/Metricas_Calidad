"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudRepositoryMock = void 0;
class SolicitudRepositoryMock {
    constructor() {
        this.mockSolicitud = {
            id: 1,
            nombre: 'John Doe',
            cargo: 'Assistant Professor',
            unidad: 'Informatics Department',
            telefono: '1234',
            email: 'john.doe@gmail.com',
            tipo: '',
            nombreActividad: '',
            start: undefined,
            end: undefined,
            dia: '',
            horaInicio: '',
            horaFin: '',
        };
    }
    save(solicitud) {
        return Promise.resolve(this.mockSolicitud);
    }
    findOne(id) {
        return Promise.resolve(this.mockSolicitud);
    }
    find() {
        return Promise.resolve([this.mockSolicitud]);
    }
    delete(id) {
        return Promise.resolve();
    }
}
exports.SolicitudRepositoryMock = SolicitudRepositoryMock;
//# sourceMappingURL=solicitud-repository-mock.js.map