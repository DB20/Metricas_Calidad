"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSolicitudDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSolicitudDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Manuel Torres Gil' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Profesor Titular de Universidad' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "cargo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Departamento de Informática' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "unidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '84030' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'mtorres@ual.es' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Docente' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Taller Testing APIs NestJS' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "nombreActividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-03-14' }),
    __metadata("design:type", Date)
], CreateSolicitudDto.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-03-28' }),
    __metadata("design:type", Date)
], CreateSolicitudDto.prototype, "end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Martes' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "dia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "horaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12' }),
    __metadata("design:type", String)
], CreateSolicitudDto.prototype, "horaFin", void 0);
exports.CreateSolicitudDto = CreateSolicitudDto;
//# sourceMappingURL=create-solicitud.dto.js.map