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
const etudiant_repository_1 = require("./etudiant.repository");
const typeorm_1 = require("@nestjs/typeorm");
const filiere_repository_1 = require("../filieres/filiere.repository");
const filiere_entity_1 = require("../filieres/filiere.entity");
const AuthDTO_1 = require("../candidatures/dto/AuthDTO");
const jwt_payload_interface_1 = require("../candidatures/jwt-payload.interface");
const jwt_1 = require("@nestjs/jwt");
let etudiantsService = class etudiantsService {
    constructor(etudiantRepository, filiereRepository, jwtService) {
        this.etudiantRepository = etudiantRepository;
        this.filiereRepository = filiereRepository;
        this.jwtService = jwtService;
    }
    async getAllEtudiants() {
        return await this.etudiantRepository.find();
    }
    async getByMassar(massar) {
        const found = await this.etudiantRepository.findOne(massar);
        if (!found) {
            throw new common_1.NotFoundException('this etudiant  not found !! ');
        }
        return found;
    }
    async getByMassarFiliere(massar) {
        const found = await this.etudiantRepository.findOne(massar);
        if (!found) {
            throw new common_1.NotFoundException('this etudiant  not found !! ');
        }
        return found.filiere.nom_filiere;
    }
    async createEtudiant(createEtDTO) {
        var Et = this.etudiantRepository.create();
        Et.massar = createEtDTO.massar;
        Et.cin = createEtDTO.cin;
        Et.email = createEtDTO.email;
        Et.teleParent = createEtDTO.teleParent;
        Et.dateNaissance = createEtDTO.dateNaissance;
        Et.lieuNaissance = createEtDTO.lieuNaissance;
        Et.note = createEtDTO.note;
        Et.lastname_fr = createEtDTO.lastname_fr;
        Et.lastname_ar = createEtDTO.lastname_ar;
        Et.firstname_fr = createEtDTO.firstname_fr;
        Et.firstname_ar = createEtDTO.firstname_ar;
        Et.nationalite = createEtDTO.nationalite;
        Et.address = createEtDTO.address;
        Et.telephone = createEtDTO.cin;
        Et.nom_Prenom_Pere = createEtDTO.nom_Prenom_Pere;
        Et.profession_Pere = createEtDTO.profession_Pere;
        Et.nom_Prenom_mere = createEtDTO.nom_Prenom_mere;
        Et.profession_mere = createEtDTO.profession_mere;
        Et.lycee = createEtDTO.lycee;
        Et.id_filiere = createEtDTO.id_filiere;
        Et.adresse_parent = createEtDTO.adresse_parent;
        Et.annee_Bac = createEtDTO.annee_Bac;
        Et.type_Bac = createEtDTO.type_Bac;
        Et.mention = createEtDTO.mention;
        Et.password = createEtDTO.password;
        Et.delegue = createEtDTO.delegue;
        Et.academie = createEtDTO.academie;
        Et.niveau = createEtDTO.niveau;
        Et.photo = createEtDTO.photo;
        Et.status = createEtDTO.niveau;
        if (createEtDTO.externe === true) {
            Et.status = "externe";
        }
        Et.diplomePrecedent = createEtDTO.diplomePrecedent;
        Et.etablissement = createEtDTO.etablissement;
        Et.ville = createEtDTO.ville;
        Et.classement = createEtDTO.classement;
        Et.choixFilere1 = createEtDTO.choixFilere1;
        Et.choixFilere2 = createEtDTO.choixFilere2;
        Et.choixFilere3 = createEtDTO.choixFilere3;
        Et.confirmEmail = createEtDTO.confirmEmail;
        Et.confirmPassword = createEtDTO.confirmPassword;
        Et.externe = createEtDTO.externe;
        let filiere = await this.filiereRepository.findOne({
            id_filiere: createEtDTO.id_filiere,
        });
        Et.filiere = filiere;
        try {
            await this.etudiantRepository.insert(Et);
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
    async update(contact) {
        return await this.etudiantRepository.update(contact.massar, contact);
    }
    async delete(id) {
        return await this.etudiantRepository.delete(id);
    }
    async choixFiliere(nbplaceInfo, nbplaceIndus, nbplaceGPMC, nbplaceGTR) {
        var listEt = await this.etudiantRepository.find();
        const newLocal = (await listEt).length;
        var count = 0;
        for (var k = 0; k < newLocal; k++) {
            if (listEt[k].niveau === '2CP') {
                count++;
            }
        }
        var nombreEtudiantClasse = Math.trunc(count / 4);
        for (var i = 0; i < newLocal; i++) {
            if (listEt[i].classement <= nombreEtudiantClasse && listEt[i].niveau === '2CP') {
                let filiere = await this.filiereRepository.findOne({
                    id_filiere: listEt[i].choixFilere1
                });
                listEt[i].filiere = filiere;
                listEt[i].id_filiere = listEt[i].choixFilere1;
                await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                if (listEt[i].choixFilere1 == 1) {
                    nbplaceInfo--;
                }
                else if (listEt[i].choixFilere1 == 2) {
                    nbplaceIndus--;
                }
                else if (listEt[i].choixFilere1 == 3) {
                    nbplaceGPMC--;
                    ;
                }
                else {
                    nbplaceGTR--;
                }
            }
        }
        for (var i = 0; i < newLocal; i++) {
            if (listEt[i].classement > nombreEtudiantClasse && listEt[i].classement <= (2 * nombreEtudiantClasse) && listEt[i].niveau === '2CP') {
                if (listEt[i].choixFilere1 == 1 && nbplaceInfo > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    nbplaceInfo--;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                }
                else if (listEt[i].choixFilere1 == 2 && nbplaceIndus > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceIndus--;
                }
                else if (listEt[i].choixFilere1 == 3 && nbplaceGPMC > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGPMC--;
                }
                else if (listEt[i].choixFilere1 == 4 && nbplaceGTR > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGTR--;
                }
                else {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    if (listEt[i].choixFilere2 == 1) {
                        nbplaceInfo--;
                    }
                    else if (listEt[i].choixFilere2 == 2) {
                        nbplaceIndus--;
                    }
                    else if (listEt[i].choixFilere2 == 3) {
                        nbplaceGPMC--;
                    }
                    else {
                        nbplaceGTR--;
                    }
                }
            }
        }
        for (var i = 0; i < newLocal; i++) {
            if (listEt[i].classement > (2 * nombreEtudiantClasse) && listEt[i].classement <= (3 * nombreEtudiantClasse) && listEt[i].niveau === '2CP') {
                if (listEt[i].choixFilere1 == 1 && nbplaceInfo > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    nbplaceInfo--;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                }
                else if (listEt[i].choixFilere1 == 2 && nbplaceIndus > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceIndus--;
                }
                else if (listEt[i].choixFilere1 == 3 && nbplaceGPMC > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGPMC--;
                }
                else if (listEt[i].choixFilere1 == 4 && nbplaceGTR > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGTR--;
                }
                else if (listEt[i].choixFilere2 == 1 && nbplaceInfo > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    nbplaceInfo--;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                }
                else if (listEt[i].choixFilere2 == 2 && nbplaceIndus > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceIndus--;
                }
                else if (listEt[i].choixFilere2 == 3 && nbplaceGPMC > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGPMC--;
                }
                else if (listEt[i].choixFilere2 == 4 && nbplaceGTR > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGTR--;
                }
                else {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere3
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere3;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    if (listEt[i].choixFilere3 == 1) {
                        nbplaceInfo--;
                    }
                    else if (listEt[i].choixFilere3 == 2) {
                        nbplaceIndus--;
                    }
                    else if (listEt[i].choixFilere3 == 3) {
                        nbplaceGPMC--;
                    }
                    else {
                        nbplaceGTR--;
                    }
                }
            }
        }
        for (var i = 0; i < newLocal; i++) {
            if (listEt[i].classement > (3 * nombreEtudiantClasse) && listEt[i].niveau === '2CP') {
                if (listEt[i].choixFilere1 == 1 && nbplaceInfo > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    nbplaceInfo--;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                }
                else if (listEt[i].choixFilere1 == 2 && nbplaceIndus > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceIndus--;
                }
                else if (listEt[i].choixFilere1 == 3 && nbplaceGPMC > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGPMC--;
                }
                else if (listEt[i].choixFilere1 == 4 && nbplaceGTR > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere1
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere1;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGTR--;
                }
                else if (listEt[i].choixFilere2 == 1 && nbplaceInfo > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    nbplaceInfo--;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                }
                else if (listEt[i].choixFilere2 == 2 && nbplaceIndus > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceIndus--;
                }
                else if (listEt[i].choixFilere2 == 3 && nbplaceGPMC > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGPMC--;
                }
                else if (listEt[i].choixFilere2 == 4 && nbplaceGTR > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere2
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere2;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGTR--;
                }
                else if (listEt[i].choixFilere3 == 1 && nbplaceInfo > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere3
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere3;
                    nbplaceInfo--;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                }
                else if (listEt[i].choixFilere3 == 2 && nbplaceIndus > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere3
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere3;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceIndus--;
                }
                else if (listEt[i].choixFilere3 == 3 && nbplaceGPMC > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere3
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere3;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGPMC--;
                }
                else if (listEt[i].choixFilere3 == 4 && nbplaceGTR > 0) {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere3
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere3;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    nbplaceGTR--;
                }
                else {
                    let filiere = await this.filiereRepository.findOne({
                        id_filiere: listEt[i].choixFilere4
                    });
                    listEt[i].filiere = filiere;
                    listEt[i].id_filiere = listEt[i].choixFilere4;
                    await this.etudiantRepository.update(listEt[i].massar, listEt[i]);
                    if (listEt[i].choixFilere4 == 1) {
                        nbplaceInfo--;
                    }
                    else if (listEt[i].choixFilere4 == 2) {
                        nbplaceIndus--;
                    }
                    else if (listEt[i].choixFilere4 == 3) {
                        nbplaceGPMC--;
                    }
                    else {
                        nbplaceGTR--;
                    }
                }
            }
        }
    }
    async signIn(authDTO) {
        const { massar, email, password } = authDTO;
        const etudiant = await this.etudiantRepository.findOne({
            email,
            massar,
        });
        if (etudiant) {
            const payload = { massar, email };
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            throw new common_1.UnauthorizedException('Invalid Credentials');
        }
    }
};
etudiantsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(etudiant_repository_1.etudiantRepository)),
    __metadata("design:paramtypes", [etudiant_repository_1.etudiantRepository,
        filiere_repository_1.FiliereRepository,
        jwt_1.JwtService])
], etudiantsService);
exports.etudiantsService = etudiantsService;
//# sourceMappingURL=etudiant.service.js.map