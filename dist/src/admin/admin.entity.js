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
const bcrypt = require("bcrypt");
let Admin = class Admin extends typeorm_1.BaseEntity {
    async validatePassword(password) {
        const hash = await bcrypt.hash(password, this.pass_salt);
        return (hash === this.password);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Admin.prototype, "id_admin", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: 30, unique: true }),
    __metadata("design:type", String)
], Admin.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 60 }),
    __metadata("design:type", String)
], Admin.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("varchar", { length: 40 }),
    __metadata("design:type", String)
], Admin.prototype, "pass_salt", void 0);
Admin = __decorate([
    typeorm_1.Entity()
], Admin);
exports.Admin = Admin;
//# sourceMappingURL=admin.entity.js.map