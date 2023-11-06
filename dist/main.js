"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API de Espacios (Tutorial)')
        .setDescription('Documentación de la API de espacios para el tutorial')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document, {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
    app.enableCors();
    const config = app.get(config_1.ConfigService);
    await app.listen(config.get('port'));
}
bootstrap();
//# sourceMappingURL=main.js.map