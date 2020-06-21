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
let DeplomesCandidature = class DeplomesCandidature extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], DeplomesCandidature.prototype, "id_deplome", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 10 }),
    __metadata("design:type", String)
], DeplomesCandidature.prototype, "type_deplome", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 120 }),
    __metadata("design:type", String)
], DeplomesCandidature.prototype, "etablissement", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 120 }),
    __metadata("design:type", String)
], DeplomesCandidature.prototype, "deplome_scan", void 0);
__decorate([
    typeorm_1.Column({ type: "simple-json" }),
    __metadata("design:type", Object)
], DeplomesCandidature.prototype, "notes", void 0);
__decorate([
    typeorm_1.Column({ type: "bool" }),
    __metadata("design:type", String)
], DeplomesCandidature.prototype, "redoublement", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 30 }),
    __metadata("design:type", String)
], DeplomesCandidature.prototype, "villeEtablissement", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', width: 4 }),
    __metadata("design:type", String)
], DeplomesCandidature.prototype, "anneeDiplome", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime" }),
    __metadata("design:type", Date)
], DeplomesCandidature.prototype, "created_at", void 0);
__decorate([
    typeorm_1.Column({ type: "datetime" }),
    __metadata("design:type", Date)
], DeplomesCandidature.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.ManyToOne(type => candidature_entity_1.Candidature, candidature => candidature.liste_deplomes),
    __metadata("design:type", candidature_entity_1.Candidature)
], DeplomesCandidature.prototype, "candidature", void 0);
DeplomesCandidature = __decorate([
    typeorm_1.Entity()
], DeplomesCandidature);
exports.DeplomesCandidature = DeplomesCandidature;
//# sourceMappingURL=deplomes-candidature.entity.js.map