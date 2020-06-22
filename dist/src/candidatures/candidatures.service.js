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
const candidature_repository_1 = require("./candidature.repository");
const typeorm_1 = require("@nestjs/typeorm");
const filiere_entity_1 = require("../filieres/filiere.entity");
const filiere_repository_1 = require("../filieres/filiere.repository");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let CandidaturesService = class CandidaturesService {
    constructor(candidatureRepository, filiereRepository, jwtService) {
        this.candidatureRepository = candidatureRepository;
        this.filiereRepository = filiereRepository;
        this.jwtService = jwtService;
    }
    async getAllCandidatures() {
        return await this.candidatureRepository.find();
    }
    async createCandidature(createCandDTO) {
        const salt = await bcrypt.genSalt();
        var cand = this.candidatureRepository.create();
        cand.massar = createCandDTO.massar;
        cand.cin = createCandDTO.cin;
        cand.nom = createCandDTO.nom;
        cand.prenom = createCandDTO.prenom;
        cand.email = createCandDTO.email;
        cand.pass_salt = salt;
        cand.password = await this.hashPassword(createCandDTO.password, salt);
        cand.photo = createCandDTO.photo;
        cand.niveau = createCandDTO.niveau;
        cand.adresse = createCandDTO.adresse;
        cand.date_naissance = createCandDTO.date_naissance;
        cand.created_at = new Date();
        cand.updated_at = new Date();
        let filiere = await this.filiereRepository.findOne({
            id_filiere: createCandDTO.id_filiere,
        });
        cand.filiere = filiere;
        try {
            await this.candidatureRepository.insert(cand);
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException('Code Massar , CIN or Email Already Exist');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async signIn(authDTO) {
        const { massar, email, password } = authDTO;
        const candidature = await this.candidatureRepository.findOne({
            email,
            massar,
        });
        if (candidature) {
            if (await candidature.validatePassword(password)) {
                const payload = { massar, email };
                const accessToken = await this.jwtService.sign(payload);
                return { accessToken };
            }
            else {
                throw new common_1.UnauthorizedException('Invalid Credentials');
            }
        }
        else {
            throw new common_1.UnauthorizedException('Invalid Credentials');
        }
    }
    async hashPassword(password, salt) {
        return await bcrypt.hash(password, salt);
    }
};
CandidaturesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(candidature_repository_1.CandidatureRepository)),
    __metadata("design:paramtypes", [candidature_repository_1.CandidatureRepository,
        filiere_repository_1.FiliereRepository,
        jwt_1.JwtService])
], CandidaturesService);
exports.CandidaturesService = CandidaturesService;
//# sourceMappingURL=candidatures.service.js.map