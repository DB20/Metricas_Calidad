"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: process.env.PORT,
    jwt: {
        jwtSecret: process.env.JWT_SECRET,
    },
});
//# sourceMappingURL=configuration.js.map