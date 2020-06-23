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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCandidatureDTO {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(10),
    class_validator_1.MaxLength(10),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCandidatureDTO.prototype, "massar", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4),
    class_validator_1.MaxLength(8),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCandidatureDTO.prototype, "cin", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    class_validator_1.MaxLength(20),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCandidatureDTO.prototype, "nom", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    class_validator_1.MaxLength(20),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCandidatureDTO.prototype, "prenom", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    class_validator_1.MaxLength(20),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCandidatureDTO.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    class_validator_1.MaxLength(20),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCandidatureDTO.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCandidatureDTO.prototype, "photo", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateCandidatureDTO.prototype, "niveau", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(8),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateCandidatureDTO.prototype, "adresse", void 0);
__decorate([
    class_validator_1.IsDate(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], CreateCandidatureDTO.prototype, "date_naissance", void 0);
__decorate([
    class_validator_1.IsNumber(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateCandidatureDTO.prototype, "id_filiere", void 0);
exports.CreateCandidatureDTO = CreateCandidatureDTO;
//# sourceMappingURL=createCandidatureDTO.js.map