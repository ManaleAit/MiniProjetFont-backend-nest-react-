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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const filiere_entity_1 = require("./filiere.entity");
const filiere_repository_1 = require("./filiere.repository");
const typeorm_1 = require("@nestjs/typeorm");
let FilieresService = class FilieresService {
    constructor(filiereRepository) {
        this.filiereRepository = filiereRepository;
    }
    async getAllFilieres() {
        return await this.filiereRepository.find();
    }
    async createFiliere(nom_filiere) {
        const filiere = new filiere_entity_1.Filiere();
        filiere.nom_filiere = nom_filiere;
        filiere.created_at = new Date();
        filiere.updated_at = new Date();
        await this.filiereRepository.save(filiere);
        return filiere;
    }
    async getById(id_filiere) {
        const found = await this.filiereRepository.findOne(id_filiere);
        if (!found) {
            throw new common_1.NotFoundException('this filiere  not found !! ');
        }
        return found;
    }
};
FilieresService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(filiere_repository_1.FiliereRepository)),
    __metadata("design:paramtypes", [filiere_repository_1.FiliereRepository])
], FilieresService);
exports.FilieresService = FilieresService;
//# sourceMappingURL=filieres.service.js.map