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
const admin_repository_1 = require("./admin.repository");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_config_1 = require("../../config/jwt.config");
const passport_jwt_1 = require("passport-jwt");
let JwtAdminStrategy = class JwtAdminStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, "jwt-admin") {
    constructor(adminRepo) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwt_config_1.JwtConstants.secret
        });
        this.adminRepo = adminRepo;
    }
    async validate(payload) {
        console.log("Valdiate Jwt Admin called");
        const { id_admin, username } = payload;
        const admin = await this.adminRepo.findOne({ id_admin, username });
        if (!admin) {
            throw new common_1.UnauthorizedException();
        }
        return admin;
    }
};
JwtAdminStrategy = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(admin_repository_1.AdminRepository)),
    __metadata("design:paramtypes", [admin_repository_1.AdminRepository])
], JwtAdminStrategy);
exports.JwtAdminStrategy = JwtAdminStrategy;
//# sourceMappingURL=jwt-admin.strategy.js.map