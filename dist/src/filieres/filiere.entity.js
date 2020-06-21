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
const candidature_entity_1 = require("../candidatures/candidature.entity");
const etudiant_entity_1 = require("../etudiants/etudiant.entity");
let Filiere = class Filiere extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Filiere.prototype, "id_filiere", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], Filiere.prototype, "nom_filiere", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime" }),
    __metadata("design:type", Date)
], Filiere.prototype, "created_at", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime" }),
    __metadata("design:type", Date)
], Filiere.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.OneToMany(type => candidature_entity_1.Candidature, candidature => candidature.filiere),
    __metadata("design:type", Array)
], Filiere.prototype, "liste_candidature", void 0);
__decorate([
    typeorm_1.OneToMany(type => etudiant_entity_1.etudiant, etudiant => etudiant.filiere),
    __metadata("design:type", Array)
], Filiere.prototype, "liste_etudiant", void 0);
Filiere = __decorate([
    typeorm_1.Entity()
], Filiere);
exports.Filiere = Filiere;
//# sourceMappingURL=filiere.entity.js.map