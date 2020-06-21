import { etudiant } from './etudiant.entity';
import { etudiantRepository } from './etudiant.repository';
import { CreateEtudiantDTO } from './dto/createEtudiantDTO';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { AuthDTO } from 'src/candidatures/dto/AuthDTO';
import { JwtService } from '@nestjs/jwt';
export declare class etudiantsService {
    private etudiantRepository;
    private filiereRepository;
    private jwtService;
    constructor(etudiantRepository: etudiantRepository, filiereRepository: FiliereRepository, jwtService: JwtService);
    getAllEtudiants(): Promise<etudiant[]>;
    getByMassar(massar: string): Promise<etudiant>;
    getByMassarFiliere(massar: string): Promise<any>;
    createEtudiant(createEtDTO: CreateEtudiantDTO): Promise<void>;
    update(contact: CreateEtudiantDTO): Promise<any>;
    delete(id: any): Promise<any>;
    choixFiliere(nbplaceInfo: number, nbplaceIndus: number, nbplaceGPMC: number, nbplaceGTR: number): Promise<void>;
    signIn(authDTO: AuthDTO): Promise<{
        accessToken: string;
    }>;
}
