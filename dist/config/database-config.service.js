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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
let DatabaseConfigService = class DatabaseConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.configService.get(key);
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    createTypeOrmOptions() {
        this.ensureValues([
            'DATABASE_TYPE',
            'DATABASE_HOST',
            'DATABASE_PORT',
            'DATABASE_USER',
            'DATABASE_PASSWORD',
            'DATABASE_DATABASE',
        ]);
        return {
            type: this.getValue('DATABASE_TYPE'),
            host: this.getValue('DATABASE_HOST'),
            port: parseInt(this.getValue('DATABASE_PORT')),
            username: this.getValue('DATABASE_USER'),
            password: this.getValue('DATABASE_PASSWORD'),
            sid: this.getValue('DATABASE_DATABASE'),
            database: this.getValue('DATABASE_DATABASE'),
            autoLoadEntities: true,
            synchronize: true,
        };
    }
};
DatabaseConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], DatabaseConfigService);
exports.DatabaseConfigService = DatabaseConfigService;
//# sourceMappingURL=database-config.service.js.map