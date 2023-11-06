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
exports.CreateEspacioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateEspacioDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aulario II' }),
    __metadata("design:type", String)
], CreateEspacioDto.prototype, "edificio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Aula I' }),
    __metadata("design:type", String)
], CreateEspacioDto.prototype, "aula", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-03-16' }),
    __metadata("design:type", String)
], CreateEspacioDto.prototype, "fecha", void 0);
exports.CreateEspacioDto = CreateEspacioDto;
//# sourceMappingURL=create-espacio.dto.js.map