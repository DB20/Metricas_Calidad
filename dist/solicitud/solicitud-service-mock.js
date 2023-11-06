"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudServiceMock = void 0;
class SolicitudServiceMock {
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
    async create(createSolicitudDto) {
        return Promise.resolve(Object.assign({ id: Math.random() * (1000 - 1) + 1 }, createSolicitudDto));
    }
    async update(id, updateSolicitudDto) {
        return Promise.resolve(Object.assign({ id: id }, updateSolicitudDto));
    }
    async findOne(id) {
        this.mockSolicitud.id = id;
        return Promise.resolve(this.mockSolicitud);
    }
    async findAll() {
        return Promise.resolve([this.mockSolicitud]);
    }
    async remove(id) {
        return Promise.resolve({
            raw: [],
            affected: 1,
        });
    }
}
exports.SolicitudServiceMock = SolicitudServiceMock;
//# sourceMappingURL=solicitud-service-mock.js.map