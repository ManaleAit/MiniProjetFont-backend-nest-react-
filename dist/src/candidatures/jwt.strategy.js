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
const jwt_config_1 = require("./../../config/jwt.config");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const typeorm_1 = require("@nestjs/typeorm");
const candidature_repository_1 = require("./candidature.repository");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, "jwt-user") {
    constructor(candRepo) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwt_config_1.JwtConstants.secret
        });
        this.candRepo = candRepo;
    }
    async validate(payload) {
        console.log("Valdiate Jwt user called");
        const { massar, email } = payload;
        const candidature = await this.candRepo.findOne({ massar, email });
        if (!candidature) {
            throw new common_1.UnauthorizedException();
        }
        return candidature;
    }
};
JwtStrategy = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(candidature_repository_1.CandidatureRepository)),
    __metadata("design:paramtypes", [candidature_repository_1.CandidatureRepository])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map