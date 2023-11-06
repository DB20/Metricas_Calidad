"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEspacioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_espacio_dto_1 = require("./create-espacio.dto");
class UpdateEspacioDto extends (0, swagger_1.PartialType)(create_espacio_dto_1.CreateEspacioDto) {
}
exports.UpdateEspacioDto = UpdateEspacioDto;
//# sourceMappingURL=update-espacio.dto.js.map