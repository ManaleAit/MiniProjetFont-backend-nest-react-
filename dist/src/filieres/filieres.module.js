"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const filieres_service_1 = require("./filieres.service");
const filieres_controller_1 = require("./filieres.controller");
const typeorm_1 = require("@nestjs/typeorm");
const filiere_repository_1 = require("./filiere.repository");
let FilieresModule = class FilieresModule {
};
FilieresModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([filiere_repository_1.FiliereRepository])],
        providers: [filieres_service_1.FilieresService],
        controllers: [filieres_controller_1.FilieresController]
    })
], FilieresModule);
exports.FilieresModule = FilieresModule;
//# sourceMappingURL=filieres.module.js.map