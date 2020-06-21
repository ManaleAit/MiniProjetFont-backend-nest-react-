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
const candidatures_service_1 = require("./candidatures.service");
const createCandidatureDTO_1 = require("./dto/createCandidatureDTO");
const AuthDTO_1 = require("./dto/AuthDTO");
const passport_1 = require("@nestjs/passport");
let CandidaturesController = class CandidaturesController {
    constructor(candidatureService) {
        this.candidatureService = candidatureService;
    }
    async getCandidatures(req) {
        return await this.candidatureService.getAllCandidatures();
    }
    async createCandidature(createCandDTO) {
        return this.candidatureService.createCandidature(createCandDTO);
    }
    async signIn(authDTO) {
        return this.candidatureService.signIn(authDTO);
    }
};
__decorate([
    common_1.Get(""),
    common_1.UseGuards(passport_1.AuthGuard("jwt-admin")),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CandidaturesController.prototype, "getCandidatures", null);
__decorate([
    common_1.Post("/add"),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createCandidatureDTO_1.CreateCandidatureDTO]),
    __metadata("design:returntype", Promise)
], CandidaturesController.prototype, "createCandidature", null);
__decorate([
    common_1.Post("/signin"),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthDTO_1.AuthDTO]),
    __metadata("design:returntype", Promise)
], CandidaturesController.prototype, "signIn", null);
CandidaturesController = __decorate([
    common_1.Controller('candidatures'),
    __metadata("design:paramtypes", [candidatures_service_1.CandidaturesService])
], CandidaturesController);
exports.CandidaturesController = CandidaturesController;
//# sourceMappingURL=candidatures.controller.js.map