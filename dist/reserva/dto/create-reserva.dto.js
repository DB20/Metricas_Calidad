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
exports.CreateReservaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateReservaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '09:00 - 12:00' }),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Reseva para ...' }),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bases de datos' }),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "asignatura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Manuel Torres Gil' }),
    __metadata("design:type", String)
], CreateReservaDto.prototype, "profesor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreateReservaDto.prototype, "espacio", void 0);
exports.CreateReservaDto = CreateReservaDto;
//# sourceMappingURL=create-reserva.dto.js.map