"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_config_1 = require("./../../config/jwt.config");
const jwt_strategy_1 = require("./jwt.strategy");
const common_1 = require("@nestjs/common");
const candidatures_controller_1 = require("./candidatures.controller");
const candidatures_service_1 = require("./candidatures.service");
const typeorm_1 = require("@nestjs/typeorm");
const candidature_repository_1 = require("./candidature.repository");
const filiere_repository_1 = require("../filieres/filiere.repository");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_admin_strategy_1 = require("../admin/jwt-admin.strategy");
const admin_repository_1 = require("../admin/admin.repository");
let CandidaturesModule = class CandidaturesModule {
};
CandidaturesModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt-admin' }),
            jwt_1.JwtModule.register({
                secret: jwt_config_1.JwtConstants.secret,
                signOptions: {
                    expiresIn: 3600,
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([candidature_repository_1.CandidatureRepository, filiere_repository_1.FiliereRepository, admin_repository_1.AdminRepository]),
        ],
        providers: [candidatures_service_1.CandidaturesService, jwt_strategy_1.JwtStrategy, jwt_admin_strategy_1.JwtAdminStrategy],
        controllers: [candidatures_controller_1.CandidaturesController],
        exports: [jwt_strategy_1.JwtStrategy, jwt_admin_strategy_1.JwtAdminStrategy, passport_1.PassportModule],
    })
], CandidaturesModule);
exports.CandidaturesModule = CandidaturesModule;
//# sourceMappingURL=candidatures.module.js.map