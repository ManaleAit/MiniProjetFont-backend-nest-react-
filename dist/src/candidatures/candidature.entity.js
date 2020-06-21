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
const deplomes_candidature_entity_1 = require("../deplomes-candidature/deplomes-candidature.entity");
const bcrypt = require("bcrypt");
var CANDIDATURE_STATU;
(function (CANDIDATURE_STATU) {
    CANDIDATURE_STATU[CANDIDATURE_STATU["Active"] = 1] = "Active";
    CANDIDATURE_STATU[CANDIDATURE_STATU["Desactive"] = 2] = "Desactive";
})(CANDIDATURE_STATU || (CANDIDATURE_STATU = {}));
let Candidature = class Candidature extends typeorm_1.BaseEntity {
    async validatePassword(password) {
        const hash = await bcrypt.hash(password, this.pass_salt);
        return (hash === this.password);
    }
};
__decorate([
    typeorm_1.PrimaryColumn("varchar", { length: 10 }),
    __metadata("design:type", String)
], Candidature.prototype, "massar", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 10, unique: true }),
    __metadata("design:type", String)
], Candidature.prototype, "cin", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], Candidature.prototype, "nom", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], Candidature.prototype, "prenom", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 40, unique: true }),
    __metadata("design:type", String)
], Candidature.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 100 }),
    __metadata("design:type", String)
], Candidature.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 50 }),
    __metadata("design:type", String)
], Candidature.prototype, "pass_salt", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', width: 1, default: CANDIDATURE_STATU.Desactive }),
    __metadata("design:type", Number)
], Candidature.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 50 }),
    __metadata("design:type", String)
], Candidature.prototype, "photo", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', width: 1 }),
    __metadata("design:type", Number)
], Candidature.prototype, "niveau", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 255 }),
    __metadata("design:type", String)
], Candidature.prototype, "adresse", void 0);
__decorate([
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", Date)
], Candidature.prototype, "date_naissance", void 0);
__decorate([
    typeorm_1.Column({ type: "bool", width: 1, default: 0 }),
    __metadata("design:type", Boolean)
], Candidature.prototype, "depot_dossier", void 0);
__decorate([
    typeorm_1.Column({ type: "bool", width: 1, default: 0 }),
    __metadata("design:type", Boolean)
], Candidature.prototype, "presence", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime" }),
    __metadata("design:type", Date)
], Candidature.prototype, "verified_at", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime" }),
    __metadata("design:type", Date)
], Candidature.prototype, "created_at", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime" }),
    __metadata("design:type", Date)
], Candidature.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.ManyToOne(type => filiere_entity_1.Filiere, filiere => filiere.liste_candidature),
    __metadata("design:type", filiere_entity_1.Filiere)
], Candidature.prototype, "filiere", void 0);
__decorate([
    typeorm_1.OneToMany(type => deplomes_candidature_entity_1.DeplomesCandidature, dep => dep.candidature),
    __metadata("design:type", Array)
], Candidature.prototype, "liste_deplomes", void 0);
Candidature = __decorate([
    typeorm_1.Entity()
], Candidature);
exports.Candidature = Candidature;
//# sourceMappingURL=candidature.entity.js.map