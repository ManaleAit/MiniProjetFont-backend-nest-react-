"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.Getetudaint = common_1.createParamDecorator((data, req) => {
    return req.user;
});
//# sourceMappingURL=etudiant.decorator.js.map