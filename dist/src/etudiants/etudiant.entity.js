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
const typeorm_1 = require("typeorm");
const filiere_entity_1 = require("../filieres/filiere.entity");
let etudiant = class etudiant extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryColumn("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "massar", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "cin", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "confirmPassword", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "confirmEmail", void 0);
__decorate([
    typeorm_1.Column("double"),
    __metadata("design:type", typeorm_1.Double)
], etudiant.prototype, "note", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], etudiant.prototype, "externe", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "lastname_fr", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "lastname_ar", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "firstname_fr", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "firstname_ar", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "nationalite", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "address", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 20 }),
    __metadata("design:type", String)
], etudiant.prototype, "telephone", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "nom_Prenom_Pere", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "teleParent", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "profession_Pere", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], etudiant.prototype, "nom_Prenom_mere", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], etudiant.prototype, "dateNaissance", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], etudiant.prototype, "lieuNaissance", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], etudiant.prototype, "diplomePrecedent", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], etudiant.prototype, "etablissement", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], etudiant.prototype, "ville", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 50 }),
    __metadata("design:type", String)
], etudiant.prototype, "profession_mere", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 10 }),
    __metadata("design:type", String)
], etudiant.prototype, "adresse_parent", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], etudiant.prototype, "annee_Bac", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], etudiant.prototype, "type_Bac", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 1100 }),
    __metadata("design:type", String)
], etudiant.prototype, "mention", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 1100 }),
    __metadata("design:type", String)
], etudiant.prototype, "lycee", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], etudiant.prototype, "delegue", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], etudiant.prototype, "academie", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], etudiant.prototype, "photo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], etudiant.prototype, "id_filiere", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], etudiant.prototype, "niveau", void 0);
__decorate([
    typeorm_1.ManyToOne(type => filiere_entity_1.Filiere, filiere => filiere.liste_etudiant),
    __metadata("design:type", filiere_entity_1.Filiere)
], etudiant.prototype, "filiere", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], etudiant.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], etudiant.prototype, "classement", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], etudiant.prototype, "choixFilere1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], etudiant.prototype, "choixFilere2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], etudiant.prototype, "choixFilere3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], etudiant.prototype, "choixFilere4", void 0);
etudiant = __decorate([
    typeorm_1.Entity()
], etudiant);
exports.etudiant = etudiant;
//# sourceMappingURL=etudiant.entity.js.map