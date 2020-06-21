"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const etudiant_service_1 = require("./etudiant.service");
const typeorm_1 = require("@nestjs/typeorm");
const etudiant_repository_1 = require("./etudiant.repository");
const filiere_repository_1 = require("../filieres/filiere.repository");
const etudiants_controller_1 = require("./etudiants.controller");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_config_1 = require("../../config/jwt.config");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_strategy_1 = require("./jwt.strategy");
let EtudiantModule = class EtudiantModule {
};
EtudiantModule = __decorate([
    common_1.Module({
        imports: [passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: jwt_config_1.JwtConstants.secret,
                signOptions: {
                    expiresIn: 3600,
                },
            }), typeorm_1.TypeOrmModule.forFeature([etudiant_repository_1.etudiantRepository, filiere_repository_1.FiliereRepository]), platform_express_1.MulterModule.register({
                dest: './uploads',
            })],
        providers: [etudiant_service_1.etudiantsService, jwt_strategy_1.JwtStrategy],
        controllers: [etudiants_controller_1.EtudiantsController],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule],
    })
], EtudiantModule);
exports.EtudiantModule = EtudiantModule;
//# sourceMappingURL=etudiant.module.js.map