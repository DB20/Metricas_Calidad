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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspacioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const espacio_entity_1 = require("./entities/espacio.entity");
const typeorm_2 = require("typeorm");
let EspacioService = class EspacioService {
    constructor(espacioRepository) {
        this.espacioRepository = espacioRepository;
    }
    async create(createEspacioDto) {
        return await this.espacioRepository.save(createEspacioDto);
    }
    async findAll() {
        return await this.espacioRepository.find();
    }
    async findOne(id) {
        return await this.espacioRepository.findOne({ where: { id } });
    }
    async update(id, updateEspacioDto) {
        let toUpdate = await this.espacioRepository.findOne(id);
        let updated = Object.assign(toUpdate, updateEspacioDto);
        return this.espacioRepository.save(updated);
    }
    async remove(id) {
        return await this.espacioRepository.delete({ id });
    }
};
EspacioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(espacio_entity_1.Espacio)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], EspacioService);
exports.EspacioService = EspacioService;
//# sourceMappingURL=espacio.service.js.map