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
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AdminService = class AdminService {
    constructor(adminRepo, jwtService) {
        this.adminRepo = adminRepo;
        this.jwtService = jwtService;
    }
    async signIn(adminAuthDTO) {
        const { username, password } = adminAuthDTO;
        const admin = await this.adminRepo.findOne({ username });
        if (admin) {
            if (await admin.validatePassword(password)) {
                const id_admin = admin.id_admin;
                const payload = { username, id_admin };
                const accessToken = await this.jwtService.sign(payload);
                return { accessToken };
            }
            else {
                throw new common_1.UnauthorizedException('Invalid Admin Credentials');
            }
        }
        else {
            throw new common_1.UnauthorizedException('Invalid Admin Credentials');
        }
    }
    async signUp(adminAuthDTO) {
        const salt = await bcrypt.genSalt();
        var admin = this.adminRepo.create();
        admin.username = adminAuthDTO.username;
        admin.pass_salt = salt;
        admin.password = await this.hashPassword(adminAuthDTO.password, salt);
        try {
            await this.adminRepo.insert(admin);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException('Username already exist');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async hashPassword(password, salt) {
        return await bcrypt.hash(password, salt);
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(admin_repository_1.AdminRepository)),
    __metadata("design:paramtypes", [admin_repository_1.AdminRepository,
        jwt_1.JwtService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map