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
exports.Solicitud = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Solicitud = class Solicitud {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 99 }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Solicitud.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Manuel Torres Gil' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Profesor Titular de Universidad' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "cargo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Departamento de Informática' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "unidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '84030' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'mtorres@ual.es' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Docente' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Taller Testing APIs NestJS' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "nombreActividad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-03-14' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Solicitud.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-03-28' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Solicitud.prototype, "end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Martes' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "dia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "horaInicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Solicitud.prototype, "horaFin", void 0);
Solicitud = __decorate([
    (0, typeorm_1.Entity)()
], Solicitud);
exports.Solicitud = Solicitud;
//# sourceMappingURL=solicitud.entity.js.map