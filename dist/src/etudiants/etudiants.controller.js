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
const etudiant_service_1 = require("./etudiant.service");
const CreateEtudiantDTO_1 = require("./dto/CreateEtudiantDTO");
const imageFileFilter_1 = require("./imageFileFilter");
const editFileName_1 = require("./editFileName");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const AuthDTO_1 = require("../candidatures/dto/AuthDTO");
let EtudiantsController = class EtudiantsController {
    constructor(etudiantsService) {
        this.etudiantsService = etudiantsService;
    }
    async getetudiants() {
        return await this.etudiantsService.getAllEtudiants();
    }
    async createEtudiant(createEtDTO) {
        return this.etudiantsService.createEtudiant(createEtDTO);
    }
    async getStudentByEmail(email) {
        console.log(email);
        return this.etudiantsService.getByEmail(email);
    }
    async getTudo(ma) {
        return this.etudiantsService.getByMassar(ma);
    }
    async update(id, contactData) {
        contactData.massar = String(id);
        console.log('Update #' + contactData.massar);
        return this.etudiantsService.update(contactData);
    }
    async delete(id) {
        return this.etudiantsService.delete(id);
    }
    async choixFiliere(nbplaceInfo, nbplaceIndus, nbplaceGPMC, nbplaceGTR) {
        return this.etudiantsService.choixFiliere(nbplaceInfo, nbplaceIndus, nbplaceGPMC, nbplaceGTR);
    }
    async getdiliere(ma) {
        return this.etudiantsService.getByMassarFiliere(ma);
    }
    async uploadMultipleFiles(files) {
        const response = [];
        files.forEach(file => {
            const fileReponse = {
                originalname: file.originalname,
                filename: file.filename,
            };
            response.push(fileReponse);
        });
        return response;
    }
    seeUploadedFile(image, res) {
        return res.sendFile(image, { root: './uploads' });
    }
    async signIn(authDTO) {
        return this.etudiantsService.signIn(authDTO);
    }
};
__decorate([
    common_1.Get(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "getetudiants", null);
__decorate([
    common_1.Post("/add"),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEtudiantDTO_1.CreateEtudiantDTO]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "createEtudiant", null);
__decorate([
    common_1.Get('getbyemail/:email'),
    __param(0, common_1.Param('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "getStudentByEmail", null);
__decorate([
    common_1.Get(':massar'),
    __param(0, common_1.Param('massar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "getTudo", null);
__decorate([
    common_1.Put(':id/update'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateEtudiantDTO_1.CreateEtudiantDTO]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id/delete'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "delete", null);
__decorate([
    common_1.Put('/choixFiliere'),
    __param(0, common_1.Param('nbplaceInfo')), __param(1, common_1.Param('nbplaceIndus')), __param(2, common_1.Param('nbplaceGPMC')), __param(3, common_1.Param('nbplaceGTR')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "choixFiliere", null);
__decorate([
    common_1.Get(':massar/filiere'),
    __param(0, common_1.Param('massar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "getdiliere", null);
__decorate([
    common_1.Post('multiple'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('photo', 20, {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: editFileName_1.editFileName,
        }),
        fileFilter: imageFileFilter_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "uploadMultipleFiles", null);
__decorate([
    common_1.Get('/img/:imgpath'),
    __param(0, common_1.Param('imgpath')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EtudiantsController.prototype, "seeUploadedFile", null);
__decorate([
    common_1.Post("/signin"),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthDTO_1.AuthDTO]),
    __metadata("design:returntype", Promise)
], EtudiantsController.prototype, "signIn", null);
EtudiantsController = __decorate([
    common_1.Controller('etuds'),
    __metadata("design:paramtypes", [etudiant_service_1.etudiantsService])
], EtudiantsController);
exports.EtudiantsController = EtudiantsController;
//# sourceMappingURL=etudiants.controller.js.map