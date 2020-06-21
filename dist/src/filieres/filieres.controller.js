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
const filieres_service_1 = require("./filieres.service");
const passport_1 = require("@nestjs/passport");
let FilieresController = class FilieresController {
    constructor(filiereService) {
        this.filiereService = filiereService;
    }
    async getAllFilieres() {
        return await this.filiereService.getAllFilieres();
    }
    async getTudo(fil) {
        return this.filiereService.getById(fil);
    }
    async createFiliere(body) {
        return await this.filiereService.createFiliere(body.nom_filiere);
    }
    async deleteFiliere(body) {
        return await this.filiereService.createFiliere(body.nom_filiere);
    }
    async updateFiliere(body) {
        return await this.filiereService.createFiliere(body.nom_filiere);
    }
};
__decorate([
    common_1.Get(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilieresController.prototype, "getAllFilieres", null);
__decorate([
    common_1.Get(':id_filiere'),
    __param(0, common_1.Param('id_filiere')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FilieresController.prototype, "getTudo", null);
__decorate([
    common_1.Post("/add"),
    common_1.UseGuards(passport_1.AuthGuard("jwt-admin")),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilieresController.prototype, "createFiliere", null);
__decorate([
    common_1.Delete("/delete/:id"),
    common_1.UseGuards(passport_1.AuthGuard("jwt-admin")),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilieresController.prototype, "deleteFiliere", null);
__decorate([
    common_1.Delete("/delete/:id"),
    common_1.UseGuards(passport_1.AuthGuard("jwt-admin")),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FilieresController.prototype, "updateFiliere", null);
FilieresController = __decorate([
    common_1.Controller('filieres'),
    __metadata("design:paramtypes", [filieres_service_1.FilieresService])
], FilieresController);
exports.FilieresController = FilieresController;
//# sourceMappingURL=filieres.controller.js.map