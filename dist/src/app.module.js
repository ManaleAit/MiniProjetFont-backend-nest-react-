"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const candidatures_module_1 = require("./candidatures/candidatures.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("../config/typeorm.config");
const filieres_module_1 = require("./filieres/filieres.module");
const deplomes_candidature_module_1 = require("./deplomes-candidature/deplomes-candidature.module");
const admin_module_1 = require("./admin/admin.module");
const etudiant_module_1 = require("./etudiants/etudiant.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.config),
            candidatures_module_1.CandidaturesModule,
            filieres_module_1.FilieresModule,
            etudiant_module_1.EtudiantModule,
            admin_module_1.AdminModule,
            deplomes_candidature_module_1.DeplomesCandidatureModule,
        ],
        controllers: [],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map